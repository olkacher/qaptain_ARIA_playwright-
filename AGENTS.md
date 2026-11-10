# AGENTS.md

_Maintained by Webrocket AI to guide automated test-code generation. Hand edits under the authoritative section are preserved; the derived section is regenerated each run._

## Design decisions

- **Language:** typescript
- **Framework:** playwright
- **Build tool:** npm
- **Test runner:** @playwright/test
- **Tests directory:** `e2e/tests`
- **Page-object directory:** `e2e/pageobjects`
- **Decisions source:** harness

## Conventions

### Page objects

Common base class BasicPO in e2e/common. Concrete page objects are ES6 classes in separate .js files under e2e/pageobjects, each extending BasicPO. Constructor stores the injected Playwright Page instance on super, and defines locators as properties using page.locator or page.getBy* helpers. Page-object methods wrap navigation and interactions, often using BasicPO helpers like navigateTo.

### Naming

Test files live under e2e/tests and are named with .spec.js suffix (e.g., ExampleTest.spec.js). Page object files live under e2e/pageobjects and are named with a *PO.js suffix (e.g., ExamplePO.js). Classes are PascalCase. Page-object classes end with PO (e.g., ExamplePO). Tests use CommonJS require to pull in @playwright/test and page objects/base classes, but may use import syntax when targeting local helpers. Test suites are grouped with test.describe, and individual tests use human-readable string names. Base helpers live in e2e/common as PascalCase .js files exported via module.exports.

### Assertions

Playwright Test built-in expect assertions imported from '@playwright/test', e.g., await expect(page).toHaveURL(base.baseUrl). No separate assertion libraries.

## How to add new testing elements

### New page object

1) In e2e/pageobjects, create a new file named <Name>PO.js (e.g., LoginPO.js). 2) At the top, import the BasicPO base class: `import { BasicPO } from '../common/BasicPO'` (or `const { BasicPO } = require('../common/BasicPO');` to match existing style). 3) Define a class named <Name>PO that extends BasicPO. 4) Implement a constructor(page) that calls `super(page);` and defines any locators as properties using `page.locator(...)` or `page.getBy*` helpers. 5) Add interaction methods (e.g., fill forms, click buttons, navigate) that use those locators or inherited helpers like navigateTo. 6) Export the class using `module.exports = { <Name>PO };`.

### New test case

1) In e2e/tests, create a new test file named <Feature>Test.spec.js (e.g., LoginTest.spec.js). 2) At the top, require Playwright Test: `const { test, expect } = require('@playwright/test');`. 3) Import the shared TestBase from '../common/TestBase': `const { TestBase } = require('../common/TestBase');` (aligning with existing base usage). 4) If you need page objects, require them from '../pageobjects/<Name>PO': `const { <Name>PO } = require('../pageobjects/<Name>PO');`. 5) Wrap tests in `test.describe('Descriptive suite name', () => { ... });`. 6) Inside, declare a `let base;` variable. In `test.beforeEach(async ({ page }) => { base = new TestBase(page); await base.beforeEachTest(); });` to handle per-test setup. 7) In `test.afterEach(async () => { const context = base.page.context(); await base.afterEachTest(context); });` to handle teardown. 8) Define individual tests with `test('<descriptive test name>', async ({ page }) => { ... assertions with expect ... });`, using `base` and any page objects instantiated with the provided `page`. 9) Export nothing; Playwright Test automatically discovers *.spec.js files under e2e/tests.

<!-- webrocket-ai:design-decisions source=harness -->
