//start off by making variables
var points = 0;
//score is set to 10000 so that if you click a gem before the startgame button, it doesn't let you win automatically.
// the score is set to a number between 50 and 100 later in the getValue function below.
var score = 10000;
var wins = 0;
var loses = 0;


//asigning values to gems
var gems = {
    blue: {
        value: 0
    },
    silver: {
        value: 0
    },
    green: {
        value: 0
    },
    violet: {
        value: 0
    }

}
//testing values and logging them
console.log("score: " + score);
console.log("blue: " + gems.blue.value);
console.log("silver: " + gems.silver.value);
console.log("violet: " + gems.violet.value);
console.log("green: " + gems.green.value);
console.log("points: " + points);



function startGame() {
    //resets points to 0 
    points = 0;
    //getValue function is called to pick a number between 50 and 100
    //and assigns the value to score. 
    score = getValue(50, 100);
    // sets each value of the gem to a random number
    gems.blue.value = getValue(1, 2);
    gems.silver.value = getValue(3, 6);
    gems.green.value = getValue(7, 10);
    gems.violet.value = getValue(11, 20);
    // takes you to the game by switching out the HTML on the page
    $('#score').text('score: ' + score);
    $('#points').text('Your points: ' + points);
    $('#wins').text('Wins: ' + wins)
    $('#loses').text('Loses: ' + loses)
    $('#start-game').text('Reset Game')
    $('#how-to').remove();


    console.log("score: " + score);
    console.log("blue: " + gems.blue.value);
    console.log("silver: " + gems.silver.value);
    console.log("violet: " + gems.violet.value);
    console.log("green: " + gems.green.value);
    console.log("points: " + points);
}








//Declaring my functions to be used in the startGame function.
//==================================================================
// gets a random number between 2 values
function getValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
//------------------------------------------------------

// checks to see if you win or lose
function winOrLose() {
    if (score === points) {
        $('points').text('You win! score: ' + score);
        alert('You win!');
        wins++
    } else if (score < points) {
        $('#points').text('You lose! Your score is greater than ' + score);
        alert('You lose!');
        loses++
    }
}
//-------------------------------------------------------

// adds the values into the points variable
function addPoints(gemClick) {
    //actually adds the points value to the gem clicked on the stream
    points += gemClick.value;
    //grabs the element with the #points ID and  displays the points variable's value
    $('#points').text(points)
    //runs the function to check if you win or lose
    winOrLose();
    console.log(points);
}
//-------------------------------------------------------

$('#start-game').click(function () {
    startGame();
});

$('#gem1').click(function () {
    addPoints(gems.blue);
    console.log(gems.blue);
})
$('#gem2').click(function () {
    addPoints(gems.blue);
    console.log(gems.blue);
})
$('#gem3').click(function () {
    addPoints(gems.blue);
    console.log(gems.blue);
})
$('#gem4').click(function () {
    addPoints(gems.blue);
    console.log(gems.blue);
})

//mimikats