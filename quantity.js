const THRESHOLD = 0.0000001;

class Quantity{
    constructor(amount, unit){
        this._amount = amount;
        this._unit = unit;
    }

    equals(other){
        return this._unitsAreCompatible(other) &&
               this._amountsInBaseUnitAreEqual(other);
    }

    add(other){
        let totalAmount = this._amount + this._unit.amountInThisUnit(other._amount, other._unit)
        return new Quantity(totalAmount, this._unit);
    }

    _amountsInBaseUnitAreEqual(other) {
        return Math.abs(this._amount -
            this._unit.amountInThisUnit(other._amount, other._unit)) < THRESHOLD;
    }

    _unitsAreCompatible(other) {
        return this._unit.isCompatibleWith(other._unit);
    }
}

module.exports = {Quantity}