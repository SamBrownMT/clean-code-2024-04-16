const {Unit} = require("./unit")

const CELSIUS = new Unit()
const FAHRENHEIT = new Unit((5/9), CELSIUS,32)
// celsius = (fahrenheit - 32) * (5/9)
// fahrenheit = (9/5) * celsius + 32
module.exports =  { CELSIUS,FAHRENHEIT }