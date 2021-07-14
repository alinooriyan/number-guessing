const createQuiz = require('./quizFile')

const guess = createQuiz()

guess.then((message) => {
    console.log('Correct the number was 9 ' + message)
}).catch(message => {
    console.log('You failed please ' + message)
})