/**
 * BasicPO class serves as the foundation for all Page Objects.
 * It provides common methods for interacting with the browser page.
 * 
 * @param {import('@playwright/test').Page} page - The Playwright page object for interacting with the web page.
 */
class BasicPO { 
    constructor(page) { // Constructor initializes the page object and the base URL.
        this.page = page;
        this.baseUrl = 'https://www.google.com';
    }

    // method to obtain the current URL on which the browser is located.
    async getCurrentUrl() {
        return this.page.url(); 
    }

    // Method to navigate to a specific URL/Path.
    async navigateTo(path) {
        await this.page.goto(`${this.baseUrl }${path}`);
    }
    
    // Method to find an element on the page based on the visible text.
    async getElementByText(text) {
        return await this.page.getByText(text) 
    }

     // Method to find an element by its title attribute.
     async getElementByTitle(titleText) {
        return await this.page.getByTitle(titleText);
    }

    // Method to find an element by its data-testid attribute.
    async getElementByTestId(testId) {
        return await this.page.getByTestId(testId);
    }

    // Method to find an element by its ID.
    async getElementById(id) {
        return await this.page.locator(`#${id}`);
    }

    // Method to find an element by its XPath.
    async getElementByXpath(xpath) {
        return await this.page.locator(`xpath=${xpath}`);
    }

    // Method to find an element by its class name.
    async getElementByClass(className) {
        return await this.page.locator(`.${className}`);
    }
}
module.exports = { BasicPO };
