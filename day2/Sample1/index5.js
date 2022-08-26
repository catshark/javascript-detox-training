let axios = require("axios").default

async function performCall() {
    let data = await axios.get("https://jsonplaceholder.typicode.com/todos")
    if (data) {
        console.log(data.data)
        console.log(data.status)
    }
}

performCall()