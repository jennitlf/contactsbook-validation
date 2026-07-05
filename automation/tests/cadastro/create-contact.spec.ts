import { test } from '@playwright/test'
import { NewContact } from '../../pages/newContact';
import { generateContact } from '../../fixtures/generateContact';

test.describe('Cadastro de contatos', () => {

    test('TC-01 - Deve cadastrar um contato com sucesso', async ({ page }) => {
        await page.goto('http://localhost:3000');
        const newContact = new NewContact(page);
        const contact = generateContact();
        await newContact.clickOnNewContact();
     
        await newContact.fillInFields(contact);
        await newContact.confirmSucess();
    });

      test('TC-12 - Deve validar o campo telefone', async ({ page }) => {
        await page.goto('http://localhost:3000');
        const newContact = new NewContact(page);
        await newContact.clickOnNewContact();

        await newContact.numberFieldValidation();

    });

    test('TC-02 - Não deve permitir salvar sem preencher campos obrigatórios', async ({ page }) => {
        await page.goto('http://localhost:3000');
        const newContact = new NewContact(page);
        await newContact.clickOnNewContact();
        await newContact.requiredFields();
    });

  

});