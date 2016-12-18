$(".container").hide();
$(".container").fadeIn();
$(".buttonSet1").hide();
$(".buttonSet1").fadeIn();
$(".buttonSet2").hide();
$(".buttonSet3").hide();
$(".buttonSet3").fadeIn();
$(".buttonSetMain").fadeIn();
$(".question").hide();
$(".question").fadeIn();

/*List of questions*/
var forGloryQuestions =	[
							"What frame does Shulk's nair come out on?",
							"What frame does Fox's utilt come out on?",
							"For which frames are Ryu's True Shoryuken invincible on?",
							"Who is currently the best character in the game according to the official tier list?",
							"In which tier does Mega Man currently reside?",
							"In which patch was Bayonetta the most heavily nerfed?",
							"On which frame does Sheik's fair come out?",
							"What is the name of the only Major that was won using Cloud?",
							"What is the name of the first prominent dthrow->uair combo that was discovered?",
							"What is the site that holds all frame-data for the game?",
							"Which character is currently considered the worst by the official tier list?",
							"What was Peach's infinite footstool->uair combo called before it was removed?"
						];
/*This variable is the container for the question currently being asked*/
var currentQuestion;
	
/*This variable contains all possible answers to questions*/
var answers = 	[
					"Frame 13", "Frame 7", "Frame 10",
					"Frame 3", "Frame 4", "Frame 5",
					"Frames 3 to 5", "Frames 1 to 6", "Frames 2 to 7",
					"Cloud", "Sheik", "Diddy Kong",
					"Mid Tier", "High Tier", "Top Tier",
					"Patch 1.1.1", "Patch 1.0.9", "Patch 1.1.6",
					"Frame 7", "Frame 5", "Frame 4",
					"Pound 2016", "CEO", "Apex",
					"Checkmate", "Monado Purge", "Hoo-Hah",
					"kuroganehammer.com", "smash.gg", "supersmashbros.com",
					"Zelda", "Ganondorf", "Jigglypuff",
					"The Umeki Rainbow", "The EOE Rainbow", "The Umeki footstool"
					]
