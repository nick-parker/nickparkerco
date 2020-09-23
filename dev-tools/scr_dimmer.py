import matplotlib.pyplot as plt
import numpy as np

if __name__ == "__main__":
    x = np.linspace(0, 1000 * 4/60, num=600)
    phase_in = 120 * np.sin(x * 60 * (2*np.pi) / 1000)
    duty_cycle = 0.7
    scr_on = (x % (1000/120)) / (1000/120) > (1 - duty_cycle)
    scr_gate = np.logical_and((1.05 - duty_cycle) > (x % (1000/120)) / (1000/120),
                              (x % (1000/120)) / (1000/120) > (1 - duty_cycle))
    chopped = np.abs(phase_in * scr_on)
    plt.plot(x, phase_in, color='r')
    plt.plot(x, 11*scr_gate, color='b')
    plt.plot(x, chopped, color='black')
    plt.xticks(np.linspace(0, 1000*4/60, num=9))
    plt.yticks([-120, -60, 0, 60, 120])
    plt.ylabel("Voltage")
    plt.xlabel("Time (ms)")
    plt.title("SCR chopped Rotor power")
    plt.legend(["120V AC Input", "SCR Gate voltage", "Rectified DC output"])
    plt.savefig("public/images/scr_dimmer.svg")
    plt.show()