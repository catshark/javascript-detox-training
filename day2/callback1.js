function square(n) {
    console.log(n*n)
}

function cube(n) {
    console.log(n*n*n)
}

/**
 * 
 * @param {*} a is input
 * @param {*} callback call back function
 */
function perform(a, callback) {
    console.log("input passed is ", a)
    callback(a)
}

perform(20, square)
perform(20, cube)