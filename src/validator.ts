import { internal } from "./internal.js";
import { allAcs } from "./lookup.js";

export const validator = {
	cpf(cpf: string): boolean {
		const arr = internal.extractDigits(cpf, 11, true);

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
		const arr = internal.extractDigits(cnpj, 14, true);

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
		const arr = internal.extractDigits(cep, 8);

		if (arr.length !== 8) return false;

		return true;
	},

	// em ordem de custo
	mobilePhone(phone: string): boolean {
		const arr = internal.extractDigits(phone, 11, true);

		if (arr.length !== 11) return false;

		if (arr[2] !== 9) return false;

		if (!internal.cellFirstDigitsSet.has(arr[3]!)) return false;

		if (!allAcs.has(Number(`${arr[0]}${arr[1]}`))) return false;

		return true;
	},
};
