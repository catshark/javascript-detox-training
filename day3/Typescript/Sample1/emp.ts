export class Emp {
    name: string
    age: number
    salary: number
    designation: string | undefined // Union type in typescript means a variable can have either type 1, type 2, ...

    constructor(name:string, age:number, salary:number, designation?: string) {
            this.name = name
            this.age = age
            this.salary = salary
            this.designation = designation
    }
    // within class we con't use keyword 
    display() {
        console.log(`name:${this.name} age:${this.age}, salary:${this.salary}`)
    }
}