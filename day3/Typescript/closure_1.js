function multiply(fixed) {
    return function (varible) {
        return fixed * varible
    }
}

let a = multiply(4) // this returns a function which is stored in varible a
let result = a(10)  // inner function is called, this is known as lazy evaluation
console.log(result)
result = a(20)
console.log(result)