import { expect, test } from "bun:test";
import { fakerBr } from "./faker.js";

// TODO: validação
test("cpf", () => {
	const cpf = fakerBr.cpf();

	expect(cpf).toBeTruthy();
});

test("cnpj", () => {
	const cnpj = fakerBr.cnpj();

	expect(cnpj).toBeTruthy();
});
