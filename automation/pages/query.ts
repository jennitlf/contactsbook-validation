import { expect, Page } from "@playwright/test";

export class Query {
    constructor(
        private page: Page
    ){}

    async contactDetails(){
        const firstContact = this.page.locator('#list .contact').first();
        const expectedName = await firstContact.locator('.container-name-contact').textContent();
        await firstContact.locator('.details').click();
        await expect(this.page.locator('#name')).toContainText(expectedName ?? '');
    }
    

    async contactDoesNotExist() {
        const fakeId = '65c93c73-0d31-400a-be04-b9b71be28658';

        const response = await this.page.request.get(
            `http://localhost:3010/contacts/${fakeId}`,
            {
                headers: {
                    'Accept': 'application/json'
                }
            }
        );

        expect(response.status()).toBe(404);
    }

    async emptyList(){
        
        const items = this.page.locator('#list > li');

        await expect(items).toHaveCount(0);

        await expect(this.page.locator('#list')).toContainText('Nenhum contato encontrado');
    }
}