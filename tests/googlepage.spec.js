const { test, expect } = require('@playwright/test');
const { GooglePage } = require('../pages/GooglePage');

test('Login Test', async ({ page }) => {
    const loginTest = new GooglePage(page);
    await loginTest.goto();
    await loginTest.fillUsername('student');
    await loginTest.fillPassword('Password123');
    await loginTest.clickSubmitButton();

    // It is good practice to verify the login worked
    await expect(page).toHaveURL(/logged-in-successfully/);

});