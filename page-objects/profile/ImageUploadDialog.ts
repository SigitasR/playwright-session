import { Locator, Page } from '@playwright/test';

export class ImageUploadDialog {
    private imageInput: Locator = this.page.locator('input[data-testid="image-dropzone"]');
    private useButton: Locator = this.page.locator('button[data-testid="image-submit-button"]');

    constructor(private readonly page: Page) {}

    uploadImage = async () => {
        await this.imageInput.setInputFiles('resources/cover.jpg');
    };

    clickUse = async () => {
        await this.useButton.click();
    };
}
