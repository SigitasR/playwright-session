import { Locator, Page } from '@playwright/test';
import { ImageUploadDialog } from './ImageUploadDialog';

export class BasicProfilePage {
    uploadDialog: ImageUploadDialog = new ImageUploadDialog(this.page);

    private profileAvatar: Locator = this.page.locator('div[data-testid="open-image-upload"]');

    constructor(private readonly page: Page) {}

    clickAvatar = async () => {
        await this.profileAvatar.click();
    };
}
