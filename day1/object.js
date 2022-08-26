let obj1 = {}
console.log(obj1)
obj1['name'] = 'John'
obj1['age'] = 22
console.log(obj1)

// objects can be nested also
let obj2 = {'name': 'John', 'address': {'state': 'AZ', 'country': 'US'}}
console.log(obj2.name)
console.log(obj2.address.country)

let obj3 = {'name': 'John', 'age': 20}
for (let property in obj3) {
    console.log(property)
}
console.log(obj3['name'])
console.log(obj3['gender'])