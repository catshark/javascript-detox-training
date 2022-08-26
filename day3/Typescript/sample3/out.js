var StringUtility;
(function (StringUtility) {
    function ToCapital(str) {
        return str.toUpperCase();
    }
    StringUtility.ToCapital = ToCapital;
    function SubString(str, from, length) {
        if (length === void 0) { length = 0; }
        return str.substr(from, length);
    }
    StringUtility.SubString = SubString;
})(StringUtility || (StringUtility = {}));
/// <reference path="stringUtils.ts" />
// by putting the above reference you can automatically get from the coreresponding ts file
var Employee = /** @class */ (function () {
    function Employee(name, code) {
        // the ToCapital method is accessed from there
        this.empName = StringUtility.ToCapital(name);
        this.empCode = code;
    }
    Employee.prototype.displayEmployee = function () {
        console.log("Employee Code: " + this.empCode + ", Employee Name: " + this.empName);
    };
    return Employee;
}());
var e11 = new Employee("John", 1234);
e11.displayEmployee();
