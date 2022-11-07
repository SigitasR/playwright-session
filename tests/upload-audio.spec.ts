import { test } from '@playwright/test';
import { LoginPage } from '../page-objects/login/LoginPage';
import { SongsList } from '../page-objects/songs/SongsList';
import { SongView } from '../page-objects/songs/SongView';
import { Api } from '../util/Api';

test.describe('Audio upload', () => {
    let api: Api;
    let loginPage: LoginPage;
    let songList: SongsList;
    let songView: SongView;

    test.beforeEach(async ({ page }) => {
        await page.goto('/');

        api = new Api(page);
        loginPage = new LoginPage(page);
        songList = new SongsList(page);
        songView = new SongView(page);
    });

    test('should try to login and upload audio', async ({ page }) => {
        await test.step('should login', async () => {
            await api.login(process.env.EMAIL, process.env.PASSWORD);
            await page.goto('/studio/songs');
            await songList.header.assertPageTitle('Songs');
            await songList.checkIfAddSongButtonIsDisplayed();
        });

        await test.step('should upload audio', async () => {
            await songList.clickNewSong();
            await songView.enterSongTitle('Kre');
            await songView.clickUpload();
            await songView.dragAndDrop.addAudioFiles(['resources/sample1.mp3', 'resources/sample1.mp3']);
            await songView.audioDetails.clickUpload();
            await songView.checkIfUploadedAudioCountIs(2);
        });
    });
});
