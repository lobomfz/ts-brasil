import { internal } from "./internal.js";

const cnpjWeight1 = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5];
const cnpjWeight2 = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5, 6];

export const fakerBr = {
	cpf(): string {
		const numbers = internal._randomArray(9);

		numbers.push(internal._verifierDigit(numbers));

		numbers.push(internal._verifierDigit(numbers));

		return internal._toString(numbers);
	},

	cnpj(): string {
		const numbers = internal._randomArray(8, 9);

		numbers.push(0, 0, 0, 1);

		let temp = 0;

		for (let i = 0; i < numbers.length; i++) {
			temp += numbers[11 - i]! * cnpjWeight1[i]!;
		}

		const digit1Remainder = temp % 11;

		numbers.push(digit1Remainder < 2 ? 0 : 11 - digit1Remainder);

		temp = 0;

		for (let i = 0; i < numbers.length; i++) {
			temp += numbers[12 - i]! * cnpjWeight2[i]!;
		}

		const digit2Remainder = temp % 11;

		numbers.push(digit2Remainder < 2 ? 0 : 11 - digit2Remainder);

		return internal._toString(numbers);
	},
};
