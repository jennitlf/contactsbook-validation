import { test } from '@playwright/test';
import { Query } from '../../pages/query';

test.describe('consultar dados do contato', () => {
    
    test('TC-10 - Deve visualizar detalhes de contato existente', async ({ page }) => {
        await page.goto('');
        const query = new Query(page);
        await query.contactDetails()
    });
    
})