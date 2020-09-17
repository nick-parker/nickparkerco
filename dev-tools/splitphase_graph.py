import matplotlib.pyplot as plt
import numpy as np

if __name__ == "__main__":
    x = np.linspace(0, 1000 * 2/60, num=200)
    phase1 = 120 * np.sin(x * 60 * (2*np.pi) / 1000)
    phase2 = -phase1
    diff = phase1 - phase2
    plt.plot(x, phase1, color='r')
    plt.plot(x, phase2, color='b')
    plt.plot(x, diff, color='black')
    plt.yticks([-240, -120, 0, 120, 240])
    plt.ylabel("Voltage")
    plt.xlabel("Time (ms)")
    plt.title("Residential split phase power")
    plt.legend(["Phase 1 to neutral", "Phase 2 to neutral", "Phase 1 to phase 2"])
    plt.show()