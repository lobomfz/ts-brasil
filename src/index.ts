import { faker } from "./faker.js";
import { masks } from "./masks.js";
import { validator } from "./validator.js";

export { faker as brFaker, validator as brValidator, masks as brMasks };

export const tsBrasil = {
	faker,
	validator,
	masks,
};

export default tsBrasil;
