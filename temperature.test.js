const {CELSIUS, FAHRENHEIT} = require("./temperature")

describe("temperature",() => {
	test("conversions", () => {
		expect(CELSIUS.s(0).equals(FAHRENHEIT.s(32))).toBe(true);
		expect(CELSIUS.s(100).equals(FAHRENHEIT.s(212))).toBe(true);
		expect(CELSIUS.s(10).equals(FAHRENHEIT.s(50))).toBe(true);
		expect(CELSIUS.s(-40).equals(FAHRENHEIT.s(-40))).toBe(true);
		expect(FAHRENHEIT.s(1).equals(CELSIUS.s(-155/9))).toBe(true);
	})
})

// -17.2222