// variables for right and wrong sfx
var sfxright = new Audio("assets/sfx/correct.wav");
var sfxwrong = new Audio("assets/sfx/incorrect.wav");

var startquizEL = document.getElementById("start-screen");
var startbutton = document.querySelector("#start");
var questionsEL = document.getElementById("questions");
var choicesEL = document.getElementById("choices");
var endscreen = document.getElementById("end-screen");
var initials = document.getElementById("initials")
var submit = document.getElementById("submit");
var questionIndex = 1;
var timeleft = 130;


startbutton.addEventListener("click", function(){
    startquizEL.classList.remove("start");
    startquizEL.classList.add("hide");
    questionsEL.classList.remove("hide");
    questionsEL.classList.add("start");
    startquizEL.style.display("none")
});



