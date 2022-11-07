import { Page } from '@playwright/test';

export class Api {
    constructor(private readonly page: Page) {}

    login = async (email: string, password: string) => {
        const resp = await this.page.request.post(`${process.env.API}/user/authentication/sign-in`, {
            data: {
                email: email,
                password: password,
                persistence: 'NONE',
            },
        });
    };
}
