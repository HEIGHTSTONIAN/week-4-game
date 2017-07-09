
//!--PSEUDOCODE for CrystalsCollector!
//THE PURPOSE OF THE GAME IS TO WIN OR LOSE BASED ON TOTALS DETERMINED BY ASSIGNED CRYTAL VALUES CLICKED.

//`post page with header and rules of the game for user.

//`header with title of game

//`<p>'s of rules to be displayed alone

//RANDOMLY POSTED NUMBER TO MATCH IS BETWEEN 19-120.
//`panel1 displays random number generated at the start of each game. 

//`class="crystalrow" loads pictures of crystals left to right, 

//`4 CRYSTALS EACH HAVE A HIDDEN RANDOM VALUE AT THE START OF EACH GAME. CLICKING ON A CRYSTAL WILL ADD POINTS INSIDE PANEL2
//crystal1 generates random values between 1-12, when clicked. crystal1 also passes that value to panel2 each time it's clicked. 
//crystal2 generates random values between 1-12, when clicked. crystal2 also passes that value to panel2 each time it's clicked. 
//crystal3 generates random values between 1-12, when clicked. crystal3 also passes that value to panel2 each time it's clicked. 
//crystal4 generates random values between 1-12, when clicked. crystal4 also passes that value to panel2 each time it's clicked.
//each to begin a new value once the loss++1 or win++1 is added.

//`include a <div> with <p> in a row that displays "Your score is: " that stands alone over panel2. 

//MATCH THE RANDOM NUMBER WHEN CRYSTAL PHOTOS ARE CLICKED.
//`panel2 is passed the assigned random value of each clicked crystal, whether it's "crytals1" "crystal2" "crystal3" or "crystal4" .onkeyup. 

//`panel2 is to stop taking passes from class="crystalrow" when it is => than the random number in panel1.

//`panel2 is to stop taking passes after it stops being <= random number in panel1.

//`panel2 ++1 to "w" (w) if it's == to random number in panel1, Equally, if panel2 number is == panel1, then ++1 to "Wins: (w)"

//`panel2 ++1 to "l" (l) if it's generated number is > than random number in panel1. Equally, if panel2 number is > panel 1, then ++1 to "Losses: (l)"

//`panel2 also starts over after ++1 passed "l" is made.

//`panel3 in row3 posts "You win!" if "Wins: (w)" is increased by ++1
//`panel3 in row3 posts "You lost!" if "Losses: (l)" is increased by ++1

//`panel3 also adds to each "Win: (x)" by ++1 if the number of wins is increased. 
//`panel3 also adds to each "Losses: (l)" by ++1 if the number of wins is increased.


//WHEN CRYSTAL PHOTOS ARE CLICKED

// MATCH THE RANDOM NUMBER to each crystal, then, add and display number to panel2 
//1. if number in panel2 > random number in panel1
//  ++1 to looses, show "You lost!" if "Losses: (l)" in panel3
//2. if number in panel2 = random number in panel1
//  ++1 to wins , show "You win!" if "Wins: (w)" in panel3
 //

//new notes when crystal photos are clicked panel2 is passed the assigned random value of each clicked crystal , using .on() method - this is the .on("click", function(){}); which we study in class
//because .onkeyup is triggered when we release a key in keyboard
//we only click the mouse in this game. Thu,s we use .on("click"....
//
//MATCH THE RANDOM NUMBER WHEN CRYSTAL PHOTOS ARE CLICKED.
//panel2 is passed the assigned random value of each clicked crystal, whether it's "crytals1" "crystal2" "crystal3" or "crystal4"
//1. if number in panel2 > random number in panel1
 //   ++1 to looses, show "You lost!" if "Losses: (l)" in panel3
//    reset()
//2. if number in panel2 = random number in panel1
//    ++1 to wins , show "You win!" if "Wins: (w)" in panel3
//    reset()

//

var wins = 0;
var losses = 0;
var usertotal = 0;
var crystalArray = [1,2,3,4,5,6,7,8,9,10,11,12];
crystalArray.sort(function(a, b){return 0.5 - Math.random()});
var numC1 = crystalArray [0];
var numC2 = crystalArray [1];
var numC3 = crystalArray [2];
var numC4 = crystalArray [3];

//random number first
var randomNum = 19 + Math.floor(Math.random() * 102);
$("#randomnumber").html(("Random Number:") + "<br><br>" + randomNum);

//.click function
$("#crystal1").click(function() {
  usertotal += numC1;
  console.log(usertotal);
});

$("#crystal2").click(function() {
  usertotal += numC2;
  console.log(usertotal);
});

$("#crystal3").click(function() {
  usertotal += numC3;
  console.log(usertotal);
});

$("#crystal4").click(function() {
  usertotal += numC4;
  console.log(usertotal);
});


$("#crystal1, #crystal2, #crystal3, #crystal4").click("click", function(){
	$("#usertotal").html(usertotal);
	if (usertotal === randomNum) {
		++wins;
		$("#wins").html("Wins: " + wins);
		start();
	}
	if (usertotal > randomNum) {
		++losses;
		$("#losses").html("Losses: " + losses);
		start();
	}
});


function start() {
    usertotal = 0;
    crystalArray.sort(function(a,b){return 0.5 - Math.random()});
    randomNum = 19 + Math.floor(Math.random() * 102);
    crystal1 = crystalArray[0];
    crystal2 = crystalArray[1];
    crystal3 = crystalArray[2];
    crystal4 = crystalArray[3];
    $("#randomnumber").html(("Random Number:") + "<br><br>" + randomNum);
    $("#usertotal").html(usertotal);
}

//start again
$("#start").click("click", function() {
    wins = 0;
    losses = 0;
    usertotal = 0;
    var randomNum = 19 + Math.floor(Math.random() * 102);
    $("#randomnumber").html(("Random Number:") + "<br><br>" + randomNum);
    $("#wins").html("Wins: " + wins);
    $("#losses").html("Losses: " + losses);
    $("#usertotal").html(usertotal);
    $(".panel panel2").html("Random Number:" + "<br><br>" + randomNum);
});
