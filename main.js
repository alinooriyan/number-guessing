const createQuiz = require('./quizFile')

createQuiz().then((message) => console.log('Correct, the number was 9 ' + message)).catch((message) => console.log('You failed please ' + message))