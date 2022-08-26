// arrow functions: provide a simple way of writing functions
// arrow functions makes it easier to use a function within another function
// few rules
// 1) if there is no parameter within a given function, then we have to pass empty round bracket
// 2) if there is a single parmater, then no need of a round brackets
// 3) If there is more than one parameter, then round brackets are required
// general syntax - 
// variable = parameter => {body}
// 4) if there is only a single statement in the body then no need for curly brackets and no need for return statement

// arrow functions are auto bindable

var hello = ()=> console.log("hello")
hello()

var square = n => n * n
console.log(square(4))

var sum = (a,b) => a + b
console.log(sum(40,50))

var sample = () => {
    console.log("hello")
    console.log("hello again")
}

sample()

// this will be used more for react purposes
