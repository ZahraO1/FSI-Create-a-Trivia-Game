// Your Code Here
let username = window.prompt("What art thy name?")
let userScore = 0

for (let i = 0; i < questions.length; i++){
    let question = questions[i]
    let userAnswer = window.prompt(question.text)
    if(userAnswer == question.correctAnswer)
        userScore += 10
}
window.alert("Your score is "+userScore)