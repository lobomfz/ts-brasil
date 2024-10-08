import { internal } from "./internal.js";
import { ufs, ufsArr } from "./lookup.js";
import type { UFS } from "./types.js";

export const faker = {
	cpf(): string {
		const numbers = internal.randomArr(9);

		numbers.push(internal.cpfDigit(numbers));

		numbers.push(internal.cpfDigit(numbers));

		return internal.toStr(numbers);
	},

	cnpj(): string {
		const numbers = internal.randomArr(8, 9);

		numbers.push(0, 0, 0, 1);

		numbers.push(internal.cnpjDigit(numbers, 11));

		numbers.push(internal.cnpjDigit(numbers, 12));

		return internal.toStr(numbers);
	},

	cep(uf?: UFS): string {
		if (uf) {
			return internal.cepByUf(uf);
		}

		return internal.calcCep(10000000, 99999999);
	},

	mobilePhone(uf?: UFS): string {
		const acs = uf ? ufs[uf].acs : ufs[internal.randomArrEl(ufsArr)].acs;

		const str =
			String(internal.randomArrEl(acs)) +
			"9" +
			internal.randomArrEl(internal.cellFirstDigits) +
			Math.floor(Math.random() * 10000000);

		return str;
	},
};
