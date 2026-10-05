import { describe, it, vi, expect, beforeEach } from "vitest";
import { sequelize } from "../models/index";
import { getStatisticsService } from "./enseignant.service";

vi.mock("../models/index", () => ({
  sequelize: { query: vi.fn() },
}));

describe("getStatistics", () => {

  it("should return max, min and total", async () => {
    const rows = [{ salairemax: 1000, salairemin: 20, salairetotal: 20000 }];
    sequelize.query.mockResolvedValue([rows, {}]);

    const result = await getStatisticsService();

    expect(sequelize.query).toHaveBeenCalled();
    expect(result).toEqual({ max: 1000, min: 20, total: 20000 });
  });
});