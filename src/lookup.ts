import type { UFS } from "./types.js";

export const ufs: Record<
	UFS,
	{ cep: { min: number; max: number }; acs: number[] }
> = {
	AC: {
		cep: {
			min: 69900000,
			max: 69999999,
		},
		acs: [68],
	},
	AL: {
		cep: {
			min: 57000000,
			max: 57999999,
		},
		acs: [82],
	},
	AM: {
		cep: {
			min: 69000000,
			max: 69299999,
		},
		acs: [92, 97],
	},
	AP: {
		cep: {
			min: 68900000,
			max: 68999999,
		},
		acs: [96],
	},
	BA: {
		cep: {
			min: 40000000,
			max: 48999999,
		},
		acs: [71, 73, 74, 75, 77],
	},
	CE: {
		cep: {
			min: 60000000,
			max: 63999999,
		},
		acs: [85, 88],
	},
	DF: {
		cep: {
			min: 70000000,
			max: 73699999,
		},
		acs: [61],
	},
	ES: {
		cep: {
			min: 29000001,
			max: 29999999,
		},
		acs: [27, 28],
	},
	GO: {
		cep: {
			min: 72800000,
			max: 76799999,
		},
		acs: [62, 64],
	},
	MA: {
		cep: {
			min: 65000000,
			max: 65999999,
		},
		acs: [98, 99],
	},
	MG: {
		cep: {
			min: 30000000,
			max: 39999999,
		},
		acs: [31, 32, 33, 34, 35, 37, 38],
	},
	MS: {
		cep: {
			min: 79000000,
			max: 79999999,
		},
		acs: [67],
	},
	MT: {
		cep: {
			min: 78000000,
			max: 78899999,
		},
		acs: [65, 66],
	},
	PA: {
		cep: {
			min: 66000000,
			max: 68899999,
		},
		acs: [91, 93, 94],
	},
	PB: {
		cep: {
			min: 58000000,
			max: 58999999,
		},
		acs: [83],
	},
	PE: {
		cep: {
			min: 50000000,
			max: 56999999,
		},
		acs: [81, 87],
	},
	PI: {
		cep: {
			min: 64000000,
			max: 64999999,
		},
		acs: [86, 89],
	},
	PR: {
		cep: {
			min: 80000000,
			max: 87999999,
		},
		acs: [41, 42, 43, 44, 45, 46],
	},
	RJ: {
		cep: {
			min: 20000000,
			max: 28999999,
		},
		acs: [21, 22, 24],
	},
	RN: {
		cep: {
			min: 59000000,
			max: 59999999,
		},
		acs: [84],
	},
	RO: {
		cep: {
			min: 76800000,
			max: 76999999,
		},
		acs: [69],
	},
	RR: {
		cep: {
			min: 69300000,
			max: 69399999,
		},
		acs: [95],
	},
	RS: {
		cep: {
			min: 90000000,
			max: 99999999,
		},
		acs: [51, 53, 54, 55],
	},
	SC: {
		cep: {
			min: 88000000,
			max: 89999999,
		},
		acs: [47, 48, 49],
	},
	SE: {
		cep: {
			min: 49000000,
			max: 49999999,
		},
		acs: [79],
	},
	SP: {
		cep: {
			min: 10000000,
			max: 19999999,
		},
		acs: [11, 12, 13, 14, 15, 16, 17, 18, 19],
	},
	TO: {
		cep: {
			min: 77000000,
			max: 77999999,
		},
		acs: [63],
	},
};

export const ufsArr = Object.keys(ufs) as UFS[];
export const allAcs = new Set(Object.values(ufs).flatMap((uf) => uf.acs));
