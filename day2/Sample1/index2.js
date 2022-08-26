var axios = require('axios').default
var promise = axios.post("https://reqres.in/api/login", {
    "email": "peter@klaven"
})
promise.then(function (data) {
    console.log(data.data)
})
    .catch(function (e) {
        console.log("error occurred")
        if (e.response) {
            console.log(e.response.status)
            console.log(e.response.data)
            console.log(e.response.headers)
        } else {
            console.log("response not present")
        }
    })