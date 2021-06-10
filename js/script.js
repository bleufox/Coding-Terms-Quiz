const startBtn = document.getElementById('start-button');
const startScreen = document.getElementById('start-screen');
const quizBox = document.getElementById('questions');
const timeLeft = 60;
const score = 0;
const listOfQuestions = [{

    question: "What does the acronym HTML stand for?",
    answers: ["Hey Too Much Layout", "Hypertext Markup Language", "Hey There Mother Lord", "Hang (on), There's More (to) Learn"],
    correctAns: "Hypertext Markup Language",
},
{
    question: "What is Javascript?",
    answers: ["A script for a movie about a coffee shop", "A type of food", "A brand name", "An object-oriented computer programming language"],
    correctAns: "An object-oriented computer programming language",
},
{
    question: "'Section', 'Article', 'Nav', and 'Footer' are examples of:",
    answers: ["HTML Semantic Elements", "Variables", "Properties", "Absolute Nonsense"],
    correctAns: "HTML Semantic Elements"
},
{
    question: "What is CSS used for?",
    answers: ["It is used to style a DOM", "It's not used in coding", "I have no idea", "It is strictly used for mathematical calculations"],
    correctAns: "It is used to style a DOM",
}]

function startQuiz() {
    startScreen.style.display = "none"
    quizBox.style.display = "block"
}
// to render high scores
// get local storage and put it in a array
// push the new high score into that array
// set the new array into local storage

function questions() {
    startScreen.style.display = "none"
    quizBox.style.display = "block"
}

function countDown() {
    timeLeft--;
    document.getElementById("clock").textContent = timeLeft;

    if (timeLeft <= 0) {

    }
}

startBtn.onclick = startQuiz