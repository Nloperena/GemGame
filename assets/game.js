//computer chooses a score between 50 to 100
//..
var points = 0;
var score = getValue(50, 100);
var blue = getValue(1, 10);
var silver = getValue(3, 12);
var green = getValue(1, 3);
var violet = getValue(1, 4);

function getValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

if (green === silver || violet || blue && silver === violet || blue && violet === blue) {

}

console.log("score: " + score)
console.log("blue: " + blue)
console.log("silver: " + silver)
console.log("violet: " + violet)
console.log("green: " + green)