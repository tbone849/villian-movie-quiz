$( document ).ready(function() {

    var question = [];

    // add objects to array question
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
	// end push objects into array question

	var count = 0;
	var correct = 0;
	var questionCount = 1;

	updateQuestion(); 
	instructions();
	newGame();

	$('form').submit(onFormSubmit);

	// handle form submission	
	function onFormSubmit(event){
		event.preventDefault();
		var userAnswer = $('input[type="radio"][name="answer"]:checked').val();
		var correctAnswer = question[count].correct;
		compareAnswers(userAnswer, correctAnswer);
		count++;
		if(questionCount === 10){
			$('.feedbackModal').slideDown(1000);
			feedback();
		}
		else if(questionCount < 10){
			questionCount++;
			updateQuestion();
		}
		
		$('.correct').text(correct);
		
	}

	function compareAnswers(a, b){
		if(a === b){
			correct++;
		}
	}

	function updateQuestion(){
		$('.correct').text(correct);
		$('.count').text(count);
		$('.questionCount').text(questionCount);
		$('.picture').css('background-image', "url(" +question[count].picture + ")");
		$('.answerA').text(question[count].answerA);
		$('.answerB').text(question[count].answerB);
		$('.answerC').text(question[count].answerC);
		$('.answerD').text(question[count].answerD);
		$('input:radio[name=answer]')[0].checked = true;
	}

	function feedback(){
		var feedbackText = '';
		if(correct == 10){
			feedbackText = "Wow. You know your villains. What does that say about you?";
		}
		else if(correct >= 8){
			feedbackText = "You would make a good villain sidekick. Well done.";
		}
		else if(correct >= 6){
			feedbackText = "Not bad, but I think you could have done better.";
		}
		else if(correct >= 4){
			feedbackText = "Someone could benefit from a film education course...";
		}
		else{
			feedbackText = "I have no words... except movie night!";
		}
		$('#feedback').text(feedbackText);
	}

	function newGame(){
		$('#playAgain').on("click", function(){
			count = 0;
			correct = 0;
			questionCount = 1;
			updateQuestion();
			$('.feedbackModal').slideUp(1000);
		});
	}

	function instructions(){
		$('#return').on("click", function(){
			$('.introModal').slideUp(1000);
		});

		$('.instructions i').on("click", function(){
			$('.introModal').slideDown(1000);
		});
	}
});





