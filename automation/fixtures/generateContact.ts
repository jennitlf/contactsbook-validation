import { faker } from "@faker-js/faker";

export function generateContact() {
    return {
        name: faker.person.fullName(),
        type: faker.helpers.arrayElement([
            "Amigo",
            "Família",
            "Trabalho",
            "Cliente"
        ]),
        phone: faker.string.numeric(11)
    };
}