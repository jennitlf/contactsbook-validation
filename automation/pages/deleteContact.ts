import { Page } from "@playwright/test";
import { EditContact } from "./editContact";

export class DeleteContact{

    private edit: EditContact;

    constructor(
        private page: Page
    ){
        this.edit = new EditContact(page);
    }

    async delete(){
        await this.edit.clickToDetails();
        await this.page
        .locator(".controls-div1 button")
        .nth(2)
        .click();
    }
}