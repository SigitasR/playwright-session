import { expect, Locator, Page } from '@playwright/test';
import { DragAndDropModal } from '../components/DragAndDropModal';
import { AudioFileDetailsDialog } from '../components/AudioFileDetailsDialog';

export class SongView {
    dragAndDrop: DragAndDropModal = new DragAndDropModal(this.page);
    audioDetails: AudioFileDetailsDialog = new AudioFileDetailsDialog(this.page);

    private songTitleInput: Locator = this.page.locator('[data-testid="song-title"]');
    private uploadButton: Locator = this.page.locator('[data-testid="upload-audio-button"]');

    constructor(private readonly page: Page) {}

    enterSongTitle = async (title: string) => {
        await this.songTitleInput.fill('');
        await this.songTitleInput.type(title);
    };

    clickUpload = async () => {
        await this.uploadButton.click();
    };

    checkIfUploadedAudioCountIs = async (count: number) => {
        await this.page.waitForLoadState('networkidle');
        await expect.poll(async () => await this.page.locator('[data-testid="audio-play-button"]').count(), { timeout: 30000 }).toEqual(count);
    };
}
