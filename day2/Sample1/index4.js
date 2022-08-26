var axios = require('axios').default
var promise = axios.get("https://jsonplaceholder.typicode.com/todos")
promise.then(data => {
    console.log("success")
    console.log(data.status)
    console.log(data.data)
    console.log(data.headers)
})
    .catch(e => {
        console.log("error occurred")
        if (e.response) {
            console.log(e.response.status)
            console.log(e.response.data)
            console.log(e.response.headers)
        } else {
            console.log("response not present")
        }
    })