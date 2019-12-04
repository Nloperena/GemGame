

//start off by making variables
var points = 0;
//getValue function is called to pick a number between 50 and 100
//and assigns the value to score.
var score = 0;


//asigning values to gems
var gems = {
    blue: {
        value: 0},
    silver: {
        value: 0},
    green: {
        value: 0},
    violet: {
        value: 0}
    
}

startGame() = function() {
    //resets points to 0 
    points = 0;
    //makes a new value for the score
    score = getValue(50, 100);
    // sets each value of the gem to a random number
    gems.blue.value = getValue(1,2);
    gems.silver.value = getValue(3,6);
    gems.green.value = getValue(7,10);
    gems.violet.value = getValue(11,20);
    // takes you to the game by switching out the HTML on the page
    $('')
}




//testing values and logging them
console.log("score: " + score)
console.log("blue: " + gems.blue)
console.log("silver: " + gems.silver)
console.log("violet: " + gems.violet)
console.log("green: " + gems.green)
console.log("points: " + points)




// gets a random number between 2 values
function getValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
//------------------------------------------------------

// checks to see if you win or lose
function winOrLose(){
    if (score === points){
        $('points').text('You win! score: ' + score);
    } else if(score < points){
        $('#points').text('You lose! Your score is greater than ' + score);
    }
}
//-------------------------------------------------------

// adds the values into the points variable
function addPoints(gemClick){
    //actually adds the points value to the gem clicked on the stream
    points + gemClick.value;
    //grabs the element with the #points ID and  displays the points variable's value
    $('#points').text(points)
    //runs the function to check if you win or lose
    winOrLose();
}


