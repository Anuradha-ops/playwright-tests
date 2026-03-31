const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test('successful login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('student', 'Password123');
  await loginPage.expectLoginSuccess();
});

test('failed login with invalid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('wronguser', 'wrongpassword');
  await loginPage.expectLoginFailure();
});