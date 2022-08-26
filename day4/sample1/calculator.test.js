const { expect } = require('expect')
var CALCULATOR = require('./calculator')

describe("testing the calculator functionality",() => {
    test("testing the sum funcitonality", () => {
        let result = CALCULATOR.sum(1,2)
        expect(result).toBe(3)
    })
    test("testing the diff function", () => {
        let result = CALCULATOR.diff(3,2)
        expect(result).toBe(1)
    })
    test("testing the product function", () => {
        let result = CALCULATOR.product(3,2)
        expect(result).toBe(6)
    })
    test("testing the div function", () => {
        let result = CALCULATOR.div(3,2)
        expect(result).toBe(1.5)
    })
    xtest("testing the sum2 funcitonality", () => {
        let result = CALCULATOR.sum(1.3,2.22)
        expect(result).toBeCloseTo(3.52, 2)
    })
})