import { Locator, Page } from '@playwright/test';

export class AudioFileDetailsDialog {
    private uploadButton: Locator = this.page.locator('[data-testid="AudioAddDialog-upload-btn"]');

    constructor(private readonly page: Page) {}

    clickUpload = async () => {
        await this.uploadButton.click();
    };
}
