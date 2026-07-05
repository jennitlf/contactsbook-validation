import { Page, test, expect } from "@playwright/test";

export class Pagination{

    constructor(
        private page: Page
    ){}

    async hasNextPage(): Promise<boolean> {
        return !(await this.page.locator("#more").isDisabled());
    }

    async pageNavigation(){
        
        const morePage = this.page.locator('#more');

        await morePage.click();

        const listItems = this.page.locator('#list .contact');

        const count = await listItems.count();

        expect(count).toBeGreaterThanOrEqual(1);
        expect(count).toBeLessThanOrEqual(6);
    }
}