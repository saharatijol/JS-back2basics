// Coding Challenge #1

/* 
Mark and John are tyring to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 OR mass / (height * height).
(mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Mark weighs 78kg and is 1.69m tall
            John weighs 92kg and is 1.95m tall.
TEST DATA 2: Mark weighs 95kg and is 1.88m tall.
            John weighs 85kg and is 1.76m tall.
*/

// TEST DATA 1
let markWeight = 78;
let markHeight = 1.69;

let markBMI = markWeight / (markHeight ** 2);
console.log("Mark's BMI: " + markBMI);

let johnWeight = 92;
let johnHeight = 1.95;

let johnBMI = johnWeight / (johnHeight ** 2);
console.log("John's BMI: " + johnBMI); 

let isMarkHigher = Boolean(markBMI > johnBMI);
console.log(isMarkHigher);

// TEST DATA 2
markWeight = 95;
markHeight = 1.69;
markBMI = markWeight / (markHeight ** 2);
console.log(`New Mark's BMI: ${markBMI}`);

johnWeight = 85;
johnHeight = 1.76;
johnBMI = johnWeight / (johnHeight ** 2);
console.log(`New John's BMI: ${johnBMI}`);

isMarkHigher = Boolean(markBMI > johnBMI);
console.log(`New isMarkHigher: ${isMarkHigher}`);
