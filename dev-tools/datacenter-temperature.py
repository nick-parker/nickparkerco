import numpy as np
import plotly.graph_objects as go
from PIL import Image
import base64
from io import BytesIO

# --- Physical constants (SI) ---
H       = 6.62607015e-34       # Planck constant (J·s)
C_LIGHT = 2.99792458e8         # Speed of light (m/s)
K_B     = 1.380649e-23         # Boltzmann constant (J/K)
Q_E     = 1.602176634e-19      # Elementary charge (C)

# --- Solar parameters ---
T_SUN = 5778.0                 # Effective temperature of Sun (K)
R_SUN = 6.957e8                # Solar radius (m)
AU    = 1.495978707e11         # Astronomical Unit (m)
GEOM  = (R_SUN / AU) ** 2      # (R/AU)^2

WL_MIN = 200.0
WL_MAX = 5000.0                # Integration extends to MWIR
WL_DISPLAY_MAX = 1500.0        # Display range for plot
STEP   = 1.0
ETA_REF = 0.22                 # "nice terrestrial" panel efficiency reference


def planck_lambda(lam_m, T):
    """Spectral radiance B_λ (W·sr⁻¹·m⁻²·m⁻¹) for a blackbody at temp T."""
    a = 2 * H * C_LIGHT**2 / lam_m**5
    b = H * C_LIGHT / (lam_m * K_B * T)
    return a / (np.exp(b) - 1)


def am0_irradiance_nm(wavelength_nm):
    """Solar spectral irradiance at 1 AU, above atmosphere (AM0). W/m²/nm."""
    wl_nm = np.asarray(wavelength_nm, dtype=float)
    lam_m = wl_nm * 1e-9
    B = planck_lambda(lam_m, T_SUN)        # W·sr⁻¹·m⁻²·m⁻¹
    E_lam_m = np.pi * B * GEOM             # W·m⁻²·m⁻¹
    return E_lam_m * 1e-9                  # W·m⁻²·nm⁻¹


def silicon_eqe_approx(wavelength_nm):
    """Approximate EQE of crystalline silicon vs λ (0–1)."""
    wl = np.asarray(wavelength_nm, dtype=float)
    eqe = np.zeros_like(wl)

    # 300–400 nm: ramp up
    m = (wl >= 300) & (wl < 400)
    eqe[m] = 0.9 * (wl[m] - 300) / (400 - 300)

    # 400–900 nm: high, fairly flat EQE (~90%)
    m = (wl >= 400) & (wl <= 900)
    eqe[m] = 0.9

    # 900–1000 nm: slight roll-off (0.9 → 0.8)
    m = (wl > 900) & (wl <= 1000)
    eqe[m] = 0.8 + 0.1 * (1000 - wl[m]) / (1000 - 900)

    # 1000–1150 nm: smooth band-edge tail: 0.8 → 0
    m = (wl > 1000) & (wl <= 1150)
    x = (wl[m] - 1000) / (1150 - 1000)
    eqe[m] = 0.8 * 0.5 * (1 + np.cos(np.pi * x))

    return eqe


def jsc_longpass(cut_on_nm, wl_min=WL_MIN, wl_max=WL_MAX, step=STEP):
    """Short-circuit current density J_sc (A/m²) under AM0 with long-pass."""
    wl = np.arange(wl_min, wl_max + step, step)
    F = am0_irradiance_nm(wl)          # W/m²/nm
    eqe = silicon_eqe_approx(wl)
    T = (wl >= cut_on_nm).astype(float)

    E_ph = H * C_LIGHT / (wl * 1e-9)   # J
    phi = F / E_ph                     # photons/(m²·s·nm)

    integrand = eqe * T * phi
    J_sc = Q_E * np.trapezoid(integrand, wl)
    return float(J_sc)


def calibrate_scale(eta_ref=ETA_REF,
                    wl_min=WL_MIN, wl_max=WL_MAX, step=STEP):
    """Effective 'voltage' factor so unfiltered panel has efficiency eta_ref."""
    wl = np.arange(wl_min, wl_max + step, step)
    F = am0_irradiance_nm(wl)
    G_ref = float(np.trapezoid(F, wl))              # W/m² total band

    J_ref = jsc_longpass(wl_min, wl_min, wl_max, step)
    P_ref = eta_ref * G_ref

    scale = P_ref / J_ref                       # W/A
    return float(scale), float(G_ref), float(J_ref)


