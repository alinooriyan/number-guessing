const ps = require('prompt-sync')
const prompt = ps()

const createQuiz = () => {
    return new Promise((resolve, reject) => {
        let number = parseInt(prompt('Enter a number to guess betweeen 1 and 10: '))
        if (number === 9) {
            resolve('Succsess')
        } else {
            reject('Try again.')
        }
    })
}

exports = createQuiz