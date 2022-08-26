const string = "Hello hello hello";

// performing a replacement
const result1 = string.replace(/hello/, "world");
console.log(result1); // Hello world hello

// performing global replacement
const result2 = string.replace(/hello/g, "world");
console.log(result2); // Hello world world

// performing case insentivie replacement
const result3 = string.replace(/hello/i, "world");
console.log(result3); // world hello hello

// performing global case insentivie replacement
const result4 = string.replace(/hello/gi, "world");
console.log(result4); // world world world