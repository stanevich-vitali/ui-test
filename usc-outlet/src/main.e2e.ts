import { newE2EPage } from "@stencil/core/testing";

describe("Universal Shopping Cart Widget", () => {
    it("should be able to be hidden/shown", async () => {
        const page = await newE2EPage();
        const scuValue = "1111";
        await page.setContent(`
      <button data-scu="${scuValue}"></button>
      <usc-outlet></usc-outlet>
    `);

        const outletEl = await page.find("usc-outlet");
        const btnEl = await page.find("button[data-scu]");
        expect(outletEl).not.toBeNull();
        expect(btnEl).not.toBeNull();
        expect(outletEl.classList.contains("is-hidden")).toBeTruthy();
        btnEl.click();
        await page.waitForChanges();
        expect(outletEl.classList.contains("is-hidden")).toBeFalsy();
        expect(outletEl.shadowRoot.innerHTML.includes("usc-root")).toBeTruthy();
    });
});
