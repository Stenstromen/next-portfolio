import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, fireEvent, act } from "@testing-library/react";
import Navbar from "../components/Navbar";

const mockPathname = vi.fn();
vi.mock("next/navigation", () => ({
  usePathname: () => mockPathname(),
}));

Element.prototype.scrollIntoView = vi.fn();

describe("Navbar", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockPathname.mockReturnValue("/");
    global.window.scrollY = 0;
    document.getElementById = vi.fn(() => ({
      scrollIntoView: vi.fn(),
    })) as unknown as (elementId: string) => HTMLElement | null;
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders basic navigation elements", () => {
    const { container } = render(<Navbar />);

    const nav = container.querySelector("nav");
    expect(nav).toBeTruthy();
    const bar = nav?.firstElementChild;
    expect(bar?.className).toContain("bg-[#2d3142]");
    expect(bar?.className).toContain("rounded-b-2xl");
    expect(bar?.className).toContain("sm:rounded-b-3xl");

    const homeButton = container.querySelector("button");
    expect(homeButton?.textContent).toBe("Home");
  });

  it("shows all navigation buttons on home page", () => {
    mockPathname.mockReturnValue("/");
    const { container } = render(<Navbar />);

    const buttons = container.querySelectorAll("button");
    expect(buttons.length).toBe(4);

    expect(buttons[0].textContent).toBe("Home");
    expect(buttons[1].getAttribute("aria-label")).toBe("Certifications");
    expect(buttons[2].textContent).toBe("Projects");
    expect(buttons[3].textContent).toBe("Contact");
  });

  it("shows only home button on non-home pages", () => {
    mockPathname.mockReturnValue("/some-other-page");
    const { container } = render(<Navbar />);

    const buttons = container.querySelectorAll("button");
    expect(buttons.length).toBe(1);
    expect(buttons[0].textContent).toBe("Home");
  });

  it("stays visible when scrolling", async () => {
    const { container } = render(<Navbar />);
    const nav = container.querySelector("nav");

    await act(async () => {
      global.window.scrollY = 200;
      fireEvent.scroll(window);
      await new Promise((resolve) => setTimeout(resolve, 50));
    });

    expect(nav?.firstElementChild?.className).toContain("bg-[#2d3142]");
  });

  it("handles section navigation on home page", () => {
    mockPathname.mockReturnValue("/");
    const { container } = render(<Navbar />);

    const buttons = container.querySelectorAll("button");

    buttons.forEach((button) => {
      fireEvent.click(button);
      expect(document.getElementById).toHaveBeenCalled();
    });
  });

  it("handles section navigation on non-home pages", () => {
    mockPathname.mockReturnValue("/some-other-page");

    const originalLocation = { ...window.location };
    Object.defineProperty(window, "location", {
      value: { ...originalLocation, href: "" },
      writable: true,
    });

    const { container } = render(<Navbar />);

    const homeButton = container.querySelector("button");
    fireEvent.click(homeButton!);

    expect(window.location.href).toBe("/");

    Object.defineProperty(window, "location", {
      value: originalLocation,
      writable: true,
    });
  });

  it("applies correct styling to buttons", () => {
    const { container } = render(<Navbar />);

    const buttons = container.querySelectorAll("button");
    buttons.forEach((button) => {
      expect(button.className).toContain("text-[#d8e2dc]");
      expect(button.className).toContain("hover:text-white");
      expect(button.className).toContain("transition-colors");
      expect(button.className).toMatch(/text-sm/);
      expect(button.className).toMatch(/md:text-2xl/);
    });
  });
});
