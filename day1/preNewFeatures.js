function Person(name, age) {
    this.name = name
    this.age = age
    this.display = () => {
        console.log(this.name, this.age)
    }
}
Person.prototype.display2 = function() {
    console.log(this.name, this.age)
}
let b1 = new Person('John', 22)
console.log(b1)
b1.display()
b1.display2()