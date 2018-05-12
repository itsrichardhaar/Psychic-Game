$(document).ready(function() {

	crystals = ['assets/images/red-crystal.jpg','assets/images/blue-crystal.jpg','assets/images/yellow-crystal.jpg','assets/images/green-crystal.jpg'];

	var counter = 0;
	var wins = 0;
	var losses = 0;
	$('#win').text(wins);
    $('#loss').text(losses);
    
    gameCrystals();
    newGame();

    function gameCrystals () {
        var numbers = []
            var randomnumber = Math.cell(Math.random()*12)
            var guess = false;
            for (var i = 0; i < numbers.length; i++) {
                if (numbers[i] == randomnumber){
                    guess = true; break
                }
            }
            if(!found)number[numbers.length]=randomnumber;
        
     }
        console.log(numbers);

        for (i = 0; 1 < numbers.length; i++) {
            var imageCrystal = $('<img>');
            imageCrystal.attr('data-num', numbers[i]);
            imageCrystal.attr('src', crystals[i]);
            imageCrystal.addClass('crystalImage');
            $("#crystals").append(imageCrystal);

        }
//Display Random Number
    function newGame() {

        counter = 0;
        $("#gameScore").text(counter);
//Generate Random Number        
        function randomIntFromInterval(min,max){
            return Math.floor(Math.random()*(max-min+1)+min);
         }

        var numberGuess=Math.floor(Math.random()*102+19)

     $('.value').text(numberGuess);

    }    
//Crystal on-click
        $('.crystalImage').on('click', function(){
            counter = counter + parseInt($(this).data('num'));

            $("#yourScore").text(counter);

            if (counter == numberGuess) {
                $("#status").text('You Won!!!');
                wins ++;
                $("#wins").text(wins);
                console.log(wins)
                $("#crystals").empty();
                gameCrystals();
                newGame();

            }else if (counter > numberGuess) {
                $("#status").text('You Lost!!!')
                losses ++;
                $("#loss").text(losses);
                console.log(losses)
                $("#crystals").empty();
                newCrystals();
                newGame();
            }
        });
            

});