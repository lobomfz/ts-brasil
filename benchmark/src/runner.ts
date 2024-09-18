import {
	formatCEP,
	formatCNPJ,
	formatCPF,
	generateCNPJ,
	generateCPF,
	isValidCEP,
	isValidCNPJ,
	isValidCPF,
} from "@brazilian-utils/brazilian-utils";
import { fakerBr as js_brasil_faker } from "@js-brasil/fakerbr";
import tamnil_faker from "faker-br";
import rhaymisonbetini from "faker-brasil";
import { baseline, bench, group, run } from "mitata";
import tsBrasil from "../../src/index.js";
import { render } from "./render.js";

const rhaymisonbetini_faker = new rhaymisonbetini();

group("Gerar CEP", () => {
	baseline("lobomfz/ts-brasil", () => {
		tsBrasil.faker.cep();
	});

	bench("rhaymisonbetini/faker-brasil", () => {
		rhaymisonbetini_faker.randomCep();
	});

	bench("js-brasil/fakerbr", () => {
		js_brasil_faker.cep();
	});
});

group("Gerar CPF", () => {
	baseline("lobomfz/ts-brasil", () => {
		tsBrasil.faker.cpf();
	});

	bench("rhaymisonbetini/faker-brasil", () => {
		rhaymisonbetini_faker.cpf();
	});

	bench("tamnil/Faker-br", () => {
		tamnil_faker.br.cpf();
	});

	bench("js-brasil/fakerbr", () => {
		js_brasil_faker.cpf();
	});

	bench("brazilian-utils", () => {
		generateCPF();
	});
});

group("Gerar CNPJ", () => {
	baseline("lobomfz/ts-brasil", () => {
		tsBrasil.faker.cnpj();
	});

	bench("rhaymisonbetini/faker-brasil", () => {
		rhaymisonbetini_faker.cnpj();
	});

	bench("tamnil/Faker-br", () => {
		tamnil_faker.br.cnpj();
	});

	bench("js-brasil/fakerbr", () => {
		js_brasil_faker.cnpj();
	});

	bench("brazilian-utils", () => {
		generateCNPJ();
	});
});

group("Gerar, validar e formatar CPF", () => {
	baseline("lobomfz/ts-brasil", () => {
		const cpf = tsBrasil.faker.cpf();

		tsBrasil.validator.cpf(cpf);

		tsBrasil.masks.cpf(cpf);
	});

	bench("brazilian-utils", () => {
		const cpf = generateCPF();

		isValidCPF(cpf);

		formatCPF(cpf);
	});
});

group("Gerar, validar e formatar CNPJ", () => {
	baseline("lobomfz/ts-brasil", () => {
		const cnpj = tsBrasil.faker.cnpj();

		tsBrasil.validator.cnpj(cnpj);

		tsBrasil.masks.cnpj(cnpj);
	});

	bench("brazilian-utils", () => {
		const cnpj = generateCNPJ();

		isValidCNPJ(cnpj);

		formatCNPJ(cnpj);
	});
});

const cep = tsBrasil.faker.cep();

group("Validar e formatar CEP", () => {
	baseline("lobomfz/ts-brasil", () => {
		tsBrasil.validator.cep(cep);

		tsBrasil.masks.cep(cep);
	});

	bench("brazilian-utils", () => {
		isValidCEP(cep);

		formatCEP(cep);
	});
});

const res = await run({
	json: true,
	silent: true,
});

await Bun.write("results.md", render(res));
