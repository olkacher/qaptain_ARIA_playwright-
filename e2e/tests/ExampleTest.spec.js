// This test file demonstrates how to use the created Page Objects in test cases.
const { test, expect } = require('@playwright/test');
import { TestBase } from "../common/TestBase"; 
// Test suite for generic test setup and teardown logic
test.describe('Example Test Suite for Base Setup and Teardown', () => {
    let base;
    test.beforeEach(async ({ page }) => {
        base = new TestBase(page);
        await base.beforeEachTest();
    });
    test.afterEach(async () => {
        const context = base.page.context(); // Retrieve the context from the base instance's page
        await base.afterEachTest(context);        // Clean up test-specific resources
    });

     // Example test case: Verify page title after navigating to baseUrl
    test('Example Test Case: navigating the page', async ({ page }) => {
        console.log('[TEST CASE] Verifying the page');
        console.log('Page running');
        // Expect the baseUrl to be navigated to baseUrl
        await expect(base.page).toHaveURL(base.baseUrl);
    });
});
