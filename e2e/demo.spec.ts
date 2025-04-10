import { expect, test } from "@playwright/test";

test("has input set correctly", async ({ page }) => {
  await page.goto("/demo/index.html");

  await expect(
    page
      .locator("cambria-document")
      .first()
      .getByRole("textbox", { name: "root[name]" }),
  ).toHaveValue(/The Fifth Element/);
});
