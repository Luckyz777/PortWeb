import { expect, test } from "@playwright/test";

test.describe("portfolio", () => {
  test("renders hero and key sections on desktop", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/");

    await expect(page.locator(".hero-name")).toContainText("Factory");
    await expect(page.getByRole("link", { name: "View My Work" })).toBeVisible();
    await expect(page.getByText("Three Tools.")).toBeVisible();
    await expect(page.getByText("Engineer First.")).toBeVisible();
    await expect(page.getByText("Two Disciplines.")).toBeVisible();
    await expect(page.getByText("Available From", { exact: true })).toBeVisible();
  });

  test("project console tabs switch content", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("tab", { name: /GT-PATH/i }).click();
    await expect(page.getByRole("tabpanel")).toContainText("Offline NC and G-code path viewer");

    await page.getByRole("tab", { name: /GT-FIXSYS/i }).click();
    await expect(page.getByRole("tabpanel")).toContainText("Fixture requisition");
  });

  test("mobile nav hamburger opens and links work", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    const menuBtn = page.locator(".mobile-menu-btn");
    await expect(menuBtn).toBeVisible();
    await menuBtn.click();

    const drawer = page.locator(".mobile-drawer");
    await expect(drawer).toBeVisible();
    await expect(drawer.getByText("Projects")).toBeVisible();

    await drawer.getByText("Projects").click();
    await expect(drawer).not.toBeVisible();
  });

  test("all nav anchor links resolve to sections", async ({ page }) => {
    await page.goto("/");

    const anchors = ["#projects", "#prototype", "#profile", "#skills", "#contact"];
    for (const anchor of anchors) {
      const section = page.locator(anchor);
      await expect(section).toBeAttached();
    }
  });

  test("JSON-LD structured data is present", async ({ page }) => {
    await page.goto("/");

    const jsonLd = page.locator('script[type="application/ld+json"]');
    await expect(jsonLd).toBeAttached();
    const content = await jsonLd.textContent();
    expect(content).toContain("Anirut Butnongwa");
    expect(content).toContain("schema.org");
  });

  test("serves project imagery without errors", async ({ page }) => {
    const assets = [
      "/GT-ACT.png",
      "/GT-PATH.png",
      "/gt-fixsys-dashboard.png",
      "/gt-apps-montage.png",
    ];

    for (const asset of assets) {
      const response = await page.request.get(asset);
      expect(response.ok(), asset).toBe(true);
      expect(response.headers()["content-type"], asset).toContain("image/");
    }
  });
});
