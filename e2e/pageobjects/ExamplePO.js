import { BasicPO } from '../common/BasicPO'
/**
 * ExamplePO class demonstrates how to create a Page Object for a specific page.
 * This serves as a template for creating pages objects by extending the BasePage class.
 */
class ExamplePO  extends BasicPO {
  /**
   * Constructor initializes the page with Playwright's page object.
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    super(page);
    //Locators
    this.exampleElement = page.locator('css=[data-test="exampleElement"]'); // Example Locators for elements on the page
  }

  // Methods
  async navigateTo() { // Inherits from the superclass BasePage
    await super.navigateTo('/example-path'); // Navigates to the example path 
} 
}
module.exports = { ExamplePO  };
