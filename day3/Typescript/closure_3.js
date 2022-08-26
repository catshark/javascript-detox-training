var a = 10
if (a > 10) {
    let result = "greater than 10" // declared as let, can not be acessed outside of scope
}
else {
    let result = "less than 10"
}
// 'const' is also using the same scope as 'let'
console.log(result)