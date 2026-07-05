import { expect, Page } from "@playwright/test";
import { MapFuncionality } from "./mapFunctionality";

export class EditContact {

    private map: MapFuncionality;

    constructor(
        private page: Page
    ){
        this.map = new MapFuncionality(page);
    }

    

    async clickToDetails(){
        
        await this.page
        .locator(".contact")
        .first()
        .locator("span.material-symbols-outlined")
        .click();

        await expect(this.page).toHaveURL(/details/);
    }

    async clickToEdit() {

        await this.page.locator('.fa-pen-to-square').click();
        await expect(this.page).toHaveURL(/edit/);

    }

    async editAllFields(){

        await this.page.locator("#nameInput").fill("Maria Oliveira");
        await this.page.locator("#typeInput").fill("Pessoal");
        await this.page.locator("#phone").fill("92999999999");
        await this.map.moveMarker();
        await this.map.verifyingAddressValue();
        await this.page.getByRole('button', { name: 'Salvar' }).click();
    }

    async editAddressWithoutMap(){

        const addressField = this.page.locator("#addressInput");
        await expect(addressField).toBeDisabled();
    }

}