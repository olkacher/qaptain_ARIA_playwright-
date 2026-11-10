const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
    // Path to the tests 
    testDir: './e2e/tests/',

    // Maximum duration for individual tests
    timeout: 60000,

    // Number of repetitions for test errors
    retries: 1, 

    // Path for the output of test reports
    outputDir: './e2e/reports/', 

    // Reporter-configuration
    reporter: [
        ['list'], // Console reporter
        ['html', { open: 'never' }], // HTML-Reporter (Creates a HTML report for test results && open: 'never' to open the report manually)
        ['junit', { outputFile: 'test-results/results.xml' }] // Creates an XML report in JUnit format, usefull in CI/CD pipelines
    ],

    // Global settings for all tests 
    use: {
        headless: false, // If false, a new browser window is opened for each test
        baseURL: 'http://localhost:3000', // Default base URL for all page.goto() calls, unless one is explicitly specified
        actionTimeout: 10000, // Time for every action
        screenshot: 'only-on-failure', // Screenshots in case of errors
        video: 'retain-on-failure', // Videos in case of errors (Playwright only saves videos if a test fails).
        trace: 'on-first-retry', // Tracing on the first repetition
        launchOptions: {
            args: ["--start-maximized"], // This ensure the browser starts maximized
        },
    },
    workers: 1, // To deactivate parallel execution, the number of workers is set to 1
    // Define projects to run tests in different browsers
    projects: [
        {
            name: 'Desktop Chromium',
            use: { ...devices['Desktop Chrome'] },
        },
        {
            name: 'Desktop Firefox',
            use: { ...devices['Desktop Firefox'] },
        },
        {
            name: 'Desktop Safari',
            use: { ...devices['Desktop Safari'] },
            deviceScaleFactor: 1, // No scaling, simulates standard desktop monitors
        },
    ],
});
