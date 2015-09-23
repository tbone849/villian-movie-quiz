$( document ).ready(function() {

    var question = [];

	question.push({
		picture: "images/mr-stay-puft.jpg", 
		answerA: "Godzilla",
		answerB: "Nightmare on Elm Street",
		answerC: "Ghostbusters",
		answerD: "Die Hard",
		correct: "c",
		answer: "Ghostbusters"
	});
	
	question.push({
		picture: "images/architect.jpg",
		answerA: "The Matrix Reloaded",
		answerB: "Beetlejuice",
		answerC: "Crocodile Dundee",
		answerD: "Star Trek III: The Search for Spock",
		correct: "a",
		answer: "The Matrix Reloaded"
	});
	
	question.push({
		picture: "images/clubber.jpg",
		answerA: "Southpaw",
		answerB: "Ali",
		answerC: "Raging Bull",
		answerD: "Rocky III",
		correct: "d",
		answer: "Rocky III"
	});
	
	question.push({
		picture: "images/davy-jones.jpg",
		answerA: "Percy Jackson: Sea of Monsters",
		answerB: "Clash of the Titans",
		answerC: "Creature from the Black Lagoon",
		answerD: "Pirates of the Caribbean",
		correct: "d",
		answer: "Pirates of the Caribbean"
	});
	
	question.push({
		picture: "images/hans.jpg",
		answerA: "Harry Potter and the Order of the Phoenix",
		answerB: "Die Hard",
		answerC: "Robin Hood: Prince of Thieves",
		answerD: "Sweeney Todd",
		correct: "b",
		answer: "Die Hard"
	});
	
	
	question.push({
		picture: "images/indy.jpg",
		answerA: "Indiana Jones and the Kingdom of the Crystal Skull",
		answerB: "Indiana Jones and the Last Crusade",
		answerC: "Indiana Jones and the Temple of Doom",
		answerD: "Raiders of the Lost Ark",
		correct: "d",
		answer: "Raiders of the Lost Ark"
	});
	
	
	question.push({
		picture: "images/sauron.jpg",
		answerA: "Lord of the Rings",
		answerB: "Thor",
		answerC: "Guadians of the Galaxy",
		answerD: "The Three Muskateers",
		correct: "a",
		answer: "Lord of the Rings"
	});
	
	question.push({
		picture: "images/sensai.jpg",
		answerA: "Bloodsport",
		answerB: "Fists of Fury",
		answerC: "Karate Kid",
		answerD: "Kill BIll",
		correct: "c",
		answer: "Karate Kid"
	});
	
	question.push({
		picture: "images/shredder.jpg",
		answerA: "The Avengers",
		answerB: "Teenage Mutant Ninja Turtles",
		answerC: "Gladiator",
		answerD: "Robocop",
		correct: "b",
		answer: "Teenage Mutant Ninja Turtles"
	});
	
	question.push({
		picture: "images/t1000.jpg",
		answerA: "Terminator 2: Judgement Day",
		answerB: "I, Robot",
		answerC: "Short Circuit",
		answerD: "Robocop",
		correct: "a",
		answer: "Terminator 2: Judgement Day"
	});

	var count;
	var correct = 0;

	$('.count').text(count + 1);
	$('.villainPic').attr("src", question[count].picture);
	$('.answerA').text(question[count].answerA);
	$('.answerB').text(question[count].answerB);
	$('.answerC').text(question[count].answerC);
	$('.answerD').text(question[count].answerD);

	$('form').submit(onFormSubmit);
		
	function onFormSubmit(event){
		event.preventDefault();
		var userAnswer = $('input[type="radio"][name="answer"]:checked').val();
		var correctAnswer = question[count].correct;
		compareAnswers(userAnswer, correctAnswer);
	}

	function compareAnswers(a, b){
		if(a === b){
			$('.feedbackModal').text("Correct!");
			correct++;
		}
		else {
			$('.feedbackModal').text("The correct answer was " + question[count].answer);
		}
	}

});





