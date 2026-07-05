import { test } from '@playwright/test';
import { Query } from '../../pages/query';
import { Usability } from '../../pages/usability';

test.describe('Listagem vazia', () => {

    test('TC-09 - Listagem deve exibir "Nenhum contato encontrado"', async ({ page }) => {
        await page.goto('');
        const query = new Query(page);
        const usability = new Usability(page)
        const hasContact = await usability.hasContact();
        test.skip(
            hasContact,
            "O teste necessita que não haja contatos cadastrados"
        );
        await query.emptyList();
    });

});