import { test, expect } from '@playwright/test';

class GmailPage {
  constructor(page) {
    this.page = page;   
  };

async goto() {
        await this.page.goto('https://www.google.com/');
    }

async goToGmailFromGoogle() {
    await this.page.getByRole('link', { name: 'Gmail' }).click();
  }

  async openGmailWorkspace() {
    await this.page.goto('https://workspace.google.com/intl/en-US/gmail/');
  }

  async signIntoGmail() {
    const popupPromise = this.page.waitForEvent('popup');
    await this.page.getByRole('link', { name: 'Sign into Gmail' }).click();
    const popup = await popupPromise;
    return popup; // return so the test can interact with the popup
  }

}

module.exports = { GmailPage };