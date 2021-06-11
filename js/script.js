const startButton = document.getElementById('start-btn');
const questionContainerEl = document.getElementById('question-container');
const startScreenEl = document.getElementById('start-screen');
const hsButton = document.getElementById('hs-btn');
const timerEl = document.getElementById('timer');
let shuffledQuestions, currentQuestionIndex
const questionsEl = document.getElementById('question');
const answerBtnsEl = document.getElementById('answer-buttons')
startButton.addEventListener('click', startQuiz);

const questions = [{

    question: "What does the acronym HTML stand for?",
    answers: [
        { text: "Hey Too Much Layout", correct: false },
        { text: "Hypertext Markup Language", correct: true },
        { text: "Hey There Mother Lord", correct: false },
        { text: "Hang (on), There's More (to) Learn", correct: false }
    ]
},

{
    question: "What is Javascript?",
    answers: [
        { text: "A script for a movie about a coffee shop", correct: false },
        { text: "A type of food", correct: false },
        { text: "A brand name", correct: false },
        { text: "An object-oriented computer programming language", correct: true },
    ]
},
{
    question: "'Section', 'Article', 'Nav', and 'Footer' are examples of:",
    answers: [
        { text: "HTML Elements", correct: true },
        { text: "Variables", correct: false },
        { text: "Properties", correct: false },
        { text: "Absolute Nonsense", correct: false }
    ]
}],

function startQuiz() {
    console.log("Started")
    startButton.classList.add('hide')
    hsButton.classList.add('hide')
    startScreenEl.classList.add('hide')
    timerEl.classList.remove('hide')
    questionContainerEl.classList.remove('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    setNextQuestion()
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(questions) {
    questionContainerEl.innerText = question.question
}

function selectAnswer() {

}


// to render high scores
// get local storage and put it in a array
// push the new high score into that array
// set the new array into local storage

// function countDown() {
//     timeLeft--;
//     document.getElementById("clock").textContent = timeLeft;

//     if (timeLeft <= 0) {

//     }
// }
