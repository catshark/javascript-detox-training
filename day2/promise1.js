let samplePromise = new Promise(function (onSuccess, onFailure) {
    // here we will write the code which will fetch the data from server
    onSuccess()
    onFailure()
})
samplePromise.then(function (value) {
    console.log("this will be called on success")
}, function(error) {
    console.log("this weill be called on failure")
})