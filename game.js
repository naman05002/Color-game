// alert("hello");
let gamePattern = [];
let userClickedPattern = [];
const buttonColours = ["red", "blue", "green", "yellow"];
var level =0;

function getRandomInt(max){
    return Math.floor(Math.random()*max);
}
function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(function (){
        $("#"+currentColor).removeClass("pressed");
    },100);
}
var x=0;

$(".btn").click(function handler(){
    if(start==0){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    // console.log(userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(x);
//     console.log(userClickedPattern);
//     console.log(gamePattern);
    x++;

    }

});
// $(document).keypress
// (
    function nextSequence(){
    x=0;
    
    userClickedPattern = [];
    level++;
    $("h1").text("Level "+level);
    var randomNumber = getRandomInt(4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    
    

}
var start=1;
$(document).keypress(function (){
    if(start==1){
        nextSequence();
        $("h1").text("Level "+level);
        start =0;
    }
    
});

function checkAnswer(currentLevel){
    // for(var i=0;i<currentLevel;i++)
    if(userClickedPattern[currentLevel]==gamePattern[currentLevel]){
        console.log("success");
    
        if(userClickedPattern.length == gamePattern.length){
            setTimeout(nextSequence,1000);
        }
    }
    else {
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function (){
            $("body").removeClass("game-over");
            
        },200);
        $("h1").text("Game Over, Press Any Key to Restart");
        start=1;
        level=0;
        gamePattern=[];
    }
}


// );
// nextSequence();
// function handler(){
//     var userChose
// }

