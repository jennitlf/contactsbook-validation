import { test, expect } from '@playwright/test'
import { Usability } from '../../pages/usability';

test.describe('Ordem dos contatos', () => {

    test('TC-14 - Listagem deve exibir contatos em ordem alfabética', async ({ page }) => {

        await page.goto('');
        const usability = new Usability(page);
        
        const hasContact = await usability.hasContact();
        
        test.skip(
            !hasContact,
            "Não há massa de teste suficiente para validar a navegação."
        );

        const isAlphabetical = await usability.alphabeticalOrder();

        expect(isAlphabetical).toBeTruthy();
    });


});