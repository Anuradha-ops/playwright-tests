const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameField = page.locator('#username');
    this.passwordField = page.locator('#password');
    this.loginButton = page.locator('#submit');
    this.errorMessage = page.locator('#error');
  }

  async goto() {
    await this.page.goto('https://practicetestautomation.com/practice-test-login/');
  }

  async login(username, password) {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }

  async expectLoginSuccess() {
    await expect(this.page).toHaveURL(/logged-in-successfully/);
  }

  async expectLoginFailure() {
    await expect(this.errorMessage).toBeVisible();
  }
}

module.exports = { LoginPage };