import { test, expect } from '@playwright/test';
import { ARIAApgExampleindexPO } from '../pageobjects/ARIAApgExampleindexPO';

test('Page_Contents_Menu_Verification', async ({ page }) => {
    await page.goto("https://www.w3.org/WAI/ARIA/apg/");

    const aRIAApgExampleindexPO = new ARIAApgExampleindexPO(page);
    await aRIAApgExampleindexPO.clickIndexTab();
    await aRIAApgExampleindexPO.expectPageContentsHeadingVisible();
    await aRIAApgExampleindexPO.expectAboutTheIndexLinkVisible();
    await aRIAApgExampleindexPO.expectExamplesByRoleLinkVisible();
    await aRIAApgExampleindexPO.expectExamplesByPropertiesAndStatesLinkVisible();
    await aRIAApgExampleindexPO.expectExperimentalExamplesLinkVisible();
});
