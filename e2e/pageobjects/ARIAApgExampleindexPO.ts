import { expect, type Page, type Locator } from '@playwright/test';
const { BasicPO } = require('../common/BasicPO');

export class ARIAApgExampleindexPO extends BasicPO {
    public readonly indexTab: Locator;
    public readonly page: Page;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.indexTab = this.page.locator("xpath=//nav[@aria-label=\"APG\"]/ul[1]/li[4]/a[1]");
    }

    /**
     * Click the Index tab.
     * @example
     * await pageObject.clickIndexTab();
     */
    public async clickIndexTab(): Promise<void> {
        await this.indexTab.click();
    }

    /**
     * Assert that the "Page contents" heading is visible.
     * @example
     * await pageObject.expectPageContentsHeadingVisible();
     */
    public async expectPageContentsHeadingVisible(): Promise<void> {
        await expect(this.page.locator("xpath=//*[@id=\"sidebar-header\"]")).toBeVisible();
    }

    /**
     * Assert that the "About the Index" link is visible.
     * @example
     * await pageObject.expectAboutTheIndexLinkVisible();
     */
    public async expectAboutTheIndexLinkVisible(): Promise<void> {
        await expect(this.page.locator("xpath=/html[1]/body[1]/div[3]/nav[1]/div[1]/ul[1]/li[1]/a[1]")).toBeVisible();
    }

    /**
     * Assert that the "Examples by Role" link is visible.
     * @example
     * await pageObject.expectExamplesByRoleLinkVisible();
     */
    public async expectExamplesByRoleLinkVisible(): Promise<void> {
        await expect(this.page.locator("xpath=//*[@id=\"main\"]/div[1]/div[1]/ul[1]/li[1]/a[1]")).toBeVisible();
    }

    /**
     * Assert that the "Examples By Properties and States" link is visible.
     * @example
     * await pageObject.expectExamplesByPropertiesAndStatesLinkVisible();
     */
    public async expectExamplesByPropertiesAndStatesLinkVisible(): Promise<void> {
        await expect(this.page.locator("xpath=//*[@id=\"main\"]/div[1]/div[1]/ul[1]/li[2]/a[1]")).toBeVisible();
    }

    /**
     * Assert that the "Experimental Examples" link is visible.
     * @example
     * await pageObject.expectExperimentalExamplesLinkVisible();
     */
    public async expectExperimentalExamplesLinkVisible(): Promise<void> {
        await expect(this.page.locator("xpath=//*[@id=\"main\"]/div[1]/div[1]/ul[1]/li[3]/a[1]")).toBeVisible();
    }
}
