import { describe, it, expect } from "vitest";
import { formatIsoDateForDisplay } from "@/lib/formatIsoDate";

describe("formatIsoDateForDisplay", () => {
  it("formats YYYY-MM-DD deterministically", () => {
    expect(formatIsoDateForDisplay("2025-01-27")).toBe("27 Jan 2025");
    expect(formatIsoDateForDisplay("2020-12-02")).toBe("2 Dec 2020");
  });

  it("returns original string when not ISO date-only", () => {
    expect(formatIsoDateForDisplay("nope")).toBe("nope");
    expect(formatIsoDateForDisplay("2025-13-40")).toBe("2025-13-40");
  });
});
