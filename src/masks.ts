import { internal } from "./internal.js";

export const masks = {
	cpf(cpf: string): string {
		const digits = internal.extractDigits(cpf, 11);

		let str = "";

		for (let i = 0; i < digits.length; i++) {
			if (i === 3 || i === 6) {
				str += ".";
			}

			if (i === 9) {
				str += "-";
			}

			str += digits[i];
		}

		return str;
	},

	cnpj(cnpj: string): string {
		const digits = internal.extractDigits(cnpj, 14);

		let str = "";

		for (let i = 0; i < digits.length; i++) {
			if (i === 3 || i === 6) {
				str += ".";
			}

			if (i === 9) {
				str += "/";
			}

			if (i === 12) {
				str += "-";
			}

			str += digits[i];
		}

		return str;
	},

	cep(cep: string): string {
		const digits = internal.extractDigits(cep, 8);

		let str = "";

		for (let i = 0; i < digits.length; i++) {
			if (i === 5) {
				str += "-";
			}

			str += digits[i];
		}

		return str;
	},
};
