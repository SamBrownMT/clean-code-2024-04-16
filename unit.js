const {Quantity} = require("./quantity");

class Unit{
    constructor(ratioToRelativeUnit = 1, relativeUnit, offsetToRelativeUnit = 0){
        if (relativeUnit) {
            this._baseUnit = relativeUnit._baseUnit;
            this._ratioToBaseUnit = ratioToRelativeUnit * relativeUnit._ratioToBaseUnit;
            this._offsetToBaseUnit = offsetToRelativeUnit + relativeUnit._offsetToBaseUnit;
        } else {
            this._baseUnit = this;
            this._ratioToBaseUnit = ratioToRelativeUnit;
            this._offsetToBaseUnit = offsetToRelativeUnit; 
        }
    }

    s(amount){
        return new Quantity(amount, this);
    }

    amountInThisUnit(otherAmount, otherUnit){
        if (!this.isCompatibleWith(otherUnit)){
            throw new TypeError("Incompatible Units");
        }
        console.log(otherAmount);
        console.log(otherUnit._ratioToBaseUnit);
        console.log(this._ratioToBaseUnit);
        console.log(otherUnit._offsetToBaseUnit);
        return ((otherAmount - otherUnit._offsetToBaseUnit) * otherUnit._ratioToBaseUnit / this._ratioToBaseUnit) + this._offsetToBaseUnit;
    }

    isCompatibleWith(other){
        return this._baseUnit === other._baseUnit;
    }
}

module.exports = {Unit}