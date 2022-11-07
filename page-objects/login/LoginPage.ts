import { expect, Locator, Page } from '@playwright/test';

export class LoginPage {
    private emailInput: Locator = this.page.locator('[data-testid="email"]');
    private passwordInput: Locator = this.page.locator('[data-testid="password"]');
    private logInButton: Locator = this.page.locator('[data-testid="signin-btn"]');
    private emailErrorText: Locator = this.page.locator('[data-testid="error-text"]');
    private passwordErrorText: Locator = this.page.locator('[data-testid="password-error-text"]');

    constructor(private readonly page: Page) {}

    typeEmail = async (email: string) => {
        await this.emailInput.type(email, { delay: 50 });
        await this.emailInput.press('Tab');
    };

    typePassword = async (password: string) => {
        await this.passwordInput.type(password, { delay: 50 });
        await this.passwordInput.press('Tab');
    };

    clickLogin = async () => {
        await this.logInButton.click();
    };

    clearEmail = async () => {
        await this.emailInput.fill('');
    };

    clearPassword = async () => {
        await this.passwordInput.fill('');
    };

    assertEmailErrorText = async (text: string) => {
        await expect(this.emailErrorText).toHaveText(text);
    };

    assertPasswordErrorText = async (text: string) => {
        await expect(this.passwordErrorText).toHaveText(text);
    };
}
