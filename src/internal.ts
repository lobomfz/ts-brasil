export const internal = {
	_randomArray(length: number, n = 10): number[] {
		const arr = Array(length);

		for (let i = 0; i < length; i++) {
			arr[i] = Math.floor(Math.random() * n);
		}

		return arr;
	},

	_verifierDigit(numbers: number[]): number {
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

	_toString(numbers: number[]): string {
		let str = "";

		for (let i = 0; i < numbers.length; i++) {
			str += numbers[i];
		}

		return str;
	},
};
