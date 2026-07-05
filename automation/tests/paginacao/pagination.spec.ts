import { test } from '@playwright/test';
import { Pagination } from '../../pages/pagination';

test.describe('Paginação na listagem dos contatos', () => {

    test('TC-08 - Deve permitir navegar entre as páginas', async ({ page }) => {
        await page.goto("");

        const pagination = new Pagination(page);

        const hasNextPage = await pagination.hasNextPage();

        test.skip(
            !hasNextPage,
            "Não há massa de teste suficiente para validar a paginação."
        );

        await pagination.pageNavigation();
    });


});