interface SampleAddress {
    street:number, city:string
}

interface SampleUser {
    name:string, age:number, address:address
}

let a2: SampleAddress = {street:222,city:"Dublin"}
let u1a: SampleUser = {name: "John", age: 30, address: a2}
let u2a: user = {name:"Ben", age:40, address: a2}
console.log(u1a)
console.log(u2a)