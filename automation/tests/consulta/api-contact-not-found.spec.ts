import { test } from '@playwright/test';
import { Query } from '../../pages/query';

test.describe('Consultar contato não existente', () => {

    test('TC-07 - Api retornar erro 404', async ({ page }) => {
        const query = new Query(page);
        await query.contactDoesNotExist();
    });

});