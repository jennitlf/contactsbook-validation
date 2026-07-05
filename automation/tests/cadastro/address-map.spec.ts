import { test } from '@playwright/test';
import { MapFuncionality } from '../../pages/mapFunctionality';
import { NewContact } from '../../pages/newContact';

test.describe('Endereço', () => {

    test('TC-03 - Deve preencher o endereço ao mover o marcador do mapa', async ({ page }) => {
        await page.goto('http://localhost:3000');
        const mapFuncionality = new MapFuncionality(page);
        const newContact = new NewContact(page)

        await newContact.clickOnNewContact()
        await mapFuncionality.moveMarker();
        await mapFuncionality.verifyingAddressValue();
    });

});