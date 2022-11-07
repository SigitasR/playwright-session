import { HeaderComponent } from '../components/HeaderComponent';
import { expect, Locator, Page } from '@playwright/test';

export class SongsList {
    readonly header: HeaderComponent = new HeaderComponent(this.page);

    private newSongButton: Locator = this.page.locator('[data-testid="add-song"]');

    constructor(private readonly page: Page) {}

    clickNewSong = async () => {
        await this.newSongButton.click();
    };

    checkIfAddSongButtonIsDisplayed = async () => {
        await expect(this.newSongButton).toBeVisible();
    };
}
