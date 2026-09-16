/* eslint-disable @next/next/no-img-element */
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, fireEvent, act } from "@testing-library/react";
import Achievements from "../components/Achievements";
import { StaticImageData } from "next/image";

vi.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt }: { src: StaticImageData; alt: string }) => (
    <img src={src.src} alt={alt} />
  ),
}));

class MockIntersectionObserver {
  callback: IntersectionObserverCallback;

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback;
  }

  observe(target: Element) {
    this.callback(
      [
        {
          isIntersecting: true,
          target,
        } as IntersectionObserverEntry,
      ],
      this as unknown as IntersectionObserver,
    );
  }

  unobserve() {}
  disconnect() {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }

  root = null;
  rootMargin = "";
  thresholds = [];
}

describe("Achievements", () => {
  const mockBadges = [
    {
      id: "1",
      name: "Test Badge 1",
      imageUrl: { src: "/test1.png" } as StaticImageData,
      issuer: "Test Issuer 1",
      earnedDate: "2024-01-01",
      url: "https://test1.com",
    },
    {
      id: "2",
      name: "Test Badge 2",
      imageUrl: { src: "/test2.png" } as StaticImageData,
      issuer: "Test Issuer 2",
      earnedDate: "2024-01-02",
      url: "https://test2.com",
    },
  ];

  beforeEach(() => {
    vi.clearAllMocks();
    vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);
  });

  afterEach(() => {
    vi.clearAllMocks();
    vi.unstubAllGlobals();
  });

  it("renders with default badges when none provided", () => {
    const { container } = render(<Achievements />);
    const badges = container.querySelectorAll("a");
    expect(badges.length).toBeGreaterThan(0);
  });

  it("renders provided badges", () => {
    const { container } = render(<Achievements badges={mockBadges} />);
    const badges = container.querySelectorAll("a");
    expect(badges.length).toBe(mockBadges.length * 2); // *2 because of infinite scroll
  });

  it("pauses scrolling on mouse enter", async () => {
    const { container } = render(<Achievements />);
    const scrollContainer = container.querySelector(".achievements-marquee");

    await act(async () => {
      fireEvent.mouseEnter(scrollContainer!);
    });

    const track = container.querySelector(".achievements-marquee-track");
    expect(track?.className).toContain("is-paused");
  });

  it("resumes scrolling on mouse leave", async () => {
    const { container } = render(<Achievements />);
    const scrollContainer = container.querySelector(".achievements-marquee");
    const track = container.querySelector(".achievements-marquee-track");

    await act(async () => {
      fireEvent.mouseEnter(scrollContainer!);
    });
    expect(track?.className).toContain("is-paused");

    await act(async () => {
      fireEvent.mouseLeave(scrollContainer!);
    });
    expect(track?.className).not.toContain("is-paused");
  });

  it("handles touch events correctly", async () => {
    const { container } = render(<Achievements />);
    const track = container.querySelector(
      ".achievements-marquee-track",
    ) as HTMLElement;

    await act(async () => {
      fireEvent.touchStart(track);
    });
    expect(track.className).toContain("is-paused");

    await act(async () => {
      fireEvent.touchEnd(track);
    });
    expect(track.className).not.toContain("is-paused");
  });

  it("applies correct styling to badge containers", () => {
    const { container } = render(<Achievements />);
    const badgeContainers = container.querySelectorAll("a");

    badgeContainers.forEach((container) => {
      expect(container.className).toContain("bg-surface");
      expect(container.className).toContain("rounded-xl");
      expect(container.className).toContain("hover:border-accent/40");
    });
  });

  it("renders badge images with correct attributes", () => {
    const { container } = render(<Achievements badges={mockBadges} />);
    const images = container.querySelectorAll("img");

    images.forEach((img, index) => {
      const badgeIndex = index % mockBadges.length;
      expect(img.alt).toBe(mockBadges[badgeIndex].name);
      expect(img.src).toContain(mockBadges[badgeIndex].imageUrl.src);
    });
  });

  it("creates infinite scroll effect", () => {
    const { container } = render(<Achievements badges={mockBadges} />);
    const badges = container.querySelectorAll("a");
    expect(badges.length).toBe(mockBadges.length * 2);

    Array.from(badges).forEach((badge, index) => {
      const expectedIndex = index % mockBadges.length;
      const img = badge.querySelector("img");
      expect(img?.alt).toBe(mockBadges[expectedIndex].name);
    });
  });
});
