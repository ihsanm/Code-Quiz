
var highscores = document.getElementById("highscores");
var clear = document.querySelector("#clear");

function displayscores(){

    var initials = localStorage.getItem("initials");
    var score = localStorage.getItem("score");

    highscore = document.createElement("li");
    highscore.textContent = "initials = " + initials + "score = " + score;
    highscores.append(highscore);
}

displayscores();

clear.addEventListener("click", function(){
    localStorage.clear("initials");
    localStorage.clear("score");

    highscores.remove(highscore);
});
