const {Unit} = require("./unit");

describe ('Units', () => {
    test('Units with a different baseUnit are not compatible', () => {
        expect(new Unit().isCompatibleWith(new Unit())).toBe(false);
        const baseUnit1 = new Unit();
        expect(baseUnit1.isCompatibleWith(baseUnit1)).toBe(true);
        const subUnit1 = new Unit(5, baseUnit1);
        expect(baseUnit1.isCompatibleWith(subUnit1)).toBe(true);
        expect(subUnit1.isCompatibleWith(baseUnit1)).toBe(true);
        expect(subUnit1.isCompatibleWith(new Unit())).toBe(false);
        expect(new Unit().isCompatibleWith(subUnit1)).toBe(false);
    })

    test('can convert an amount to another unit amount', () => {
        const baseUnit1 = new Unit();
        expect(baseUnit1.amountInThisUnit(2, baseUnit1)).toBe(2);
        const subUnit1 = new Unit(5, baseUnit1);
        expect(baseUnit1.amountInThisUnit(1, subUnit1)).toBe(5);
        expect(baseUnit1.amountInThisUnit(3, subUnit1)).toBe(15);
        expect(subUnit1.amountInThisUnit(15, baseUnit1)).toBe(3);
        const subUnit2 = new Unit(3, subUnit1);
        expect(baseUnit1.amountInThisUnit(1, subUnit2)).toBe(15);
        expect(subUnit2.amountInThisUnit(15, baseUnit1)).toBe(1);
        expect(subUnit2.amountInThisUnit(3, subUnit1)).toBe(1);
        expect(subUnit1.amountInThisUnit(1, subUnit2)).toBe(3);
        expect(subUnit2.amountInThisUnit(15, subUnit1)).toBe(5);
        expect(subUnit1.amountInThisUnit(5, subUnit2)).toBe(15);
    });

    test('can not convert amounts between incompatible units', () => {
        const baseUnit1 = new Unit();
        const baseUnit2 = new Unit();
        expect(() => {
            baseUnit1.amountInThisUnit(2, baseUnit2)
        }).toThrow(new TypeError("Incompatible Units"));
    });
});