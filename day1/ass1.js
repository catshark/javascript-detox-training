// ne need to find grade based on mark of student
// 0 - 40, grade is D
// 40 - 60, grade is C
// 60 - 80, grade is B
// above 80, grade is A

var a = 65;

if (a < 40) {
    console.log("Grade is D")
}
else if (a >= 40 && a < 60) {
    console.log("Grade is C")
}
else if (a >= 60 && a < 80) {
    console.log("Grade is B")
}
else if (a >= 80) {
    console.log("Grade is A")
}