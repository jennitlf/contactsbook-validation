import { test } from '@playwright/test';
import { DeleteContact } from '../../pages/deleteContact';
import { Usability } from '../../pages/usability';

test.describe('Exclusão do contato', () => {

    test('TC-06 - Deve permitir excluir um contato', async ({ page }) => {
        await page.goto('');
        const deleteContact = new DeleteContact(page);
        const usability = new Usability(page);

        const hasContact = usability.hasContact();
         test.skip(
            !hasContact,
            "Não há massa de teste suficiente para validar a navegação."
        );
        
        await deleteContact.delete();
    });


});