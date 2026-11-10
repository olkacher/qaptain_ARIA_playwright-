const { BasicPO } = require('./BasicPO');
// TestBase is a base class for tests that provides setup and teardown logic.
class TestBase extends BasicPO{
    /**
     * Constructor to initialize the test with a Playwright page object.
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        super(page);
    }

    // Setup before all tests
    static async beforeAllTests() {
        console.log('Global setup: Tests under preparation');
        // Additional global setup logic can be added here
    }

    // Setup before each test
    async beforeEachTest() {
        console.log('Test setup: Test being started');
        // Get the maximum available screen size
        const { width, height } = await this.page.evaluate(() => {
            return { width: window.screen.availWidth, height: window.screen.availHeight };
            // These properties give you the full available width and height of the screen. 
        });
        // Set the viewport to the maximum available size
        await this.page.setViewportSize({ width, height });
        await this.page.goto(this.baseUrl);
    }

    /**
     * Teardown logic executed after each test.
     * @param {import('@playwright/test').BrowserContext} context - The browser context for managing state.
     */
    async afterEachTest(context) { // Cookies must be deleted via the context object
        console.log('Test Teardown: Test is completed');
        await context.clearCookies();
        await this.page.close();
    }
    // Global teardown after all tests
    static async afterAllTests() {
        console.log('Global Teardown: All tests completed');
    }
}
module.exports = { TestBase };
