import { internal } from "./internal.js";

export const validator = {
	cpf(cpf: string): boolean {
		const arr = internal.extractDigits(cpf);

		if (arr.length !== 11) return false;

		const newArr: number[] = [arr[0]!];

		let match = 1;

		for (let i = 1; i < arr.length; i++) {
			newArr.push(arr[i]!);

			if (newArr[i] === newArr[i - 1]) {
				match++;
			}

			if (i === 8 || i === 9) {
				const digit = internal.cpfDigit(newArr);

				if (digit !== arr[i + 1]) {
					return false;
				}
			}
		}

		if (match === cpf.length) {
			return false;
		}

		return true;
	},

	cnpj(cnpj: string): boolean {
		const arr = internal.extractDigits(cnpj);

		if (arr.length !== 14) return false;

		const lastDigit = arr.pop()!;

		let supposedToBe = internal.cnpjDigit(arr, 12);

		if (lastDigit !== supposedToBe) {
			return false;
		}

		const otherDigit = arr.pop()!;

		supposedToBe = internal.cnpjDigit(arr, 11);

		if (otherDigit !== supposedToBe) {
			return false;
		}

		return true;
	},

	cep(cep: string): boolean {
		const arr = internal.extractDigits(cep);

		if (arr.length !== 8) return false;

		return true;
	},
};
