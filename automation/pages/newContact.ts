import { Page, expect, Locator} from "@playwright/test";
import { MapFuncionality } from "./mapFunctionality";

export class NewContact {

    private map: MapFuncionality;

    constructor( 
        private page: Page
    ){
        this.map = new MapFuncionality(page);
    }

    async clickOnNewContact() {
        await this.page.getByRole('button', { name: 'Novo contato' }).click();
        await this.page.waitForTimeout(2000)
    };

    async fillInFields(contact: {
        name: string;
        type: string;
        phone: string;
    }) {
        await this.page.getByLabel("Nome").fill(contact.name);
        await this.page.getByLabel("Tipo").fill(contact.type);
        await this.page.getByLabel("Número").fill(contact.phone);
        await this.map.moveMarker();
        await this.map.verifyingAddressValue()
    };

    async clickInSave() {
        await this.page.getByRole('button', { name: 'Salvar' }).click();
        await this.page.waitForTimeout(2000)
    };

    async confirmSucess(){
        const dialogPromise = this.page.waitForEvent('dialog');
        await this.clickInSave();
        const dialog = await dialogPromise;
        expect(dialog.message()).toBe('Contato salvo com sucesso!');
        await dialog.accept();
    }


    async numberFieldValidation() {
        const phoneField = this.page.getByLabel('Número');

        await phoneField.click();

        await this.page.keyboard.press('KeyA');
        await this.page.keyboard.press('KeyB');
        await this.page.keyboard.press('KeyC');

        expect(await phoneField.inputValue()).toBe('');

        await phoneField.clear();

        await phoneField.click();
        await this.page.keyboard.type('9999999999999999');

        const valueAfterNumbers = await phoneField.inputValue();

        expect(valueAfterNumbers).toHaveLength(14);

        expect(valueAfterNumbers).toBe('99999999999999');
}

    async returnToMain() {
        await this.page.waitForTimeout(2000);
        await this.page.getByRole('button', { name: 'Voltar' }).click();
    }

    async requiredFields(){
        await this.clickInSave();
        await this.page.waitForTimeout(2000);
        
        await this.validateRequiredField(
            this.page.getByLabel('Nome')
        );
        await this.validateRequiredField(
            this.page.getByLabel('Tipo')
        );
        await this.validateRequiredField(
            this.page.getByLabel('Número')
        );
    }

    async validateRequiredField(field: Locator) {
    const error = field
        .locator('xpath=..')
        .locator('.error');

    await expect(error).toHaveText('Campo obrigatório');
}

}