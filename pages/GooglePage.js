class GooglePage {

    constructor(page) {
        this.page = page;
        this.usernameField = page.locator('#username');
        this.passwordField = page.locator('#password');
        this.loginButton = page.locator('#submit');
    }

    async goto() {
        await this.page.goto('https://practicetestautomation.com/practice-test-login/');
    }

    async fillUsername(username) {
        await this.usernameField.fill(username);
    }

    async fillPassword(password) {
        await this.passwordField.fill(password);
    }

    async clickSubmitButton() {
        await this.loginButton.click();
    }

    async getErrorMessage() {
        const errorMessage = await this.page.locator('#error').textContent();
        return errorMessage;    
    }   
}

module.exports = { GooglePage };
