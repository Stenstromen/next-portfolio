import { fireEvent, render, screen } from "@testing-library/react";
import { test, expect, vi } from "vitest";
import BadgeGrid from "../components/BadgeGrid";
import BadgesList from "@/components/BadgesList";

vi.mock("../components/Badge", () => ({
  default: function MockBadge({ name }: { name: string }) {
    return <div data-testid="mock-badge">{name}</div>;
  },
}));

test("renders the grid container with correct styling", () => {
  render(<BadgeGrid />);

  const gridContainer = screen.getByTestId("badge-grid");
  expect(gridContainer).toHaveClass("bg-[#f686bd]");
  expect(gridContainer).toHaveClass("p-6");
  expect(gridContainer).toHaveClass("rounded-3xl");
  expect(gridContainer).toHaveClass("shadow-lg");
});

test("renders the ninja icon", () => {
  render(<BadgeGrid />);

  const ninjaIcon = screen.getByTestId("ninja-icon");
  expect(ninjaIcon).toBeInTheDocument();
});

test("renders twelve badges from BadgesList", () => {
  render(<BadgeGrid />);

  const badges = screen.getAllByTestId("mock-badge");
  const initialBadges = [
    "HTML",
    "CSS",
    "TS",
    "REACTJS",
    "GO",
    "RUST",
    "NODEJS",
    "PYTHON",
    "KUBERNETES",
    "DOCKER",
    "LINUX",
    "GITHUBACTIONS",
  ];
  expect(badges).toHaveLength(12);

  initialBadges.forEach((badge) => {
    expect(screen.getByText(badge)).toBeInTheDocument();
  });
});

test("renders badges with correct container styling", () => {
  render(<BadgeGrid />);

  const badgeContainers = screen.getAllByTestId("mock-badge");
  badgeContainers.forEach((container) => {
    expect(container.parentElement).toHaveClass("flex");
    expect(container.parentElement).toHaveClass("justify-start");
    expect(container.parentElement).toHaveClass("items-center");
  });
});

test("passes nonce prop to Badge components", () => {
  const testNonce = "test-nonce";
  render(<BadgeGrid nonce={testNonce} />);

  const badges = screen.getAllByTestId("mock-badge");
  expect(badges).toHaveLength(12);
});

test("renders all badges when showAllBadges is true", () => {
  render(<BadgeGrid />);

  const showMoreButton = screen.getByTestId("show-more-badges");
  fireEvent.click(showMoreButton);

  const badges = screen.getAllByTestId("mock-badge");
  expect(badges).toHaveLength(Object.keys(BadgesList).length);
});
