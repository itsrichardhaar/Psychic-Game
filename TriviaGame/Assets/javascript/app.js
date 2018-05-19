$(document).ready(function() {
    var index = 0;

    var countdownTimer = {
        time : 60,

        reset: function() {
            this.time = 60;
            $(".timer").html("<h3>" + this.time + " seconds remaining</h3>");
        },
        start: function() {
            counter = setInterval(countdownTimer.count, 500);

        },
        stop: function() {
            clearInterval(counter);

        },
        count: function() {
            countdownTimer.time--;
            console.log(countdownTimer.time);
            $(".timer").html(countdownTimer.time);
        if (countdownTimer.time >= 0) {
            $(".timer").html("<h3>" + countdownTimer.time + " seconds remaining</h3>");

        }   
        else {
            index++;
            answerWrong();
            countdownTimer.reset();
            if (index < questionArray.length) {
                loadQuestion(index);

            }else {
                $(".answerchoice").hide();
                showScore();
            }
        } 

        }

    }
   
});

var correct = 0;
var wrong = 0;
var q1 = {
	question : 'Who is the lead singer of the Rolling Stones?',
	possibleAnswers : ['A. Freddie Mercury',
				 'B. Mick Jaggar',
				 'C. Robert Plant',
				 'D. Joe Walsh'],
	flags : [false, true, false, false],
	answer : 'B. Mick Jaggar'
};

var q2 = {
	question: 'Where was the first organized music festival held? ',
	possibleAnswers: ['A. Los Angeles',
				 'B. Las Vegas',
				 'C. London',
				 'D. Woodstock'],
	flags : [false, false, false, true],
	answer : 'B. Woodstock'
};

var q3 = {
	question : 'What was the first movie led zeppelin allowed to use their music?',
	possibleAnswers : ['A. Almost Famous',
				 'B. Rock Star',
				 'C. Titanic',
				 'D. We Will Rock You'],
	flags : [true, false, false, false],
	answer : 'B. Almost Famous'
};

var q4 = {
	question : 'Who was a famouse punk rock band in the 1980s',
	possibleAnswers : ['A. Kiss',
				 'B. The Talking Heads',
				 'C. The Eagles',
				 'D. Fleetwood Mac'],
	flags : [false, true, false, false],
	answer : 'A. The Talking Heads'
};