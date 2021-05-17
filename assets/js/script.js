
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


//Show first question

function quizSet() {
    //restarts data
    document.getElementById("quizDiv").innerHTML="";
    choicesListEl.innerHTML = "";
//first question
    var qQuestion = document.createElement("h1");
    qQuestion.setAttribute("class",'question')
    var qText = document.createTextNode(questions[questionDeck].title);
    qQuestion.appendChild(qText);
    document.getElementById("quizDiv").appendChild(qQuestion);

    //display choices
     var choices = questions[questionDeck].choices;
     var choicesLength = choices.length;

     for (var i=0; i< choices.length; i++) {
         var listChoice = document.createElement("li");
         var anChoice = document.createElement("button");
         anChoice.textContent = choices[i];
         anChoice.className = "li button";
         listChoice.appendChild(anChoice);
         choicesListEl.appendChild(listChoice);

     }
};

//check answer for correct or wrong display
function checkAnswer(event) {
    choiceResultEl.classList.add('answerCheck');
    if (event.target.matches("button")) {
         var answer = event.target.textContent;
         if (answer === questions[questionDeck].answer) {
            choiceResultEl.textContent = "Correct!";
              score++;
         } else {
            choiceResultEl.textContent = "Wrong!";
              timer-=10;
         }
    }

    setTimeout(nQuestion, 1500);

};

choicesListEl.addEventListener("click", checkAnswer);

function nQuestion () {
    questionDeck++;

     if (questionDeck >= questions.length) {
          clearInterval(timeKeeper);
          quizFinished();
     } else {
          quizSet();
     }
}


var quizFinished = function () {
    // clear page
    choiceResultEl.classList.remove('answerCheck');
    document.getElementById("quizDiv").innerHTML = "";
    choicesListEl.innerHTML = "";
    document.getElementById("resultDisplay").innerHTML = "";

    // create div for styling
    var divEl = document.createElement("div");
    divEl.setAttribute("id", "finishDiv");

    document.getElementById("quizDiv").appendChild(divEl);

    // create h1
    var h1 = document.createElement("h1");
    h1.setAttribute("id", "allDone");
    h1.textContent = "All done!";
    //displays All Done!
    document.getElementById("finishDiv").appendChild(h1);

    // display score
    var finalScore = document.createElement("p");
    finalScore.setAttribute("id", "finalScore");
    var totalScore = score + timer;
    finalScore.textContent = "Your final score is " + totalScore;
    document.getElementById("finishDiv").appendChild(finalScore);

    // inital input
    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Enter your initials: ";
    document.getElementById("finishDiv").appendChild(createLabel);

    // input
    var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "initials");
    createInput.textContent = "";

    document.getElementById("finishDiv").appendChild(createInput);

    // submit
    var createSubmit = document.createElement("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "Submit");
    createSubmit.setAttribute("class", "btn quiz-start btn-sm");
    createSubmit.textContent = "Submit";

    document.getElementById("finishDiv").appendChild(createSubmit)}


    