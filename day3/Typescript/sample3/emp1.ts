/// <reference path="stringUtils.ts" />
// by putting the above reference you can automatically get from the coreresponding ts file

class Employee {
    empCode: number;
    empName: string;
    constructor(name: string, code: number) {
        // the ToCapital method is accessed from there
        this.empName = StringUtility.ToCapital(name);
        this.empCode = code;
    }
    displayEmployee() {
        console.log ("Employee Code: " + this.empCode + ", Employee Name: " + this.empName );
    }
}

let e11: Employee = new Employee("John", 1234)
e11.displayEmployee()