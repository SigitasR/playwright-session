import { Locator, Page } from '@playwright/test';

export class DragAndDropModal {
    private modalContainer: Locator = this.page.locator('[data-testid="dragAndDrop"]');
    private audioInput = this.modalContainer.locator('input[type="file"]');

    constructor(private readonly page: Page) {}

    addAudioFiles = async (files: string[]) => {
        await this.audioInput.setInputFiles(files);
    };
}
