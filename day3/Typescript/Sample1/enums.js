"use strict";
var colors;
(function (colors) {
    colors[colors["red"] = 0] = "red";
    colors[colors["green"] = 1] = "green";
    colors[colors["yellow"] = 2] = "yellow";
})(colors || (colors = {}));
console.log(colors[0]);
console.log(colors['red']);
var colors1;
(function (colors1) {
    colors1[colors1["red"] = 100] = "red";
    colors1[colors1["green"] = 200] = "green";
    colors1[colors1["yellow"] = 300] = "yellow";
})(colors1 || (colors1 = {}));
console.log(colors1[100]);
console.log(colors1['yellow']);
