const questions = [{

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

const score= 0;


const startButton = document.getElementById('start-btn');
const questionContainerEl = document.getElementById('question-container')
startButton.addEventListener('click', startGame);

function startGame() {
    console.log("Started")
    startButton.classList.add('hide')
    questionContainerEl.classList.remove('hide')
}

function nextQuestion(){

}

function selectAnswer(){

}