

//start off by making variables
var points = 0;
//getValue function is called to pick a number between 50 and 100
//and assigns the value to score.
var score = getValue(50, 100);


//asigning values to gems
var gems = {
    blue: {
        value: getValue(1,2)},
    silver: {
        value: getValue(3,6)},
    green: {
        value: getValue(7,10)},
    violet: {
        value: getValue(11,20)}
    
}


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
function addPoints(){

}


//testing values and logging them
console.log("score: " + score)
console.log("blue: " + gems.blue)
console.log("silver: " + gems.silver)
console.log("violet: " + gems.violet)
console.log("green: " + gems.green)
console.log("points: " + points)




