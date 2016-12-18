$(".buttonSet1").hide();
$(".buttonSet1").fadeIn();
$(".buttonSet2").hide();
$(".buttonSet3").hide();
$(".buttonSet3").fadeIn();
$(".buttonSetMain").fadeIn();
$(".question").hide();
$(".question").fadeIn();

/*List of questions*/
var forFunQuestions =	[
							"What series is Lucina originally from?",
							"Who were the last two characters added to the game?",
							"Master Balls have a higher chance of summoning which Pokemon?",
							"Is Shulk really feeling it?",
							"Who made the How to Play 101 series?",
							"Which of these has been a character since the first Smash game?",
							"What do Starmen do?",
							"How many Mario characters are in this game?",
							"Which characters still don't have amiibo?",
							"What is the official site for the game?",
							"What is Link's sword called?",
							"What console was ROB a peripheral for?"
						];
/*This variable is the container for the question currently being asked*/
var currentQuestion;
	
/*This variable contains all possible answers to questions*/
var answers = 	[
					"Fire Emblem", "The Legend of Zelda", "Xenoblade Chronicles",
					"Corrin, Bayonetta", "Cloud, Corrin", "Cloud, Bayonetta",
					"Goldeen", "Legendary Pokemon", "Regular Pokemon",
					"Yes xD", "Now it's shulk time!!!!", "Play Xenoblade, you idiot.",
					"AceStarThe3rd", "Alpharad", "Lythero",
					"Marth", "Olimar", "Kirby",
					"Shrink all players", "Slow down time", "Grant invincibility",
					"6 characters", "9 characters", "12 characters",
					"Mii Fighters, Ganondorf, Dark Pit", "Doctor Mario, Roy, Sonic", " Cloud, Corrin, Bayonetta",
					"smashbros.com", "smash.gg", "kuroganehammer.com",
					"Monado", "Ragnell", "Master Sword",
					"NES", "SNES", "N64"
					]
