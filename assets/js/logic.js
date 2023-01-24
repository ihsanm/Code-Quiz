// variables for right and wrong sfx
var sfxright = new Audio("assets/sfx/correct.wav");
var sfxwrong = new Audio("assets/sfx/incorrect.wav");

var startquizEL = document.getElementById("start-screen");
var startbutton = document.querySelector("#start");
var questionsEL = document.getElementById("questions");
var choicesEL = document.getElementById("choices");
var endscreen = document.getElementById("end-screen");
var submit = document.getElementById("submit");
var timerEL = document.getElementById("time");
var finalscore = document.getElementById("final-score");
var questionIndex = 1;
var timeleft = 5;
var score = 0;


startbutton.addEventListener("click", function(){
    startquizEL.classList.remove("start");
    startquizEL.classList.add("hide");
    questionsEL.classList.remove("hide");
    questionsEL.classList.add("start");
    
    timercheck = setInterval(function(){

    timerEL.innerText = timeleft;
    timeleft--;

    if (timeleft < 0){
        timerEL = timeleft;
        questionsEL.textContent="You ran out of time!";
        gameover();
    }
}, 1000)

    
});



function showquestions(currentquestion){
    questionsEL.innerHTML="";

    questiontext = document.createElement("h2");
    choicesList = document.createElement("p");
    choiceItem1 = document.createElement("button");
    choiceItem2 = document.createElement("button");
    choiceItem3 = document.createElement("button");
    choiceItem4 = document.createElement("button");

    questiontext.textContent = currentquestion.question;
    choiceItem1.textContent = currentquestion.choice1;
    choiceItem2.textContent = currentquestion.choice2;
    choiceItem3.textContent = currentquestion.choice3;
    choiceItem4.textContent = currentquestion.choice4;

    choicesList.append(choiceItem1);
    choicesList.append(choiceItem2);
    choicesList.append(choiceItem3);
    choicesList.append(choiceItem4);
    questionsEL.append(questiontext);
    questionsEL.append(choicesList);

}
showquestions(questions[questionIndex-1])

questionsEL.addEventListener("click", function(event){
    if (questionIndex === 8){
        questionsEL.textContent = "Quiz complete";

        timerEL = timeleft;

        gameover()
    }
    else if (
        event.target.textContent !== questions[questionIndex - 1].answer
        
    ){
        timeleft = timeleft -10;
        questionIndex++;
        score--;
        sfxwrong.play();
        questionsEL.textContent = "incorrect!";
        showquestions(questions[questionIndex-1]);
    }
    else {
        questionIndex++;
        score++;
        sfxright.play();
        showquestions(questions[questionIndex-1]);

    }
})

function gameover(){
    endscreen.classList.remove("hide")
    endscreen.classList.add("start")

    finalscore.textContent = score;
    console.log(score)
}

submit.addEventListener("click", function(event){

    var initials = document.querySelector("#initials").value;


    localStorage.setItem("initials", initials)
    localStorage.setItem("score", score)

    if (initials === ""){
        alert("Please enter your initials!")
    }
})


