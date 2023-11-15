 

 const questions = [{
    question: "Which is the smallest continent in the world?",
    answers: [
        {text: "Asia", correct: false},
        {text: "Australia", correct: true},
        {text: "Arctic", correct: false},
        {text: "Africa", correct: false},
    ]
 },
 {
    question: "On which continent is the Sahara Desert located?",
    answers: [
        {text: "Asia", correct: false},
        {text: "South America", correct: false},
        {text: "Africa", correct: true},
        {text: "Europe", correct: false},
    ]
 },
 {
    question: "Which river flows through London?",
    answers: [
        {text: "Rive Seven", correct: false},
        {text: "River Trent", correct: false},
        {text: "River Thames", correct: true},
        {text: "River Great Ouse", correct: false},
    ]
 },
 {
    question: "What is the capital of Italy?",
    answers: [
        {text: "Venice", correct: false},
        {text: "Florence", correct: false},
        {text: "Rome", correct: true},
        {text: "Naples", correct: false},
    ]
 },
 {
    question: "Which is the largest animal in the world?",
    answers: [
        {text: "shark", correct: false},
        {text: "Blue whale", correct: true},
        {text: "Elephant", correct: false},
        {text: "Gireaffe", correct: false},
    ]
 },
 {
    question: "What is the southernmost capital city in the world?",
    answers: [
        {text: "Canberra", correct: false},
        {text: "Buenos Aires", correct: false},
        {text: "Jakarta", correct: false},
        {text: "Wellington", correct: true},
    ]
 },
{ question: "which is the largest desert in the world?",
    answers: [
        {text: "Kalahari", correct: false},
        {text: "Gobi", correct: false},
        {text: "Sahara", correct: false},
        {text: "Antarctica", correct: true},
    ]
 },{
    question: "Which is the largest animal in the world?",
    answers: [
        {text: "shark", correct: false},
        {text: "Blue whale", correct: true},
        {text: "Elephant", correct: false},
        {text: "Gireaffe", correct: false},
    ]
 },{
    question: "In which country is located the volcano Eyjafjallajökull which stopped air traffic for days in 2010?",
    answers: [
        {text: "Greenland", correct: false},
        {text: "Italy", correct: false},
        {text: "Indonesia", correct: false},
        {text: "Iceland", correct: true},
    ]
 
 },{
    question: "What is the smallest country in the world?",
    answers: [
        {text: "Andorra", correct: false},
        {text: "Luxembourg", correct: false},
        {text: "Belgium", correct: false},
        {text: "Vatican City", correct: true},
    ]
 },{
    question: "What is the highest mountain in Scotland?",
    answers: [
        {text: "Ben Nevis", correct: true},
        {text: "Ben Macdui", correct: false},
        {text: "Braeriach", correct: false},
        {text: "Carin Toul", correct: false},
    ]
 },{
    question: "What is the capital of ​​the United Arab Emirates?",
    answers: [
        {text: "Dubai", correct: false},
        {text: "Abu Dhabi", correct: true},
        {text: "Sharjah", correct: false},
        {text: "Ajman", correct: false},
    ]
 },{
    question: "In which US state can you find the city of Chicago?",
    answers: [
        {text: "Mississippi", correct: false},
        {text: "Missouri", correct: false},
        {text: "lllinois", correct: true},
        {text: "Arizona", correct: false},
    ]
 },{
    question: " How tall is Mount Everest?",
    answers: [
        {text: "6,849 m", correct: false},
        {text: "7,849 m", correct: false},
        {text: "8,849 m", correct: true},
        {text: "9,849 m", correct: false},
    ]
 },

];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
function startQuiz()
{
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion()
{
    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        button.addEventListener("click", selectAnswer)
        {
            if(answer.correct)
            {
                button.dataset.correct = answer.correct;
            }
             
        }
    });

}
function resetState()
{
    nextButton.style.display = "none";
    while(answerButton.firstChild)
    {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e)
{
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct == "true";

    if(isCorrect)
    {
        selectedBtn.classList.add("correct");
        score++
    }
    else 
    {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function  showScore()
{
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
}

function handleNextButton(){

    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length)
    {
        showQuestion();
    }

    else{
        showScore();
    }
}


nextButton.addEventListener("click" ,()=>{
    if(currentQuestionIndex < questions.length)
    {
        handleNextButton();
    }
    else{
        startQuiz();
    }
})

startQuiz();



 