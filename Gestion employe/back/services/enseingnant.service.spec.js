import { describe, it, vi, expect, beforeEach } from "vitest";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { sequelize } = require("../models/index");
const { getStatisticsService } = require("./enseignant.service");

describe("getStatisticsService", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("should return max, min and total", async () => {
    const rows = [{ salairemax: 1000, salairemin: 20, salairetotal: 20000 }];
    vi.spyOn(sequelize, "query").mockResolvedValue([rows, {}]);

    const result = await getStatisticsService();

    expect(sequelize.query).toHaveBeenCalledTimes(1);
    expect(result).toEqual({ max: 1000, min: 20, total: 20000 });
  });
});