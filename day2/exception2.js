// In  java in contrast we had to use the throws in the signature
function eligibility(age) {
    if(age < 18) {
        throw "age is less than 18"
    } else if (age > 60) {
        throw "age is greater than 60"
    }
    return "valid age"
}

try {
    eligibility(10)
} catch (e) {
    console.log(e)
}

try {
    eligibility(70)
} catch (e) {
    console.log(e)
}

try {
    let result = eligibility(45)
    console.log("result is ", result)
} catch (e) {
    console.log(e)
}