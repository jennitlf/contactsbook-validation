import { test } from '@playwright/test';
import { Search } from '../../pages/search';

test.describe('Buscar contato', () => {

    test('TC-15 - Usuário deve conseguir buscar contato por nome', async ({ page }) => {
        await page.goto('http://localhost:3000');
        const search = new Search(page);
        await search.searchByName('Jennifer')
    });

    test('TC-16 - Usuário deve conseguir buscar contato por letra', async ({ page }) => {
        await page.goto('http://localhost:3000');
        const search = new Search(page);

        await search.searchByLetter('a');
    });

});