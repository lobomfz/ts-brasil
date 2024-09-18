import { fakerBr as js_brasil_faker } from "@js-brasil/fakerbr";
import tamnil_faker from "faker-br";
import rhaymisonbetini from "faker-brasil";
import { baseline, bench, group, run } from "mitata";
import { fakerBr } from "../../src/index.js";

const rhaymisonbetini_faker = new rhaymisonbetini();

group("cpf", () => {
	baseline("ts-brasil", () => {
		fakerBr.cpf();
	});

	bench("rhaymisonbetini's faker", () => {
		rhaymisonbetini_faker.cpf();
	});

	bench("tamnil's faker", () => {
		tamnil_faker.br.cpf();
	});

	bench("js-brasil's faker", () => {
		js_brasil_faker.cpf();
	});
});

group("cnpj", () => {
	baseline("ts-brasil", () => {
		fakerBr.cnpj();
	});

	bench("rhaymisonbetini's faker", () => {
		rhaymisonbetini_faker.cnpj();
	});

	bench("tamnil's faker", () => {
		tamnil_faker.br.cnpj();
	});

	bench("js-brasil's faker", () => {
		js_brasil_faker.cnpj();
	});
});

await run();
