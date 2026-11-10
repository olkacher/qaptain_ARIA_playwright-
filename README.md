# Playwright JavaScript Template
This is a Playwright template project designed to provide a starting point for automated testing of web applications using Playwright with JavaScript.
## Overview
Playwright is a powerful framework for browser automation that supports Chromium, Firefox, and WebKit. This template will help you quickly get started with writing and running tests across multiple browsers and devices.
## Built With
* [JavaScript/Node.js](https://nodejs.org/docs/latest/api/)- Programming Language
* [Playwright](https://playwright.dev/docs/intro) - Framework for automated control of a web browser
* [HTML Reporter, JUnit Reporter, Console Reporter](https://git.lab.proficom.de/templates/test-automation-getting-started/src/branch/master/js/playwright-example/template/playwright.config.js) - Built-in Reporting Frameworks from Playwright
* [dotenv](https://www.dotenv.org/docs/quickstart) - For managing environment variables

## Getting Started
### Clone the Repository
Start by cloning the project:
```
git clone https://git.lab.proficom.de/templates/test-automation-getting-started.git

cd js/playwright-example // playwright example directory 
```
### Requirements
* Node.js and npm must be set up on the respective execution environment.
* Playwright manages all necessary browsers (Chromium, Firefox, WebKit) automatically, so no manual installation is required.
### Installation
To download all necessary dependencies, please run the following npm command:

```
npm install // install all dependencies
npm install @playwright/test 
npm install dotenv // if environment variable needed to be set
npx playwright install // needed to install browser binaries (Chromium, Firefox, WebKit) required for Playwright testing
```
These commands will install Playwright, dotenv, and all other dependencies listed in package.json.
### Which One to Use? (npm init playwright@latest or npm install playwright@latest)
If you are starting fresh or want Playwright to handle all the setup (like folder structure, example tests, etc.), use:
```
npm init playwright@latest
```
If you are adding Playwright to an existing project or want more granular control over what gets installed, you can use:
```
npm install @playwright/test
```
After running either of these commands, you may still need to install other dependencies like dotenv or any other libraries your project needs.

So, you don't need to run both npm install @playwright/test and npm init playwright@latest; choose the one that fits your use case best.
#### Playwright Initiation
```
npm init playwright@latest
```
Run the init command and select the following to get started:

* Choose JavaScript (default is TypeScript)
* Name of your Tests folder (default is tests or e2e if you already have a tests folder in your project)
* Add a GitHub Actions workflow to easily run tests on CI (IF needed)
* Install Playwright browsers (default is true)

### Updating Playwright (if needed)
To update Playwright to the latest version run the following command:
```
npm install -D @playwright/test@latest
```
Also download new browser binaries and their dependencies:
```
npx playwright install --with-deps
```
## Test Execution 

### Running Tests (e.g., Visual Studio Code)
#### 1. Prepare .env file: (optional)

Create a .env file in the root of the project with the necessary environment variables, for example: (**Only implemented in the example**)
```
TEST_USER_NAME = mmustermann
TEST_USER_PASSWORD = password123
```
To ensure that dotenv works correctly, import and configure it at the beginning of your test files or in a common setup file (like TestBase.js):

    require('dotenv').config();

This line loads the environment variables from the .env file into process.env, making them accessible throughout the test files.

###### Using Environment Variables in Your Code
You can now reference environment variables using process.env in your tests or page object files. For example, if you are writing a test that logs in a user, you can access the username and password like this:

    await base.userLogin(process.env.TEST_USER_NAME, process.env.TEST_USER_PASSWORD); // example for showing how to use .env variables

#### 2. Run tests:
##### Without additional params:

```
npx playwright test // to run all tests in /tests folder (Headless test as configurated in confige file)

or
npx playwright test --workers=1 // run Playwright tests with only one worker, meaning one after the other.(not parallel Tests)

or
npx playwright test TestBase.spec.js  // to run specific tests  
```
##### With additional params (optional):

```
npx playwright test --config=playwright.config.js --project="Desktop Chrome" --headed
```
###### Parameter explanation
* --config - Specifies the Playwright configuration file.
* --project - Specifies which browser should be used (e.g., "Desktop Chrome", "Desktop Firefox").
* --headed - Runs tests with the browser UI visible (headless mode is default).
##### Firefox Browser Launch Issue on Windows 10 N
If you're using Windows 10 N, you may encounter an issue where Firefox fails to launch during automated tests due to missing media components (**mf.dll** and **mfplat.dll**). This can be resolved by installing the Media Feature Pack:

- Go to Settings > Apps > Optional Features.
- Click Add a feature and install the Media Feature Pack.
- Restart your system after installation.
- Once the Media Feature Pack is installed, the missing mf.dll and mfplat.dll files should be available on your system, allowing your browser to launch without the error in your automated test case.

For more details, refer to the [Media Feature Pack for Windows N Editions](https://support.microsoft.com/en-us/topic/media-feature-pack-list-for-windows-n-editions-c1c6fffa-d052-8338-7a79-a4bb980a700a).
#### 3. View reports:
After running the tests, you can view the HTML report generated by Playwright:

```
npx playwright show-report
```
This will open a browser window displaying a detailed report of the test execution. 
## Generate Tests in VS Code Using Playwright
- **Open Codegen:** To generate test scripts, use the Playwright codegen tool:
```
npx playwright codegen <your-website-url>
```
- **Interact with the Browser:** Perform actions in the opened browser (e.g., click, type). Playwright will record these actions and generate a test script in real-time.

- **Save and Use the Script:** Copy the generated script from the terminal and save it in your test files to automate browser tests.
## Template Structure
This template is designed with clarity in mind, and all files are thoroughly commented to guide developers in understanding how the code works. Each file includes detailed step-by-step explanations in the form of comments, making it easy for anyone to modify or extend the code without needing in-depth prior knowledge of Playwright or the application under test. Here’s an overview of each folder and its contents:
### e2e/: 
This is the main directory where our template reside. It includes various subdirectories to logically group different components of your test suite.
1. #### common/: 
The common directory contains shared utilities, base classes, and helper methods that can be used across different test cases. 

Key files:

- BaseBage.js: BasePage class serves as the foundation for all Page Objects. It provides common methods for interacting with the browser page
- TestBase.js: A base class that defines common setup and teardown methods for all tests. You can extend this class in your individual test files to ensure consistency and reduce duplication.
- BrowserSyncUtils.js: Utility functions to handle browser synchronization, like waiting for elements to load.

2. #### pageobjects/: 
This folder contains all Page Object Model (POM) classes. Each class in this folder represents a single page or significant section of the web application under test. This makes the code modular, reusable, and easy to maintain. Each Page Object class typically includes:
- Locators: Definitions of key elements on the page using Playwright’s selectors (page.locator()).
- Actions: Methods that encapsulate interactions with those elements (e.g., clicking a button, entering text into a form, etc.).

3. #### tests/: 
This directory includes all your test files. Tests are written using the Page Object Model and focus on verifying application functionality.
Tests typically follow this structure:

- Setup the browser and page.
- Use Page Objects to navigate and interact with the application.
- Validate the results using assertions (expect()).

This directory contains the test files that use the Page Objects to interact with the application (e.g., TestBase.spec.js).

4. #### reports/: 
Contains reports in the form of videos or screenshots for the tests as defined in the config file.

### playwright.config.js:  
This file contains the configuration for Playwright, such as the browser options, reporters, and other test settings. Important configuration options include:

- Projects: Defines different browsers or devices to run tests against (e.g., "Desktop Chrome", "Mobile Safari").
- Timeouts: Global settings for timeouts (e.g., for each test case or navigation action).
- Reporters: Configures the reporting mechanisms, such as console output, HTML reports, and JUnit reports for CI.
- Browser settings: Configure headless mode, browser viewport size, and more.

Example snippet:

    // Configuring multiple projects to run tests across different browsers
    projects: [
    {
        name: 'Desktop Chrome', // Runs tests in the Chromium browser
        use: { browserName: 'chromium' }, // Browser-specific configuration
    },
    {
        name: 'Desktop Firefox', // Runs tests in Firefox
        use: { browserName: 'firefox' },
    }
    ],

## How to Create and Use Page Objects
This template provides an example of how to create and use Page Objects. To create a new Page Object:

1. Create a new file in the pageobjects/ directory, for example, NewPageObject.js.
2. Extend the BasePage class to inherit common methods and properties.
3. Define locators for the elements on the page and create methods to interact with them.

### Example Usage in Tests
Refer to the tests/TestBase.spec.js file for an example of how to set up and use the Page Objects in your test cases. This file demonstrates how to use the global setup and teardown methods, as well as page-specific methods for interacting with the application.
### Test Files: .spec.js
In this template, we use .spec.js for our end-to-end tests, following Playwright's default convention.

**Why .spec.js?:** 
- The .spec.js suffix typically indicates specification tests, focusing on simulating full user flows and interactions across the application. 
- This differs from .test.js, which is often used for smaller, isolated unit tests. Using .spec.js helps clarify that these tests cover end-to-end scenarios, ensuring comprehensive coverage of user journeys.
## Key Features
1. Page Object Model (POM): Ensures tests are easy to maintain and scale.
2. Cross-Browser Testing: Run tests across multiple browsers (Chromium, Firefox, WebKit) with minimal configuration.
3. Built-in Reporting:

- Console Reporter: Shows real-time test progress in the console.
- HTML Reporter: Creates a detailed HTML report of the test results, which can be viewed manually.
- JUnit Reporter: Generates an XML report in JUnit format, suitable for use in CI/CD pipelines.

   Example configuration in playwright.config.js:
   ```
    reporter: [
        ['list'], // Console reporter (shows test progress in the console)

        ['html', { open: 'never' }], // HTML reporter (creates an HTML report for test results; open: 'never' to view manually)

        ['junit', { outputFile: 'test-results/results.xml' }] // JUnit reporter (generates an XML report for CI/CD)

    ],
   ```
## Documentation
Playwright’s documentation can be found here: [Playwright Documentation](https://playwright.dev/docs/intro).

## Contact
proficom - hallo@proficom.de