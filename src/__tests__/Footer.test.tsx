import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Footer from "../components/Footer";

describe("Footer", () => {
  it("renders all footer links with correct attributes", () => {
    const { container } = render(<Footer />);

    // Test LinkedIn link
    const linkedinLink = container.querySelector(
      'a[href="https://www.linkedin.com/in/filip-stenstr%C3%B6m/"]'
    );
    expect(linkedinLink).toBeTruthy();
    expect(linkedinLink).toHaveAttribute("target", "_blank");
    expect(linkedinLink).toHaveAttribute("rel", "noreferrer");
    expect(linkedinLink).toHaveAttribute("aria-label", "LinkedIn Profile");
    expect(linkedinLink?.textContent).toContain("Add Me On LinkedIn!");

    // Test Mastodon link
    const mastodonLink = container.querySelector(
      'a[href="https://k8s.social/@stenstromen"]'
    );
    expect(mastodonLink).toBeTruthy();
    expect(mastodonLink).toHaveAttribute("target", "_blank");
    expect(mastodonLink).toHaveAttribute("rel", "noreferrer");
    expect(mastodonLink).toHaveAttribute("aria-label", "Mastodon Profile");
    expect(mastodonLink?.textContent).toContain("Follow me on Mastodon!");

    // Test GitHub link
    const githubLink = container.querySelector(
      'a[href="https://github.com/Stenstromen"]'
    );
    expect(githubLink).toBeTruthy();
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("rel", "noreferrer");
    expect(githubLink).toHaveAttribute("aria-label", "GitHub Profile");
    expect(githubLink?.textContent).toContain("Follow Me On GitHub!");

    // Test Email link
    const emailLink = container.querySelector(
      'a[href^="mailto:info@stenstromen.se"]'
    );
    expect(emailLink).toBeTruthy();
    expect(emailLink).toHaveAttribute("target", "_blank");
    expect(emailLink).toHaveAttribute("rel", "noreferrer");
    expect(emailLink).toHaveAttribute("aria-label", "Send Email");
    expect(emailLink?.textContent).toContain("Send Me An Email!");

    // Test PGP Key link (internal)
    const pgpLink = container.querySelector('a[href="/pgp"]');
    expect(pgpLink).toBeTruthy();
    expect(pgpLink).not.toHaveAttribute("target"); // Internal link shouldn't have target="_blank"
    expect(pgpLink).toHaveAttribute("aria-label", "PGP Public Key");
    expect(pgpLink?.textContent).toContain("Fetch My Public PGP Key!");

    // Test Status Page link
    const statusLink = container.querySelector(
      'a[href="https://stenstromen.statuspage.io/"]'
    );
    expect(statusLink).toBeTruthy();
    expect(statusLink).toHaveAttribute("target", "_blank");
    expect(statusLink).toHaveAttribute("rel", "noreferrer");
    expect(statusLink).toHaveAttribute("aria-label", "Status Page");
    expect(statusLink?.textContent).toContain("Atlassian Statuspage Uptime");
  });

  it("renders with correct layout classes", () => {
    const { container } = render(<Footer />);

    // Test footer container
    const footer = container.querySelector("footer");
    expect(footer).toBeTruthy();
    expect(footer?.className).toContain("bg-[#2d3545]");
    expect(footer?.id).toBe("contact");

    // Test grid layout
    const grid = container.querySelector(".grid");
    expect(grid).toBeTruthy();
    expect(grid?.className).toContain("grid-cols-1");
    expect(grid?.className).toContain("md:grid-cols-3");
  });

  it("renders all icons", () => {
    const { container } = render(<Footer />);

    // Count all icon elements
    const icons = container.querySelectorAll(".w-6.h-6");
    expect(icons.length).toBe(6); // Should have 6 icons
  });

  it("applies hover styles to links", () => {
    const { container } = render(<Footer />);

    const links = container.querySelectorAll("a");
    links.forEach((link) => {
      expect(link.className).toContain("hover:bg-[#f686bd]/10");
      expect(link.className).toContain("transition-colors");
    });
  });

  it("renders links with correct text color", () => {
    const { container } = render(<Footer />);

    const links = container.querySelectorAll("a");
    links.forEach((link) => {
      expect(link.className).toContain("text-[#f686bd]");
    });
  });

  it("renders all links with correct spacing and alignment", () => {
    const { container } = render(<Footer />);

    const linkContainers = container.querySelectorAll(
      ".flex.items-center.gap-2"
    );
    expect(linkContainers.length).toBe(6);

    linkContainers.forEach((container) => {
      expect(container.className).toContain("px-4");
      expect(container.className).toContain("py-2");
      expect(container.className).toContain("rounded-md");
    });
  });
});
