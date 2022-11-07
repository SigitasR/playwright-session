import { expect, Locator, Page } from '@playwright/test';

export class HeaderComponent {
    private pageTitle: Locator = this.page.locator('[data-testid="page-title"]');

    constructor(private readonly page: Page) {}

    assertPageTitle = async (title: string) => {
        await expect(this.pageTitle).toHaveText(title);
    };
}
