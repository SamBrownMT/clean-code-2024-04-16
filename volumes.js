const { Unit } = require("./unit");

const TEASPOON = new Unit();
const TABLESPOON = new Unit(3, TEASPOON);
const OUNCE = new Unit(2, TABLESPOON);
const CUP = new Unit(8, OUNCE);
const PINT = new Unit(2, CUP);
const QUART = new Unit(2, PINT);
const GALLON = new Unit(4, QUART);

module.exports = {TEASPOON, TABLESPOON, OUNCE, CUP, PINT, QUART, GALLON}
