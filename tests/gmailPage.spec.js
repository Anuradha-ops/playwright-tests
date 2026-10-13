const { test } = require('@playwright/test');
const { GmailPage } = require('../pages/gmailPage');

  test('Go to Gmail from Google', async ({ page }) => {
    const gmailPage = new GmailPage(page);
    await gmailPage.goToGmailFromGoogle();
  });