/*Declaring variables for the choices*/				
var choice1;
var choice2;
var choice3;
	
	
/*Determines the question that will be asked*/
var currentQuestion = forFunQuestions[Math.floor((Math.random() * forFunQuestions.length) + 0)];
	
	
/* "What series is Lucina originally from?" */
if(currentQuestion == forFunQuestions[0]){
	var choice1 = answers[0];
	var choice2 = answers[1];
	var choice3 = answers[2];
		
	document.getElementById("ansChecker").innerHTML=currentQuestion;
	document.getElementById("option1").innerHTML=choice1;
	document.getElementById("option2").innerHTML=choice2;
	document.getElementById("option3").innerHTML=choice3;
		
	function ansButton1(){
		document.getElementById("ansChecker").innerHTML = "Correct!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "Lucina is from Fire Emblem!";
		$(".buttonSet2").fadeIn();
	}
	function ansButton2(){
		document.getElementById("ansChecker").innerHTML = "Incorrect!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "Lucina is from Fire Emblem!";
		$(".buttonSet2").fadeIn();
	}
	function ansButton3(){
		document.getElementById("ansChecker").innerHTML = "Incorrect!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "Lucina is from Fire Emblem!";
		$(".buttonSet2").fadeIn();
	}
		
		
}
/*"Who were the last two characters added to the game?"*/
else if(currentQuestion == forFunQuestions[1]){
	var choice1 = answers[3];
	var choice2 = answers[4];
	var choice3 = answers[5];
		
	document.getElementById("ansChecker").innerHTML=currentQuestion;
	document.getElementById("option1").innerHTML=choice1;
	document.getElementById("option2").innerHTML=choice2;
	document.getElementById("option3").innerHTML=choice3;
		
	function ansButton1(){
		document.getElementById("ansChecker").innerHTML = "Correct!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "Corrin and Bayonetta were the last two!";
		$(".buttonSet2").fadeIn();
	}
	function ansButton2(){
		document.getElementById("ansChecker").innerHTML = "Incorrect!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "Corrin and Bayonetta were the last two!";
		$(".buttonSet2").fadeIn();
	}
	function ansButton3(){
		document.getElementById("ansChecker").innerHTML = "Incorrect!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "Corrin and Bayonetta were the last two!";
		$(".buttonSet2").fadeIn();
	}
}
/*"Master Balls have a higher chance of summoning which Pokemon?"*/
else if(currentQuestion == forFunQuestions[2]){
	var choice1 = answers[6];
	var choice2 = answers[7];
	var choice3 = answers[8];
		
	document.getElementById("ansChecker").innerHTML=currentQuestion;
	document.getElementById("option1").innerHTML=choice1;
	document.getElementById("option2").innerHTML=choice2;
	document.getElementById("option3").innerHTML=choice3;
		
	function ansButton1(){
		document.getElementById("ansChecker").innerHTML = "Incorrect!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "Master Balls summon Legendary Pokemon more!";
		$(".buttonSet2").fadeIn();
			
	}
	function ansButton2(){
		document.getElementById("ansChecker").innerHTML = "Correct!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "Master Balls summon Legendary Pokemon more!";
		$(".buttonSet2").fadeIn();
	}
	function ansButton3(){
		document.getElementById("ansChecker").innerHTML = "Incorrect!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "Master Balls summon Legendary Pokemon more!";
		$(".buttonSet2").fadeIn();
	}
}
/*"Is Shulk really feeling it?"*/
else if(currentQuestion == forFunQuestions[3]){
	var choice1 = answers[9];
	var choice2 = answers[10];
	var choice3 = answers[11];
		
	document.getElementById("ansChecker").innerHTML=currentQuestion;
	document.getElementById("option1").innerHTML=choice1;
	document.getElementById("option2").innerHTML=choice2;
	document.getElementById("option3").innerHTML=choice3;
		
	function ansButton1(){
		document.getElementById("ansChecker").innerHTML = "Incorrect!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "You disgust me.";
		$(".buttonSet2").fadeIn();
			
	}
	function ansButton2(){
		document.getElementById("ansChecker").innerHTML = "Incorrect!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "You disgust me.";
		$(".buttonSet2").fadeIn();
	}
	function ansButton3(){
		document.getElementById("ansChecker").innerHTML = "Correct!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "Good man.";
		$(".buttonSet2").fadeIn();
	}
}
/*"Who made the How to Play 101 series?"*/
else if(currentQuestion == forFunQuestions[4]){
	var choice1 = answers[12];
	var choice2 = answers[13];
	var choice3 = answers[14];
		
	document.getElementById("ansChecker").innerHTML=currentQuestion;
	document.getElementById("option1").innerHTML=choice1;
	document.getElementById("option2").innerHTML=choice2;
	document.getElementById("option3").innerHTML=choice3;
		
	function ansButton1(){
		document.getElementById("ansChecker").innerHTML = "Incorrect!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "Alpharad made this video series!";
		$(".buttonSet2").fadeIn();
			
	}
	function ansButton2(){
		document.getElementById("ansChecker").innerHTML = "Correct!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "Alpharad made this video series!";
		$(".buttonSet2").fadeIn();
	}
	function ansButton3(){
		document.getElementById("ansChecker").innerHTML = "Incorrect!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "Alpharad made this video series!";
		$(".buttonSet2").fadeIn();
	}
}
/*"Which of these has been a character since the first Smash game?"*/
else if(currentQuestion == forFunQuestions[5]){
	var choice1 = answers[15];
	var choice2 = answers[16];
	var choice3 = answers[17];
		
	document.getElementById("ansChecker").innerHTML=currentQuestion;
	document.getElementById("option1").innerHTML=choice1;
	document.getElementById("option2").innerHTML=choice2;
	document.getElementById("option3").innerHTML=choice3;
		
	function ansButton1(){
		document.getElementById("ansChecker").innerHTML = "Incorrect!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "Kirby has been playable since Super Smash Bros. 64!";
		$(".buttonSet2").fadeIn();
			
	}
	function ansButton2(){
		document.getElementById("ansChecker").innerHTML = "Incorrect!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "Kirby has been playable since Super Smash Bros. 64!";
		$(".buttonSet2").fadeIn();
	}
	function ansButton3(){
		document.getElementById("ansChecker").innerHTML = "Correct!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "Kirby has been playable since Super Smash Bros. 64!";
		$(".buttonSet2").fadeIn();
	}
}
/*"What do Starmen do?"*/
else if(currentQuestion == forFunQuestions[6]){
	var choice1 = answers[18];
	var choice2 = answers[19];
	var choice3 = answers[20];
		
	document.getElementById("ansChecker").innerHTML=currentQuestion;
	document.getElementById("option1").innerHTML=choice1;
	document.getElementById("option2").innerHTML=choice2;
	document.getElementById("option3").innerHTML=choice3;
		
	function ansButton1(){
		document.getElementById("ansChecker").innerHTML = "Incorrect!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "Starmen grant invincibility to the ones who pick them up!";
		$(".buttonSet2").fadeIn();
			
	}
	function ansButton2(){
		document.getElementById("ansChecker").innerHTML = "Incorrect!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "Starmen grant invincibility to the ones who pick them up!";
		$(".buttonSet2").fadeIn();
	}
	function ansButton3(){
		document.getElementById("ansChecker").innerHTML = "Correct!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "Starmen grant invincibility to the ones who pick them up!";
		$(".buttonSet2").fadeIn();
	}
}
/*"How many Mario characters are in this game?"*/
else if(currentQuestion == forFunQuestions[7]){
	var choice1 = answers[21];
	var choice2 = answers[22];
	var choice3 = answers[23];
		
	document.getElementById("ansChecker").innerHTML=currentQuestion;
	document.getElementById("option1").innerHTML=choice1;
	document.getElementById("option2").innerHTML=choice2;
	document.getElementById("option3").innerHTML=choice3;
		
	function ansButton1(){
		document.getElementById("ansChecker").innerHTML = "Incorrect!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "There are 9 characters from the Mario series!";
		$(".buttonSet2").fadeIn();
			
	}
	function ansButton2(){
		document.getElementById("ansChecker").innerHTML = "Correct!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "There are 9 characters from the Mario series!";
		$(".buttonSet2").fadeIn();
	}
	function ansButton3(){
		document.getElementById("ansChecker").innerHTML = "Incorrect!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "There are 9 characters from the Mario series!";
		$(".buttonSet2").fadeIn();
	}
}
/*"Which characters still don't have an amiibo?"*/
else if(currentQuestion == forFunQuestions[8]){
	var choice1 = answers[24];
	var choice2 = answers[25];
	var choice3 = answers[26];
		
	document.getElementById("ansChecker").innerHTML=currentQuestion;
	document.getElementById("option1").innerHTML=choice1;
	document.getElementById("option2").innerHTML=choice2;
	document.getElementById("option3").innerHTML=choice3;
		
	function ansButton1(){
		document.getElementById("ansChecker").innerHTML = "Incorrect!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "Cloud, Corrin, and Bayonetta still don't have amiibo!";
		$(".buttonSet2").fadeIn();
			
	}
	function ansButton2(){
		document.getElementById("ansChecker").innerHTML = "Incorrect!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "Cloud, Corrin, and Bayonetta still don't have amiibo!";
		$(".buttonSet2").fadeIn();
	}
	function ansButton3(){
		document.getElementById("ansChecker").innerHTML = "Correct!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "Cloud, Corrin, and Bayonetta still don't have amiibo!";
		$(".buttonSet2").fadeIn();
	}
}
/*"What is the official site for this game?"*/
else if(currentQuestion == forFunQuestions[9]){
	var choice1 = answers[27];
	var choice2 = answers[28];
	var choice3 = answers[29];
		
	document.getElementById("ansChecker").innerHTML=currentQuestion;
	document.getElementById("option1").innerHTML=choice1;
	document.getElementById("option2").innerHTML=choice2;
	document.getElementById("option3").innerHTML=choice3;
		
	function ansButton1(){
		document.getElementById("ansChecker").innerHTML = "Correct!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "smashbros.com is the official Smash Bros. site!";
		$(".buttonSet2").fadeIn();
			
	}
	function ansButton2(){
		document.getElementById("ansChecker").innerHTML = "Incorrect!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "smashbros.com is the official Smash Bros. site!";
		$(".buttonSet2").fadeIn();
	}
	function ansButton3(){
		document.getElementById("ansChecker").innerHTML = "Incorrect!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "smashbros.com is the official Smash Bros. site!";
		$(".buttonSet2").fadeIn();
	}
}
/*"What is Link's sword called?"*/
else if(currentQuestion == forFunQuestions[10]){
	var choice1 = answers[30];
	var choice2 = answers[31];
	var choice3 = answers[32];
		
	document.getElementById("ansChecker").innerHTML=currentQuestion;
	document.getElementById("option1").innerHTML=choice1;
	document.getElementById("option2").innerHTML=choice2;
	document.getElementById("option3").innerHTML=choice3;
		
	function ansButton1(){
		document.getElementById("ansChecker").innerHTML = "Incorrect!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "Link's sword is the Master Sword!";
		$(".buttonSet2").fadeIn();
			
	}
	function ansButton2(){
		document.getElementById("ansChecker").innerHTML = "Incorrect!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "Link's sword is the Master Sword!";
		$(".buttonSet2").fadeIn();
	}
	function ansButton3(){
		document.getElementById("ansChecker").innerHTML = "Correct!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "Link's sword is the Master Sword!";
		$(".buttonSet2").fadeIn();
	}
}
/*"What console was ROB a peripheral for?"*/
else if(currentQuestion == forFunQuestions[11]){
	var choice1 = answers[33];
	var choice2 = answers[34];
	var choice3 = answers[35];
		
	document.getElementById("ansChecker").innerHTML=currentQuestion;
	document.getElementById("option1").innerHTML=choice1;
	document.getElementById("option2").innerHTML=choice2;
	document.getElementById("option3").innerHTML=choice3;
		
	function ansButton1(){
		document.getElementById("ansChecker").innerHTML = "Correct!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "ROB was originally a peripheral for the NES!";
		$(".buttonSet2").fadeIn();
			
	}
	function ansButton2(){
		document.getElementById("ansChecker").innerHTML = "Incorrect!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "ROB was originally a peripheral for the NES!";
		$(".buttonSet2").fadeIn();
	}
	function ansButton3(){
		document.getElementById("ansChecker").innerHTML = "Incorrect!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "ROB was originally a peripheral for the NES!";
		$(".buttonSet2").fadeIn();
	}
}
function reload(){
	location.reload();
}