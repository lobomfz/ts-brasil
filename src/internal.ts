import { cepLookup } from "./lookup/cep.js";
import type { UFS } from "./types.js";

const cnpjWeight = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5, 6];

export const internal = {
	randomArr(length: number, n = 10): number[] {
		const arr = Array(length);

		for (let i = 0; i < length; i++) {
			arr[i] = Math.floor(Math.random() * n);
		}

		return arr;
	},

	cpfDigit(numbers: number[]): number {
		let digit = 0;

		const arraySize = numbers.length + 1;

		for (let idx = 0; idx < numbers.length; idx++) {
			digit += numbers[idx]! * (arraySize - idx);
		}

		digit = digit % 11;

		if (digit < 2) {
			return 0;
		}

		return 11 - digit;
	},

	cnpjDigit(numbers: number[], index: 11 | 12) {
		let temp = 0;

		for (let i = 0; i < numbers.length; i++) {
			temp += numbers[index - i]! * cnpjWeight[i]!;
		}

		const digit1Remainder = temp % 11;

		return digit1Remainder < 2 ? 0 : 11 - digit1Remainder;
	},

	toStr(numbers: number[]): string {
		let str = "";

		for (let i = 0; i < numbers.length; i++) {
			str += numbers[i];
		}

		return str;
	},

	calcCep(min: number, max: number): string {
		return String(Math.floor(Math.random() * (max - min) + min));
	},

	cepByUf(uf: UFS): string {
		const { min, max } = cepLookup[uf];

		return internal.calcCep(min, max);
	},

	extractDigits<T extends boolean = false>(
		input: string,
		max: number,
		number?: T,
	): T extends true ? number[] : string[] {
		const arr: any[] = [];

		const m = max ?? input.length;

		for (let i = 0; i < m; i++) {
			switch (input[i]) {
				case "0":
				case "1":
				case "2":
				case "3":
				case "4":
				case "5":
				case "6":
				case "7":
				case "8":
				case "9":
					if (number) {
						arr.push(Number(input[i]));
					} else {
						arr.push(input[i]!);
					}
					break;
				default:
					break;
			}
		}

		return arr;
	},

	cepLookup,
};
