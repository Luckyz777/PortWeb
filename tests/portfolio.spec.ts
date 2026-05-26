import { expect, test } from "@playwright/test";

test.describe("portfolio", () => {
  test("renders hero and key sections on desktop", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/");

    await expect(page.locator(".hero-name")).toContainText("Manufacturing");
    await expect(page.getByRole("link", { name: "View My Work" })).toBeVisible();
    await expect(page.getByText("Production-Tested Software.")).toBeVisible();
    await expect(page.getByText("Where the Tools Were Built.")).toBeVisible();
    await expect(page.getByText("Built From Shop-Floor Constraints.")).toBeVisible();
    await expect(page.locator("#profile")).toBeAttached();
    await expect(page.locator("#skills")).toBeAttached();
    await expect(page.locator("#contact")).toBeAttached();
  });

  test("experience section lists internship", async ({ page }) => {
    await page.goto("/");
    const exp = page.locator("#experience");
    await expect(exp).toBeVisible();
    await expect(exp.getByText("Global-Thaixon Precision Industry")).toBeVisible();
    await expect(exp.getByText("Process Engineering Intern")).toBeVisible();
  });

  test("language toggle switches to Thai and back", async ({ page }) => {
    await page.goto("/");
    const toggle = page.locator(".lang-toggle").first();
    await expect(toggle).toBeVisible();

    await expect(page.locator(".hero-name")).toContainText("Building");

    await toggle.click();
    await expect(page.locator("html")).toHaveAttribute("data-lang", "th");
    await expect(page.locator(".hero-name")).toContainText("\u0e2a\u0e23\u0e49\u0e32\u0e07");

    await toggle.click();
    await expect(page.locator("html")).toHaveAttribute("data-lang", "en");
    await expect(page.locator(".hero-name")).toContainText("Building");
  });

  test("project console tabs switch content", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("tab", { name: /NC Compare/i })).toBeVisible();
    await page.getByRole("tab", { name: /GT-PATH/i }).click();
    await expect(page.getByRole("tabpanel")).toContainText("Offline NC and G-code path viewer");
  });

  test("mobile nav hamburger opens with experience link", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    const menuBtn = page.locator(".mobile-menu-btn");
    await expect(menuBtn).toBeVisible();
    await menuBtn.click();

    const drawer = page.locator(".mobile-drawer");
    await expect(drawer).toBeVisible();
    await expect(drawer.getByText("Experience")).toBeVisible();
    await expect(drawer.getByText("Method")).toBeVisible();
  });

  test("all nav anchor links resolve to sections", async ({ page }) => {
    await page.goto("/");
    const anchors = ["#projects", "#prototype", "#experience", "#methodology", "#profile", "#skills", "#contact"];
    for (const anchor of anchors) {
      await expect(page.locator(anchor)).toBeAttached();
    }
  });

  test("JSON-LD includes LinkedIn and worksFor", async ({ page }) => {
    await page.goto("/");
    const jsonLd = page.locator('script[type="application/ld+json"]');
    await expect(jsonLd).toBeAttached();
    const content = await jsonLd.textContent();
    expect(content).toContain("Anirut Butnongwa");
    expect(content).toContain("linkedin.com");
    expect(content).toContain("Global-Thaixon");
  });

  test("resume route renders a printable resume", async ({ page }) => {
    await page.goto("/resume");
    await expect(page.getByRole("heading", { name: "Anirut Butnongwa" })).toBeVisible();
    await expect(page.getByRole("button", { name: /Print/i })).toBeVisible();
    await expect(page.getByText("Process Engineering Intern")).toBeVisible();
    await expect(page.locator(".resume__entry-head strong").filter({ hasText: "NC Compare" })).toBeVisible();
  });

  test("project detail route renders NC Compare case study", async ({ page }) => {
    await page.goto("/projects/nc-compare");
    await expect(page.getByRole("heading", { name: "NC Compare" })).toBeVisible();
    await expect(page.getByLabel("NC Compare case study")).toBeVisible();
    await expect(page.getByRole("link", { name: "View source code on GitHub" })).toHaveAttribute(
      "href",
      "https://github.com/Luckyz777/NC-Compare"
    );
  });

  test("404 page renders for unknown route", async ({ page }) => {
    const response = await page.goto("/this-route-does-not-exist");
    expect(response?.status()).toBe(404);
    await expect(page.getByRole("heading", { name: "Page not found" })).toBeVisible();
    await expect(page.getByRole("link", { name: /Back to Portfolio/i })).toBeVisible();
  });

  test("serves project imagery without errors", async ({ page }) => {
    const assets = [
      "/GT-ACT.png",
      "/GT-PATH.png",
      "/GT-FIXSYS.png",
      "/NC-Compare.svg",
      "/Hero.png",
      "/screenshots/gt-act/Cycle time.png",
      "/screenshots/gt-path/iso.png",
      "/screenshots/gt-fixsys/Monitoring.png",
      "/screenshots/nc-compare/compare.png",
    ];
    for (const asset of assets) {
      const response = await page.request.get(asset);
      expect(response.ok(), asset).toBe(true);
      expect(response.headers()["content-type"], asset).toContain("image/");
    }
  });

  test("serves downloadable resume and presentation assets", async ({ page }) => {
    const assets = ["/anirut-resume.pdf", "/Internship_Presentation.pdf"];
    for (const asset of assets) {
      const response = await page.request.get(asset);
      expect(response.ok(), asset).toBe(true);
      expect(response.headers()["content-type"], asset).toContain("application/pdf");
    }
  });
});
