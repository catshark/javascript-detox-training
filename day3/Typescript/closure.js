function outer() {
    var data = "Hello from outer"
    function inner() {
        console.log('from inside', data)
    }
    inner()
}

outer()