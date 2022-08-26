type commonDetails = {name:string, age:number}
type email = {email: string}
type emailDetails = commonDetails & email
let e1: emailDetails = {name: 'John', age: 40, email:"myemail@domain.com"}

interface userWithEmail extends commonDetails {
    email:string
}

console.log(e1)