/*Declaring variables for the choices*/				
var choice1;
var choice2;
var choice3;
	
	
/*Determines the question that will be asked*/
var currentFGQuestion = forGloryQuestions[Math.floor((Math.random() * forGloryQuestions.length) + 0)];
	
	
/* "What frame does Shulk's nair come out on?" */
if(currentFGQuestion == forGloryQuestions[0]){
	var choice1 = answers[0];
	var choice2 = answers[1];
	var choice3 = answers[2];
		
	document.getElementById("ansChecker").innerHTML=currentFGQuestion;
	document.getElementById("option1").innerHTML=choice1;
	document.getElementById("option2").innerHTML=choice2;
	document.getElementById("option3").innerHTML=choice3;
		
	function ansButton1(){
		document.getElementById("ansChecker").innerHTML = "Correct!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "Shulk's nair comes out on frame 13!";
		$(".buttonSet2").fadeIn();
	}
	function ansButton2(){
		document.getElementById("ansChecker").innerHTML = "Incorrect!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "Shulk's nair comes out on frame 13!";
		$(".buttonSet2").fadeIn();
	}
	function ansButton3(){
		document.getElementById("ansChecker").innerHTML = "Incorrect!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "Shulk's nair comes out on frame 13!";
		$(".buttonSet2").fadeIn();
	}
		
		
}
/*"What frame does Fox's utilt come out on?"*/
else if(currentFGQuestion == forGloryQuestions[1]){
	var choice1 = answers[3];
	var choice2 = answers[4];
	var choice3 = answers[5];
		
	document.getElementById("ansChecker").innerHTML=currentFGQuestion;
	document.getElementById("option1").innerHTML=choice1;
	document.getElementById("option2").innerHTML=choice2;
	document.getElementById("option3").innerHTML=choice3;
		
	function ansButton1(){
		document.getElementById("ansChecker").innerHTML = "Correct!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "Fox's utilt comes out on frame 3!";
		$(".buttonSet2").fadeIn();
	}
	function ansButton2(){
		document.getElementById("ansChecker").innerHTML = "Incorrect!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "Fox's utilt comes out on frame 3!";
		$(".buttonSet2").fadeIn();
	}
	function ansButton3(){
		document.getElementById("ansChecker").innerHTML = "Incorrect!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "Fox's utilt comes out on frame 3!";
		$(".buttonSet2").fadeIn();
	}
}
/*"For which frames are Ryu's True Shoryuken invincible on?"*/
else if(currentFGQuestion == forGloryQuestions[2]){
	var choice1 = answers[6];
	var choice2 = answers[7];
	var choice3 = answers[8];
		
	document.getElementById("ansChecker").innerHTML=currentFGQuestion;
	document.getElementById("option1").innerHTML=choice1;
	document.getElementById("option2").innerHTML=choice2;
	document.getElementById("option3").innerHTML=choice3;
		
	function ansButton1(){
		document.getElementById("ansChecker").innerHTML = "Incorrect!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "Ryu's TSRK is invincible from frames 1-6!";
		$(".buttonSet2").fadeIn();
			
	}
	function ansButton2(){
		document.getElementById("ansChecker").innerHTML = "Correct!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "Ryu's TSRK is invincible from frames 1-6!";
		$(".buttonSet2").fadeIn();
	}
	function ansButton3(){
		document.getElementById("ansChecker").innerHTML = "Incorrect!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "Ryu's TSRK is invincible from frames 1-6!";
		$(".buttonSet2").fadeIn();
	}
}
/*"Who is currently the best character in the game according to the official tier list?"*/
else if(currentFGQuestion == forGloryQuestions[3]){
	var choice1 = answers[9];
	var choice2 = answers[10];
	var choice3 = answers[11];
		
	document.getElementById("ansChecker").innerHTML=currentFGQuestion;
	document.getElementById("option1").innerHTML=choice1;
	document.getElementById("option2").innerHTML=choice2;
	document.getElementById("option3").innerHTML=choice3;
		
	function ansButton1(){
		document.getElementById("ansChecker").innerHTML = "Incorrect!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "Diddy Kong is currently considered the game's best character!";
		$(".buttonSet2").fadeIn();
			
	}
	function ansButton2(){
		document.getElementById("ansChecker").innerHTML = "Incorrect!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "Diddy Kong is currently considered the game's best character!";
		$(".buttonSet2").fadeIn();
	}
	function ansButton3(){
		document.getElementById("ansChecker").innerHTML = "Correct!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "Diddy Kong is currently considered the game's best character!";
		$(".buttonSet2").fadeIn();
	}
}
/*"In which tier does Mega Man currently reside?"*/
else if(currentFGQuestion == forGloryQuestions[4]){
	var choice1 = answers[12];
	var choice2 = answers[13];
	var choice3 = answers[14];
		
	document.getElementById("ansChecker").innerHTML=currentFGQuestion;
	document.getElementById("option1").innerHTML=choice1;
	document.getElementById("option2").innerHTML=choice2;
	document.getElementById("option3").innerHTML=choice3;
		
	function ansButton1(){
		document.getElementById("ansChecker").innerHTML = "Incorrect!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "Mega Man is currently considered High Tier!";
		$(".buttonSet2").fadeIn();
			
	}
	function ansButton2(){
		document.getElementById("ansChecker").innerHTML = "Correct!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "Mega Man is currently considered High Tier!";
		$(".buttonSet2").fadeIn();
	}
	function ansButton3(){
		document.getElementById("ansChecker").innerHTML = "Incorrect!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "Mega Man is currently considered High Tier!";
		$(".buttonSet2").fadeIn();
	}
}
/*"In which patch was Bayonetta most heavily nerfed?"*/
else if(currentFGQuestion == forGloryQuestions[5]){
	var choice1 = answers[15];
	var choice2 = answers[16];
	var choice3 = answers[17];
		
	document.getElementById("ansChecker").innerHTML=currentFGQuestion;
	document.getElementById("option1").innerHTML=choice1;
	document.getElementById("option2").innerHTML=choice2;
	document.getElementById("option3").innerHTML=choice3;
		
	function ansButton1(){
		document.getElementById("ansChecker").innerHTML = "Incorrect!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "Bayonetta's nerfs came in Patch 1.1.6!";
		$(".buttonSet2").fadeIn();
			
	}
	function ansButton2(){
		document.getElementById("ansChecker").innerHTML = "Incorrect!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "Bayonetta's nerfs came in Patch 1.1.6!";
		$(".buttonSet2").fadeIn();
	}
	function ansButton3(){
		document.getElementById("ansChecker").innerHTML = "Correct!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "Bayonetta's nerfs came in Patch 1.1.6!";
		$(".buttonSet2").fadeIn();
	}
}
/*"On which frame does Sheik's fair come out?"*/
else if(currentFGQuestion == forGloryQuestions[6]){
	var choice1 = answers[18];
	var choice2 = answers[19];
	var choice3 = answers[20];
		
	document.getElementById("ansChecker").innerHTML=currentFGQuestion;
	document.getElementById("option1").innerHTML=choice1;
	document.getElementById("option2").innerHTML=choice2;
	document.getElementById("option3").innerHTML=choice3;
		
	function ansButton1(){
		document.getElementById("ansChecker").innerHTML = "Incorrect!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "Sheik's fair is frame 4!";
		$(".buttonSet2").fadeIn();
			
	}
	function ansButton2(){
		document.getElementById("ansChecker").innerHTML = "Incorrect!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "Sheik's fair is frame 4!";
		$(".buttonSet2").fadeIn();
	}
	function ansButton3(){
		document.getElementById("ansChecker").innerHTML = "Correct!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "Sheik's fair is frame 4!";
		$(".buttonSet2").fadeIn();
	}
}
/*"What is the name of the only major that was won using Cloud?"*/
else if(currentFGQuestion == forGloryQuestions[7]){
	var choice1 = answers[21];
	var choice2 = answers[22];
	var choice3 = answers[23];
		
	document.getElementById("ansChecker").innerHTML=currentFGQuestion;
	document.getElementById("option1").innerHTML=choice1;
	document.getElementById("option2").innerHTML=choice2;
	document.getElementById("option3").innerHTML=choice3;
		
	function ansButton1(){
		document.getElementById("ansChecker").innerHTML = "Incorrect!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "ANTi won CEO using Cloud!";
		$(".buttonSet2").fadeIn();
			
	}
	function ansButton2(){
		document.getElementById("ansChecker").innerHTML = "Correct!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "ANTi won CEO using Cloud!";
		$(".buttonSet2").fadeIn();
	}
	function ansButton3(){
		document.getElementById("ansChecker").innerHTML = "Incorrect!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "ANTi won CEO using Cloud!";
		$(".buttonSet2").fadeIn();
	}
}
/*"What is the name of the first prominent dthrow->uair combo that was found?"*/
else if(currentFGQuestion == forGloryQuestions[8]){
	var choice1 = answers[24];
	var choice2 = answers[25];
	var choice3 = answers[26];
		
	document.getElementById("ansChecker").innerHTML=currentFGQuestion;
	document.getElementById("option1").innerHTML=choice1;
	document.getElementById("option2").innerHTML=choice2;
	document.getElementById("option3").innerHTML=choice3;
		
	function ansButton1(){
		document.getElementById("ansChecker").innerHTML = "Incorrect!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "Diddy's dthrow-uair was called the Hoo-Hah!";
		$(".buttonSet2").fadeIn();
			
	}
	function ansButton2(){
		document.getElementById("ansChecker").innerHTML = "Incorrect!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "Diddy's dthrow-uair was called the Hoo-Hah!";
		$(".buttonSet2").fadeIn();
	}
	function ansButton3(){
		document.getElementById("ansChecker").innerHTML = "Correct!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "Diddy's dthrow-uair was called the Hoo-Hah!";
		$(".buttonSet2").fadeIn();
	}
}
/*"What is the site that holds all frame-data for this game?"*/
else if(currentFGQuestion == forGloryQuestions[9]){
	var choice1 = answers[27];
	var choice2 = answers[28];
	var choice3 = answers[29];
		
	document.getElementById("ansChecker").innerHTML=currentFGQuestion;
	document.getElementById("option1").innerHTML=choice1;
	document.getElementById("option2").innerHTML=choice2;
	document.getElementById("option3").innerHTML=choice3;
		
	function ansButton1(){
		document.getElementById("ansChecker").innerHTML = "Correct!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "KuroganeHammer is the resource for all Smash 4 framedata!";
		$(".buttonSet2").fadeIn();
			
	}
	function ansButton2(){
		document.getElementById("ansChecker").innerHTML = "Incorrect!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "KuroganeHammer is the resource for all Smash 4 framedata!";
		$(".buttonSet2").fadeIn();
	}
	function ansButton3(){
		document.getElementById("ansChecker").innerHTML = "Incorrect!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "KuroganeHammer is the resource for all Smash 4 framedata!";
		$(".buttonSet2").fadeIn();
	}
}
/*"Which character is currently considered the worst by the official tier list?"*/
else if(currentFGQuestion == forGloryQuestions[10]){
	var choice1 = answers[30];
	var choice2 = answers[31];
	var choice3 = answers[32];
		
	document.getElementById("ansChecker").innerHTML=currentFGQuestion;
	document.getElementById("option1").innerHTML=choice1;
	document.getElementById("option2").innerHTML=choice2;
	document.getElementById("option3").innerHTML=choice3;
		
	function ansButton1(){
		document.getElementById("ansChecker").innerHTML = "Incorrect!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "#BuffThePuff";
		$(".buttonSet2").fadeIn();
			
	}
	function ansButton2(){
		document.getElementById("ansChecker").innerHTML = "Incorrect!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "#BuffThePuff";
		$(".buttonSet2").fadeIn();
	}
	function ansButton3(){
		document.getElementById("ansChecker").innerHTML = "Correct!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "#BuffThePuff";
		$(".buttonSet2").fadeIn();
	}
}
/*"What was Peach's infinite footstool->uair combo called before it was removed?"*/
else if(currentFGQuestion == forGloryQuestions[11]){
	var choice1 = answers[33];
	var choice2 = answers[34];
	var choice3 = answers[35];
		
	document.getElementById("ansChecker").innerHTML=currentFGQuestion;
	document.getElementById("option1").innerHTML=choice1;
	document.getElementById("option2").innerHTML=choice2;
	document.getElementById("option3").innerHTML=choice3;
		
	function ansButton1(){
		document.getElementById("ansChecker").innerHTML = "Correct!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "Although it was discovered by EOE, it was called the Umeki Rainbow!";
		$(".buttonSet2").fadeIn();
			
	}
	function ansButton2(){
		document.getElementById("ansChecker").innerHTML = "Incorrect!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "Although it was discovered by EOE, it was called the Umeki Rainbow!";
		$(".buttonSet2").fadeIn();
	}
	function ansButton3(){
		document.getElementById("ansChecker").innerHTML = "Incorrect!";
		$(".buttonSet1").fadeOut();
		document.getElementById("correctAnswer").innerHTML = "Although it was discovered by EOE, it was called the Umeki Rainbow!";
		$(".buttonSet2").fadeIn();
	}
}
function reload(){
	location.reload();
}