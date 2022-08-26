var axios = require('axios').default
var promise = axios.get("https://jsonplaceholder.typicode.com/todos")
promise.then(function (data) {
    console.log(data.data)
})