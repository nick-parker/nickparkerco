import numpy as np
import matplotlib.pyplot as plt

# PV solar LCOE $/kwh, weighted average  2010-2023
# Data from https://www.irena.org/Publications/2024/Sep/Renewable-Power-Generation-Costs-in-2023

irena_pv_5 = np.array([0.230, 0.192, 0.154, 0.133, 0.109, 0.086, 0.080, 0.058, 0.053, 0.050, 0.041, 0.032, 0.031, 0.031])
irena_pv_auction = np.array([0.460, 0.343, 0.256, 0.197, 0.177, 0.132, 0.116, 0.091, 0.077, 0.067, 0.060, 0.052, 0.050, 0.044])
irena_pv_95 = np.array([0.576, 0.572, 0.458, 0.414, 0.392, 0.316, 0.261, 0.231, 0.220, 0.181, 0.176, 0.130, 0.122, 0.110])

# New coal numbers from https://www.lazard.com/media/2ozoovyg/lazards-lcoeplus-april-2023.pdf
coal = np.full((len(irena_pv_auction),), 0.117)
coal_opex = np.full((len(irena_pv_auction),), 0.052)

if __name__ == "__main__":
    years = range(2010, 2024)
    plt.plot(years, 1/irena_pv_auction)
    plt.plot(years, 1/irena_pv_5)
    plt.plot(years, 1/irena_pv_95)
    plt.plot(years, 1 / coal)
    plt.plot(years, 1 / coal_opex)
    plt.scatter([2020,], [1/0.0135,])
    plt.legend(["Solar weighted average kWh/$",
                "Solar 95th percentile kWh/$",
                "Solar 5th percentile kWh/$",
                "Coal (2023)",
                "Coal operating costs (2023)",
                "Al Dafra solar farm (2020)"],
               loc="upper left", framealpha=1)
    plt.xlabel("Year")
    plt.ylabel("kWh of energy")
    plt.title("How much solar energy does $1 buy?")
    plt.show()