import { Page, expect } from "@playwright/test";

export class MapFuncionality {
    constructor( 
        private page: Page
    ){}

    async moveMarker(){
        const marker = this.page.locator('.leaflet-marker-icon');
        await marker.hover();
        await this.page.mouse.down();
        await this.page.mouse.move(600, 350, { steps: 20 });
        await this.page.mouse.up();
        await this.page.waitForTimeout(2000)
    }
    async verifyingAddressValue(){
        const value = await this.page.getByLabel('Endereço').inputValue();
        expect(value.trim().length).toBeGreaterThan(5)
    }
}