const ps = require("prompt-sync");
const prompt = ps();

const createQuiz = () => {
    return new Promise((resolve, reject) => {
        let a = parseInt(prompt("Enter a number to guess Between 1 and 10: "));
        if (a === 5) {
            resolve("Success.");
        } else {
            reject("Try Again.");
        }
    });
};

module.exports = createQuiz;