def power_density_longpass(cut_on_nm,
                           eta_ref=ETA_REF,
                           wl_min=WL_MIN,
                           wl_max=WL_MAX,
                           step=STEP):
    """Electrical power density (W/m²) for long-pass at cut_on_nm."""
    scale, _, _ = calibrate_scale(eta_ref, wl_min, wl_max, step)
    J_sc = jsc_longpass(cut_on_nm, wl_min, wl_max, step)
    return scale * J_sc


def accepted_irradiance_longpass(cut_on_nm,
                                 wl_min=WL_MIN,
                                 wl_max=WL_MAX,
                                 step=STEP):
    """Optical power after the long-pass filter (W/m²)."""
    wl = np.arange(wl_min, wl_max + step, step)
    F = am0_irradiance_nm(wl)
    T = (wl >= cut_on_nm).astype(float)
    return float(np.trapezoid(F * T, wl))


def efficiency_longpass(cut_on_nm,
                        eta_ref=ETA_REF,
                        wl_min=WL_MIN,
                        wl_max=WL_MAX,
                        step=STEP):
    """η_total (vs band) and η_accepted (vs accepted power)."""
    wl = np.arange(wl_min, wl_max + step, step)
    F = am0_irradiance_nm(wl)
    G_ref = float(np.trapezoid(F, wl))

    P_out = power_density_longpass(cut_on_nm, eta_ref, wl_min, wl_max, step)
    P_in  = accepted_irradiance_longpass(cut_on_nm, wl_min, wl_max, step)

    eta_total    = P_out / G_ref if G_ref > 0 else 0.0
    eta_accepted = P_out / P_in   if P_in  > 0 else 0.0
    return float(eta_total), float(eta_accepted), float(P_in), float(P_out)

# Stefan–Boltzmann constant
SIGMA_SB = 5.670374419e-8   # W/m²/K⁴

def absorbed_solar_power_density(min_nm, max_nm, step=1.0):
    """Integrated absorbed solar power per m² for full absorption in [min_nm, max_nm]."""
    wl = np.arange(min_nm, max_nm + step, step)
    F  = am0_irradiance_nm(wl)
    return float(np.trapezoid(F, wl))


def equilibrium_temperature(min_nm, max_nm, step=1.0,
                            area_ratio=1.0,  # Flat plate default (1.0)
                            absorptivity=1.0):
    """
    Radiative equilibrium temperature for an object that:
      - absorbs perfectly in [min_nm, max_nm],
      - reflects everything else,
      - emits as a graybody with ε=1 everywhere.

    area_ratio = A_absorb / A_emit.
      sphere → 1/4
      flat plate → 1
    """
    P_abs = absorbed_solar_power_density(min_nm, max_nm, step) * absorptivity
    T = (P_abs * area_ratio / SIGMA_SB) ** 0.25
    return float(T)


def wavelength_to_rgb(wavelength_nm):
    """Convert wavelength (nm) to RGB color tuple (0-255)."""
    wl = wavelength_nm

    # Handle UV region (below visible)
    if wl < 380:
        r, g, b = 0.4, 0.0, 0.6
        factor = max(0.2, 0.2 + 0.8 * (wl - 200) / (380 - 200)) if wl > 200 else 0.2
    # Violet: 380-440 nm
    elif wl < 440:
        r = (440 - wl) / (440 - 380)
        g = 0.0
        b = 1.0
        factor = 0.3 + 0.7 * (wl - 380) / (420 - 380) if wl < 420 else 1.0
    # Blue: 440-490 nm
    elif wl < 490:
        r = 0.0
        g = (wl - 440) / (490 - 440)
        b = 1.0
        factor = 1.0
    # Cyan: 490-510 nm
    elif wl < 510:
        r = 0.0
        g = 1.0
        b = (510 - wl) / (510 - 490)
        factor = 1.0
    # Green: 510-580 nm
    elif wl < 580:
        r = (wl - 510) / (580 - 510)
        g = 1.0
        b = 0.0
        factor = 1.0
    # Yellow-Orange: 580-645 nm
    elif wl < 645:
        r = 1.0
        g = (645 - wl) / (645 - 580)
        b = 0.0
        factor = 1.0
    # Red: 645-780 nm
    elif wl <= 780:
        r = 1.0
        g = 0.0
        b = 0.0
        factor = 0.3 + 0.7 * (780 - wl) / (780 - 700) if wl > 700 else 1.0
    # IR region (above visible) - fade to dark red
    else:
        r, g, b = 0.5, 0.0, 0.0
        factor = max(0.1, 0.3 * (1 - (wl - 780) / (1500 - 780)))

    return (int(r * factor * 255), int(g * factor * 255), int(b * factor * 255))


