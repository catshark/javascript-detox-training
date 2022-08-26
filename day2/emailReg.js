const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
let email = "test@domain.com"
let invalidEmail = "test_test@domain.com"
console.log(re.test(email))
console.log(re.test(invalidEmail))