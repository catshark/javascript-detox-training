let a = []
console.log(a, typeof a)
console.log(Array.isArray(a))
// to check if array is array or not, make use of Array.isArray
// index of array in JS starts with 0
a.push(20)
a.push(10)
console.log(a)
console.log(a.length)
console.log(a[0], a[1])

for (let i = 0; i < a.length; i++) {
    console.log(a[i])
}
// sometimes we may want to apply a function on each element in an array
// we can do this with the help of the Map function
let b = a.map(data => data*data)
console.log(b)

let c = a.filter(data => data > 10)
console.log(c)