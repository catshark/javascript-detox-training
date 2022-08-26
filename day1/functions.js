// functions are reusable units
// It makes code modular
function add(a, b) {
    console.log(a + b)
}

add(20, 30)

function square(x) {
    return x * x
}

console.log(square(4))

var sum = function (a, b) {
    console.log(a + b)
}
sum(3, 4)

var sub = function (a, b) {
    console.log(a - b)
}
sub(5, 2)

function perform(a, b, operation) {
    operation(a, b)
}

perform(100, 20, sum)
perform(100, 20, sub)