let pattern = /jpmc/
let insensitivePattern = /jpmc/i
console.log('this happens in jpmc'.search(pattern))
console.log('this happens in JPMC'.search(pattern))
console.log('this happens in JPMC'.search(insensitivePattern))