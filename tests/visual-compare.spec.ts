import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/login/LoginPage';
import { SongsList } from '../page-objects/songs/SongsList';

test.describe('Visual comparison', () => {
    let loginPage: LoginPage;
    let songList: SongsList;

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        loginPage = new LoginPage(page);
        songList = new SongsList(page);
    });

    test('should try to login and compare to reference screenshot', async ({ page }) => {
        await test.step('Login', async () => {
            await loginPage.typeEmail('reeeee');
            await loginPage.assertEmailErrorText('Must be a valid email');
            await loginPage.typePassword('123');
            await loginPage.assertPasswordErrorText('Minimum 6 characters');
            await loginPage.clearEmail();
            await loginPage.clearPassword();
            await loginPage.typeEmail(process.env.EMAIL);
            await loginPage.typePassword(process.env.PASSWORD);
            await loginPage.clickLogin();
            await songList.header.assertPageTitle('Songs');
            await songList.checkIfAddSongButtonIsDisplayed();
        });

        await test.step('should compare to reference screenshot', async () => {
            await expect(page).toHaveScreenshot();
        });
    });
});