def create_spectrum_image(wl_min, wl_max, width=1000, height=10):
    """Create horizontal gradient image matching wavelength colors."""
    img = np.zeros((height, width, 3), dtype=np.uint8)
    for x in range(width):
        wl = wl_min + (wl_max - wl_min) * x / (width - 1)
        rgb = wavelength_to_rgb(wl)
        img[:, x, :] = rgb
    return Image.fromarray(img)


def image_to_data_uri(img):
    """Convert PIL image to base64 data URI."""
    buffer = BytesIO()
    img.save(buffer, format='PNG')
    data = base64.b64encode(buffer.getvalue()).decode()
    return f"data:image/png;base64,{data}"


# --- Precompute static spectra (display range only) ---
wl_grid = np.arange(WL_MIN, WL_DISPLAY_MAX + STEP, STEP)
F_am0   = am0_irradiance_nm(wl_grid)
eqe     = silicon_eqe_approx(wl_grid)

E_ph = H * C_LIGHT / (wl_grid * 1e-9)
resp = Q_E * eqe / E_ph
resp_norm = resp / np.nanmax(resp)

# --- Create spectrum gradient image (display range) ---
spectrum_img = create_spectrum_image(WL_MIN, WL_DISPLAY_MAX, width=1300, height=10)
spectrum_uri = image_to_data_uri(spectrum_img)
max_y = float(np.max(F_am0) * 1.05)

# White mask polygon above AM0 curve (static - doesn't change with slider)
curve_mask_x = np.concatenate([[WL_MIN, WL_DISPLAY_MAX], wl_grid[::-1]]).tolist()
curve_mask_y = np.concatenate([[max_y, max_y], F_am0[::-1]]).tolist()

# --- Prepare slider values and per-cut annotations ---
# Note: integrals use WL_MAX (5000nm) for accurate temps, display uses WL_DISPLAY_MAX
cut_values = list(range(200, int(WL_DISPLAY_MAX) + 1, 25))
scale, G_ref, J_ref = calibrate_scale()

frames = []
for cut in cut_values:
    eta_tot, eta_acc, P_in, P_out = efficiency_longpass(cut)

    # Rejection mask: white polygon covering λ < cut_on (from 0 to max_y)
    rejection_mask_x = [WL_MIN, cut, cut, WL_MIN]
    rejection_mask_y = [0, 0, max_y, max_y]

    # vertical line y-range
    yline = [0, max_y]

    T_eq = equilibrium_temperature(cut, WL_MAX)

    annotation_text = (
        f"cut-on λc = {cut:.0f} nm<br>"
        f"Optical after filter: {P_in:6.1f} W/m²<br>"
        f"Electrical output: {P_out:6.1f} W/m²<br>"
        f"η_total (vs band): {eta_tot*100:5.2f}%<br>"
        f"η_accepted: {eta_acc*100:5.2f}%<br>"
        f"T_equilibrium: {T_eq - 273.15:.1f} °C"
    )

    frames.append(
        go.Frame(
            name=str(cut),
            data=[
                # trace 0: curve mask (static - white above AM0 curve)
                go.Scatter(x=curve_mask_x, y=curve_mask_y),
                # trace 1: rejection mask (animated - white for λ < cut_on)
                go.Scatter(x=rejection_mask_x, y=rejection_mask_y),
                # trace 2: AM0 irradiance line
                go.Scatter(x=wl_grid.tolist(), y=F_am0.tolist()),
                # trace 3: cut-on line
                go.Scatter(x=[cut, cut], y=yline),
                # trace 4: Si EQE
                go.Scatter(x=wl_grid.tolist(), y=eqe.tolist()),
                # trace 5: rel charge per absorbed power
                go.Scatter(x=wl_grid.tolist(), y=resp_norm.tolist()),
            ],
            layout=go.Layout(
                annotations=[
                    go.layout.Annotation(
                        x=0.02, y=0.98, xref="paper", yref="paper",
                        xanchor="left", yanchor="top",
                        text=annotation_text,
                        showarrow=False,
                        bordercolor="black",
                        borderwidth=1,
                        bgcolor="rgba(255,255,255,0.8)",
                        font=dict(size=11),
                    )
                ]
            ),
        )
    )

# --- Base figure with first cut value ---
initial_cut = 800
initial_cut_idx = cut_values.index(initial_cut)
eta_tot0, eta_acc0, P_in0, P_out0 = efficiency_longpass(initial_cut)
T_eq0 = equilibrium_temperature(initial_cut, WL_MAX)
yline0 = [0, max_y]

