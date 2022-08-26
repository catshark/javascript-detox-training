interface Human {
    name: string,
    age: number
}

interface Worker extends Human {
    designation: string
}

interface Manager extends Worker {
    bonus: number
}