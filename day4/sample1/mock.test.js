var app = require('./app');
var math = require("./math")

math.add = jest.fn();
math.subtract = jest.fn();

test('mocking test case', () => {
    app.doAdd(1, 2)
    expect(math.add).toHaveBeenCalledWith(1, 2) 
})