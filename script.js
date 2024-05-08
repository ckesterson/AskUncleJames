$(document).ready(function(){

var uncleJames = {};
uncleJames.listOfAnswers = ["I am cautiously optimistic", "You can rest easy", "I would not be surprised", "I cannot predict", "I don't think so"];

uncleJames.getAnswer = function(question)
{

var randomNumber = Math.random();
var randomAnswer = Math.floor(randomNumber * this.listOfAnswers.length);
var answer = this.listOfAnswers[randomAnswer];	
 
$("#answer").text( answer);
$("#answer").fadeIn(4000);
 
console.log(question);
console.log(answer);
};

$("#answer").hide();

var onClick = function() {
    $("#answer").hide();
    
var question = prompt("ASK A YES/NO QUESTION!");
uncleJames.getAnswer(question);
};

$("#questionButton").click( onClick);
});