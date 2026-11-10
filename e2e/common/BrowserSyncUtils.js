// **Notes** 
// 1. in Playwright you can wait directly for page.goto(url), which automatically ensures that the page is loaded.
// 2. Playwright offers the method locator.waitFor() and specific methods such as locator.click({ timeout }) or locator.isVisible().
// 3. Playwright provides an asynchronous API and can be compliant to all promises and async/await.
// **
class BrowserSyncUtils {
    /**
     * Initializes the BrowserSyncUtils class with a Playwright page instance.
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
    }

    // To wait until the DOM is fully loaded
    async waitForPageLoad(timeout = 30000) {
        await this.page.waitForLoadState('load', { timeout });
    }

    // To wait until all jQuery requests are completed
    async waitForJQuery() {
        await this.page.waitForFunction(() => {
            return window.jQuery && window.jQuery.active === 0;
        });
    }
    
    // To wait until all Angular requests are completed
    async waitForAngular() {
        await this.page.waitForFunction(() => {
            return window.angular && window.angular.element(document).injector().get('$http').pendingRequests.length === 0;
        });
    }
}
module.exports = { BrowserSyncUtils };
