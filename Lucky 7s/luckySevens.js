function hideResults() {
    document.getElementById("resultsTable").style.display = "none";
} 

function play() {
    var startingBet = document.getElementById("startingBetInput").value;
    var betAmount = startingBet;
    var betArray = [];
	
	if (betAmount <=0) {
	alert("The Starting Bet needs to be a positive integer");
	}

    while (betAmount > 0) {
	var rollDice1 = Math.floor(Math.random() * 6) + 1;
    var rollDice2 = Math.floor(Math.random() * 6) + 1;
    var diceRoll = rollDice1 + rollDice2;
        if(diceRoll != 7) {
            betAmount -= 1
        } else { 
            betAmount += 4
        }
        betArray.push(betAmount)
    }

    var rollCounter = betArray.length;
    var highestAmount = Math.max.apply(Math, betArray);
    var highestPosition = betArray.indexOf(highestAmount);
    var countRollsAtMaxMoney = rollCounter - highestPosition;

    function showResults() {
    document.getElementById("resultsTable").style.display = "inline";
    document.getElementById("playButton").innerHTML = "Play Again";
    document.getElementById("moneyStart").innerHTML = "$" + startingBet +".00";
    document.getElementById("countRolls").innerHTML = rollCounter;
    document.getElementById("maxMoney").innerHTML = "$" + highestAmount + ".00";
    document.getElementById("countRollsAtMaxMoney").innerHTML = countRollsAtMaxMoney;
    };

    showResults();
} 