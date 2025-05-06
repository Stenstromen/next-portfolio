import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import FirstPage from "../components/FirstPage";

vi.mock("next/dynamic", () => ({
  default: () => {
    const DynamicComponent = ({ nonce }: { nonce?: string }) => (
      <div data-testid="badge-grid" data-nonce={nonce}>
        Mock Badge Grid
      </div>
    );
    DynamicComponent.displayName = "BadgeGrid";
    return DynamicComponent;
  },
}));

vi.mock("../components/ScrollToTop", () => ({
  default: () => <div data-testid="scroll-to-top">Mock ScrollToTop</div>,
}));

describe("FirstPage", () => {
  beforeEach(() => {
    cleanup();
  });

  it("renders the main heading and subheadings", () => {
    const { container } = render(<FirstPage />);

    const heading = container.querySelector("h1");
    const subheading = container.querySelector("h2");
    const location = container.querySelector("h5");
    const tagline = container.querySelector("h4");

    expect(heading).toHaveTextContent("Hello!");
    expect(subheading).toHaveTextContent(/I'm Filip/);
    expect(subheading).toHaveTextContent(
      /DevOps by day, Programmer by passion/
    );
    expect(location).toHaveTextContent(/Based in Stockholm, Sweden/);
    expect(tagline).toHaveTextContent(/I move fast and break things/);
  });

  it("renders with correct background colors and layout", () => {
    const { container } = render(<FirstPage />);

    const mainContainer = container.querySelector("#home");
    const contentCard = container.querySelector(".bg-\\[\\#2d3142\\]");

    expect(mainContainer?.className).toContain("bg-[#4f5d75]");
    expect(contentCard).toBeTruthy();
  });

  it("passes nonce prop to BadgeGrid", () => {
    const testNonce = "test-nonce-123";
    const { container } = render(<FirstPage nonce={testNonce} />);

    const badgeGrid = container.querySelector('[data-testid="badge-grid"]');
    expect(badgeGrid).toHaveAttribute("data-nonce", testNonce);
  });

  it("includes ScrollToTop component", () => {
    const { container } = render(<FirstPage />);
    const scrollToTop = container.querySelector(
      '[data-testid="scroll-to-top"]'
    );
    expect(scrollToTop).toBeTruthy();
  });

  it("has proper responsive layout classes", () => {
    const { container } = render(<FirstPage />);

    const badgeGridContainer = container.querySelector(
      ".lg\\:absolute.lg\\:bottom-10.lg\\:right-2"
    );
    expect(badgeGridContainer).toBeTruthy();
  });

  it("applies hover animation class to main content card", () => {
    const { container } = render(<FirstPage />);

    const contentCard = container.querySelector(".hover\\:scale-\\[1\\.01\\]");
    expect(contentCard).toBeTruthy();
  });
});
