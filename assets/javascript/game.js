
$(document).ready(function () {
    
    var numberToGuess = Math.floor(Math.random() * 31) + 90;
    //generate random number 
    $("#number-to-guess").text(numberToGuess);

    console.log("computer pick " + numberToGuess);
    
    //assign each button a random value, be sure to hide the value 

    // var crystalRandomNumber = Math.floor(Math.random() * 12) + 1;
    var TotalScore = 0;
    var totalWins = 0;
    var totalLosses = 0;
    // console.log("crystal number"+ crystalRandomNumber);

    for (var i = 0; i < 4; i++) {
        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("src", "https://vignette.wikia.nocookie.net/powerlisting/images/d/d3/2013-10-Blue-Crystal-Abstract.jpg/revision/latest?cb=20160227092023");

        $("#crystals").append(imageCrystal);
    }



    $(".crystal-image").on("click", function () {
        var crystalRandomNumber = Math.floor(Math.random() * 12) + 1;

        console.log("crystal number" + crystalRandomNumber);
        // $("#crystal").text(crystalRandomNumber);
        var total = (TotalScore += crystalRandomNumber);
        $("#container").text(TotalScore);
        // console.log("it works")

        if (total === numberToGuess) {
            totalWins++;
            $("#wins").text("Wins: " + totalWins)
            alert("You win!!!");
            reset();
        }

        else if (total >= numberToGuess) {
            totalLosses++;
            $("#losses").text("Losses: " + totalLosses)
            alert("Boooo!")
            reset();
        }
        
        function reset() {
            TotalScore= 0;
            
            console.log("clear")
        }

        
    })
})


