import { test } from '@playwright/test'
import { EditContact } from '../../pages/editContact';

test.describe('Edição do contato', () => {

    test('TC-04 - Não deve permitir editar endereço sem usar mapa', async ({ page }) => {
       
        await page.goto('');
        const editContact = new EditContact(page);
        await editContact.clickToDetails();
        await editContact.clickToEdit();
        await editContact.editAddressWithoutMap();
    });

    test('TC-05 - Todos os campos do contato devem ser editáveis', async ({ page }) => {
        await page.goto('');
        const editContact = new EditContact(page);
        await editContact.clickToDetails();
        await editContact.clickToEdit();
        await editContact.editAllFields();
    });

});