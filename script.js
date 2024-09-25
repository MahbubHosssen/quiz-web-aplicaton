const questions = [
    {
        question : "Which is largest animal in the world?",
        answer: [
            {text: "SharedWorker", correct: false},
            {text: "Bluewhale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Tiger", correct: false}
        ]
    },
    {
        question: "Which is smallest country in the world ?",
        answer: [
            {text: "Vatican city", correct: true},
            {text: "Sri-Lanka", correct: false},
            {text: "Pakistan", correct: false},
            {text: "Bhutan", correct: false}
        ]
    },
    {
        question: "Which is largest desert in the world?",
        answer: [
            {text: "Kalhari", correct: false},
            {text: "gobi", correct: false},
            {text: "sahara", correct: false},
            {text: "Antarika", correct: true}
        ]
    },
    {
        question: "Which is smallest Country in the world ?", 
        answer: [
            {text: "Asia", correct: false},
            {text: "Pakistan", correct: true},
            {text: "India", correct: false},
            {text: "Bangladesh", correct: false}
        ]
    }
]
let count = 0;
let currentQuestionIndex = 0;

const questionElement = document.querySelector(".question");
const buttonsContainer = document.querySelector(".buttons");

function currentQuestion(){
    resetState()
    count++;
    
    let currentQuestion = questions[currentQuestionIndex]
    let currentQuestionNumber = currentQuestionIndex + 1;
    questionElement.innerText = currentQuestionNumber + "." + currentQuestion.question;

    for(const answer of currentQuestion.answer){
        const button = document.createElement("button")
        button.innerText = answer.text;
        buttonsContainer.appendChild(button)
        console.log(count)
    }
}
function resetState(){
    while(buttonsContainer.firstChild){
        buttonsContainer.removeChild(buttonsContainer.firstChild)
    }
}

currentQuestion()