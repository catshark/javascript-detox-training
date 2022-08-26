var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Human = /** @class */ (function () {
    function Human(age) {
        this.age = age;
    }
    return Human;
}());
/// <reference path="stringUtils.ts" />
// by putting the above reference you can automatically get from the coreresponding ts file
/// <reference path="person.ts" />
var Employee1 = /** @class */ (function (_super) {
    __extends(Employee1, _super);
    function Employee1(age, name, code) {
        var _this = 
        // the ToCapital method is accessed from there
        _super.call(this, age) || this;
        _this.empName = StringUtility.ToCapital(name);
        _this.empCode = code;
        return _this;
    }
    Employee1.prototype.displayEmployee = function () {
        console.log("Employee Code: " + this.empCode + ", Employee Name: " + this.empName + ", Employee age: " + this.age);
    };
    return Employee1;
}(Human));
var e12 = new Employee1(26, "John", 1234);
e12.displayEmployee();
