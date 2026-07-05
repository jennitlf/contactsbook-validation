import { expect, Page } from "@playwright/test";

export class Search {

    constructor(
        private page: Page
    ) {}

    async fillSearch(search: string) {
        await this.page.waitForTimeout(2000)
        await this.page.locator('#search-input').fill(search);
    }

    async searchByName(name: string) {
        await this.fillSearch(name);

        await expect(
            this.page.locator('.container-name-contact').first()
        ).toContainText(new RegExp(name, "i"));
    }

    async searchByLetter(letter: string) {
        await this.fillSearch(letter);

        const contacts = this.page.locator('.container-name-contact');
        const total = await contacts.count();

        expect(total).toBeGreaterThan(0);

        for (let i = 0; i < total; i++) {
            await expect(contacts.nth(i)).toHaveText(
                new RegExp(letter, 'i')
            );
        }
    }
}