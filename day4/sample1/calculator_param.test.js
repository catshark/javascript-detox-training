var CALCULATOR = require('./calculator')

describe("parameter calculator test", () => {
    test.each([[2,1,3],[5,2,7]])(
        'sum of %i and %i is %i', (ip1, ip2, op) => {
            expect(CALCULATOR.sum(ip1,ip2)).toBe(op)
        }
    )
    test.each([[2,1,2],[6,2,3]])(
        'division of %i and %i is %i', (ip1, ip2, op) => {
            expect(CALCULATOR.div(ip1,ip2)).toBe(op)
        }
    )
})