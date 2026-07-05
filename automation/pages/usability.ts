import { Page, expect } from "@playwright/test";
import { NewContact } from "./newContact";
import { EditContact } from "./editContact";

export class Usability{

    private newContact: NewContact
    private editContact: EditContact

    constructor(
        private page: Page
    ){
        this.newContact = new NewContact(page);
        this.editContact = new EditContact(page);
    }

    async returnToTheList(){
        await this.newContact.clickOnNewContact();
        await this.page.getByRole('button', { name: 'Voltar' }).click();
        await expect(this.page.locator('#list')).toBeVisible();

    }

    async returnToTheEdit(){
        await this.editContact.clickToDetails();
        await this.editContact.clickToEdit();

        await this.page.getByRole('button', { name: 'Voltar' }).click();
        await expect(this.page.locator('.details')).toBeVisible();
    }

    async hasContact(): Promise<boolean> {
        return (await this.page.locator("#list .contact").count()) > 0;
    }

    async alphabeticalOrder(){
        const names = await this.page
        .locator(".container-name-contact")
        .allTextContents();

        const sorted = [...names].sort((a, b) =>
            a.localeCompare(b, "pt-BR")
        );

        return JSON.stringify(names) === JSON.stringify(sorted);
    }

}