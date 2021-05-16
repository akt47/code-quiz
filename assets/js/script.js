
//startQuiz selected

var displayTime = document.querySelector("#displayTimer");
var runTime = document.querySelector("#runTimer");
var quizDiv = document.querySelector("#quizDiv");

// Array and objects for Quiz questions
var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },

];

// set variables
// question deck 
var questionDeck= 0;
// starting score 
var score = 0;
//remove time if answer incorrect
var timePenalty = 10;
//initial timer
var timer = 100;
var timeRemain = 0;
//answer selection
var choicesListEl = document.querySelector("#answerSelect");
//wrong or correct display
var choiceResultEl = document.querySelector("#resultDisplay");
//holds time intervals
var timeKeeper;

//Show first question

function quizSet() {
    //restarts data
    document.getElementById("quizDiv").innerHTML="";
    choicesListEl.innerHTML = "";
}

document.getElementById("runTimer").addEventListener("click", function () {
    timeKeeper = setInterval(function () {
        document.getElementById("displayTimer").innerHTML = "Time:" + timer;
        timer--;

        if (timer === 0) {
            document.getElementById("displayTimer").innerHTML = "No More Time!";
            clearInterval(timeKeeper);
            setTimeout(quizFinished, 1000);
        }

    }, 1000);
    quizSet(questionDeck);
});
