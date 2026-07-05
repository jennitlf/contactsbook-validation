import { test } from '@playwright/test';
import { Usability } from '../../pages/usability';

test.describe('Navegação pelas telas', () => {

    test('TC-11 - Sistema deve permitir usuário retornar da tela de cadastro para a listagem', async ({ page }) => {
        await page.goto('');
        const usability = new Usability(page);
        await usability.returnToTheList();
    });

     test('TC-13 - Sistema deve permitir retornar para a tela de detalhes a partir da tela de edição', async ({ page }) => {
        await page.goto('');
        
        const usability = new Usability(page);
        const hasContact = await usability.hasContact();

        test.skip(
            !hasContact,
            "Não há massa de teste suficiente para validar a navegação."
        );

        await usability.returnToTheEdit();
    });
});