/// <reference path="stringUtils.ts" />
// by putting the above reference you can automatically get from the coreresponding ts file
/// <reference path="person.ts" />

class Employee1 extends Human {
    empCode: number;
    empName: string;
    constructor(age: number, name: string, code: number) {
        // the ToCapital method is accessed from there
        super(age)
        this.empName = StringUtility.ToCapital(name);
        this.empCode = code;
    }
    displayEmployee() {
        console.log ("Employee Code: " + this.empCode + ", Employee Name: " + this.empName + ", Employee age: " + this.age);
    }
}

let e12: Employee1 = new Employee1(26, "John", 1234)
e12.displayEmployee()