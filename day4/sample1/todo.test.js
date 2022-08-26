const axios = require('axios').default
const ToDo = require('./ToDo')
jest.mock('axios')
test('Testing axios', () => {
    let data = {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    }
    let response = { data: data}
    axios.get.mockImplementation(() => {
        return Promise.resolve(response)
    })
    let todo = new ToDo()
    todo.fetchFromServer().then(res => {
        expect(res.userId).toBe(1)
    })
})    
