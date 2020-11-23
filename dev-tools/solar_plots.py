import numpy as np
import matplotlib.pyplot as plt

# PV solar LCOE $/kwh, weighted average  2010-2020
# Data from https://www.irena.org/publications/2019/May/Renewable-power-generation-costs-in-2018
irena_pv_auction = np.array([
              0.166,
              0.182,
              0.169,
              0.226,
              0.180,
              0.125,
              0.105,
              0.091,
              0.070,
              0.051,
              0.047])

irena_pv_5 = np.array([0.145, 0.162, 0.141, 0.130, 0.075, 0.082, 0.077, 0.065, 0.049, 0.038, 0.036])
irena_pv_95 = np.array([0.173, 0.280, 0.262, 0.427, 0.286, 0.177, 0.182, 0.115, 0.107, 0.113, 0.094]) 
# Coal numbers from Wikipedia and https://carbontracker.org/reports/understanding-operating-cost-coal-fired-power-us-example/ resp.
coal = np.full((11,), 0.110)
coal_opex = np.full((11,), 0.032)

if __name__ == "__main__":
    years = range(2010, 2021)
    plt.plot(years, 1/irena_pv_auction)
    plt.plot(years, 1/irena_pv_5)
    plt.plot(years, 1/irena_pv_95)
    plt.plot(years, 1 / coal)
    plt.plot(years, 1 / coal_opex)
    plt.scatter([2020,], [1/0.0135,])
    plt.legend(["Solar weighted average kWh/$",
                "Solar 95th kWh/$",
                "Solar 5th percentile kWh/$",
                "Coal (2020)",
                "Coal operating costs (2020)",
                "Al Dafra solar farm (2020)"],
               loc="upper left", framealpha=1)
    plt.xlabel("Year")
    plt.ylabel("kWh of energy")
    plt.title("How much solar energy does $1 buy?")
    plt.show()