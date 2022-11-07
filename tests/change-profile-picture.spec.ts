import { test } from '@playwright/test';
import { Api } from '../util/Api';
import { BasicProfilePage } from '../page-objects/profile/BasicProfilePage';

test.describe('Profile picture test', () => {
    let api: Api;
    let basicProfilePage: BasicProfilePage;

    test.beforeEach(async ({ page }) => {
        await page.goto('/');

        api = new Api(page);
        basicProfilePage = new BasicProfilePage(page);
        await api.login(process.env.EMAIL, process.env.PASSWORD);
        await page.goto('/studio/profile/basic');
    });

    test('should change profile picture', async () => {
        await basicProfilePage.clickAvatar();
        await basicProfilePage.uploadDialog.uploadImage();
        await basicProfilePage.uploadDialog.clickUse();
    });
});
