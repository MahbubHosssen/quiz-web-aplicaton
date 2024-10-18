const questions = [
    {
        question : "Which is largest animal in the world?",
        answer: [
            {text: "SharedWorker", correct: false},
            {text: "BlueWhale", correct: true},
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

const buttonsContainer = document.querySelector(".buttons")
const questionElement = document.querySelector(".question")

let currentQuestion = 0;
let currentQuestionIndex = 0;

function startQuiz(){
    resetState()
    let currentQuestion = questions[currentQuestionIndex]
    let currentQuestionNumber = currentQuestionIndex + 1;
    questionElement.innerHTML = `${currentQuestionNumber}. ${currentQuestion.question}`;

    questions[currentQuestionIndex].answer.forEach(button => {
        const buttonElement = document.createElement("button")
        buttonElement.classList = "button"
        buttonElement.innerText = button.text;
        console.log(button)
        buttonsContainer.appendChild(buttonElement)

        if(button.correct === true){
            buttonElement.setAttribute("data-set", "true")
        }
        buttonElement.addEventListener("click", selectButton)
    });
}
const selectButton = (e) => {
    const selectBtnElement = e.target
    if(selectBtnElement.getAttribute("data-set")){
        selectBtnElement.classList.add("correct")
    }else{
        selectBtnElement.classList.add("incorrect")
    }

    console.log(buttonsContainer.children)
    // buttonsContainer.children.for(btn => {
    //     console.log(btn)
    // })
    Array.from(buttonsContainer.children).forEach(btn => {
        if(btn.getAttribute("data-set")){
            btn.classList.add("correct")
        }
        btn.disabled = true;
    })

}



function resetState(){
    if(buttonsContainer.children){
        buttonsContainer.innerHTML = "";
    }
}



startQuiz()