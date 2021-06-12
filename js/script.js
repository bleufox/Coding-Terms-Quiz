//Create a quiz with four mutiple choice questions, a timer, and a high score log

//Create timer div that deducts 10 when answer is incorrect, and adds 10 when the answer is correct

//Display the first question upon start button click

//Display the answers in buttons upon click

const startButton = document.getElementById('start-btn');
const questionContainerEl = document.getElementById('question-container');
const startScreenEl = document.getElementById('start-screen');
const gameOver = document.getElementById('game-over')
const hsButton = document.getElementById('hs-btn');
const timerEl = document.getElementById('timer');
let timeLeft = 5;
let shuffledQuestions, currentQuestionIndex
const questionsEl = document.getElementById('questions');
const answerBtnsEl = document.getElementById('answer-buttons')
startButton.addEventListener('click', startQuiz);

const questions = [{
    question: "What does the acronym HTML stand for?",
    answers: [
        "Hey Too Much Layout",
        "Hypertext Markup Language",
        "Hey There Mother Lord",
        "Hang (on), There's More (to) Learn",
    ],
    correctAns: "Hypertext Markup Language",
},
{
    question: "What is Javascript?",
    answers: [
        "A script for a movie about a coffee shop",
        "A type of food",
        "A brand name",
        "An object-oriented computer programming language",
    ],
    correctAns: "An object-oriented computer programming language",
},
{
    question: "'Section', 'Article', 'Nav', and 'Footer' are examples of:",
    answers: [
        "HTML Elements",
        "Variables",
        "Properties",
        "Absolute Nonsense",
    ]
},];

const myfunc = () => setInterval(function () {
    timeLeft-= 1;
    timerEl.textContent = "Time Remaining: " + timeLeft;
    if (timeLeft <= 0) {
        clearInterval(myfunc);
        document.getElementById('timer').innerHTML = ""
    }
    timeIsUp();
    
}, 1000);

function startQuiz() {
    console.log("Started")
    startButton.classList.add('hide')
    hsButton.classList.add('hide')
    startScreenEl.classList.add('hide')
    timerEl.classList.remove('hide')
    myfunc()
    questionContainerEl.classList.remove('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    setNextQuestion()
}

function setNextQuestion() {
    questionsEl.textContent = questions[0].question

}

function showQuestion() {
        gameOver.classList.remove('hide')
        questionContainerEl.classList.add('hide')
}

function timeIsUp () {
    if (timeLeft == 0) {
        gameOver.classList.remove('hide')
        questionContainerEl.classList.add('hide')
    }
}

// function selectAnswer() {
//     if
// }


// to render high scores
// get local storage and put it in a array
// push the new high score into that array
// set the new array into local storage