# Initial rejection mask
rejection_mask_x0 = [WL_MIN, initial_cut, initial_cut, WL_MIN]
rejection_mask_y0 = [0, 0, max_y, max_y]

annotation0 = (
    f"cut-on λc = {initial_cut:.0f} nm<br>"
    f"Optical after filter: {P_in0:6.1f} W/m²<br>"
    f"Electrical output: {P_out0:6.1f} W/m²<br>"
    f"η_total (vs band): {eta_tot0*100:5.2f}%<br>"
    f"η_accepted: {eta_acc0*100:5.2f}%<br>"
    f"T_equilibrium: {T_eq0 - 273.15:.1f} °C"
)

fig = go.Figure(
    data=[
        # trace 0: White mask above AM0 curve (reveals gradient under curve)
        go.Scatter(
            x=curve_mask_x, y=curve_mask_y,
            fill="toself",
            fillcolor="white",
            line=dict(width=0),
            showlegend=False,
            hoverinfo="skip"
        ),
        # trace 1: Rejection mask (white for λ < cut_on)
        go.Scatter(
            x=rejection_mask_x0, y=rejection_mask_y0,
            fill="toself",
            fillcolor="rgba(255,255,255,0.92)",
            line=dict(width=0),
            showlegend=False,
            hoverinfo="skip"
        ),
        # trace 2: AM0 irradiance line
        go.Scatter(
            x=wl_grid, y=F_am0,
            name="AM0 irradiance (W/m²/nm)",
            line=dict(width=2, color="black")
        ),
        # trace 3: Cut-on line
        go.Scatter(
            x=[initial_cut, initial_cut], y=yline0,
            name="Cut-on",
            line=dict(width=2, dash="dash", color="gray")
        ),
        # trace 4: Si EQE
        go.Scatter(
            x=wl_grid, y=eqe,
            name="Si EQE (arb.)",
            yaxis="y2",
            line=dict(width=2)
        ),
        # trace 5: Relative charge per absorbed power
        go.Scatter(
            x=wl_grid, y=resp_norm,
            name="Rel. charge per absorbed power",
            yaxis="y2",
            line=dict(width=2)
        ),
    ],
    layout=go.Layout(
        title=None,
        margin=dict(t=10, b=50, l=60, r=80),
        legend=dict(
            x=0.99,
            y=0.99,
            xanchor="right",
            yanchor="top",
            bgcolor="rgba(255,255,255,0.9)",
            bordercolor="#ccc",
            borderwidth=1,
            font=dict(size=10),
        ),
        xaxis=dict(
            title="Wavelength (nm)",
            range=[WL_MIN, WL_DISPLAY_MAX]
        ),
        yaxis=dict(
            title="AM0 Irradiance (W/m²/nm)",
            rangemode="tozero",
            range=[0, max_y]
        ),
        yaxis2=dict(
            title="Normalized response (arb.)",
            overlaying="y",
            side="right",
            rangemode="tozero",
            range=[0, 1.1],
        ),
        # Spectrum gradient image as background
        images=[
            dict(
                source=spectrum_uri,
                xref="x",
                yref="y",
                x=WL_MIN,
                y=max_y,
                sizex=WL_DISPLAY_MAX - WL_MIN,
                sizey=max_y,
                sizing="stretch",
                layer="below",
                opacity=0.85
            )
        ],
        annotations=[
            go.layout.Annotation(
                x=0.02, y=0.98, xref="paper", yref="paper",
                xanchor="left", yanchor="top",
                text=annotation0,
                showarrow=False,
                bordercolor="black",
                borderwidth=1,
                bgcolor="rgba(255,255,255,0.8)",
                font=dict(size=11),
            )
        ],
        sliders=[
            dict(
                active=initial_cut_idx,
                currentvalue=dict(prefix="Cut-on λc (nm): "),
                pad=dict(t=50),
                steps=[
                    dict(
                        label=str(c),
                        method="animate",
                        args=[
                            [str(c)],
                            dict(mode="immediate", frame=dict(duration=0, redraw=True),
                                 transition=dict(duration=0))
                        ],
                    )
                    for c in cut_values
                ],
            )
        ],
    ),
    frames=frames
)

# --- Export to static HTML ---
import os
output_path = os.path.join(os.path.dirname(__file__), "..", "public", "solar-filter-calculator.html")
fig.write_html(
    output_path,
    include_plotlyjs="cdn",
    full_html=True,
    config={"displayModeBar": True, "responsive": True},
    auto_play=False
)
print(f"Saved to {output_path}")

fig.show()
