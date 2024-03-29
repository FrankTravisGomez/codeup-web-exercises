"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
function analyzeColor(input){
    if(input === "red"){
        return " red is nice color"
    } else if ( input === "orange"){
        return " orange is wonderful color!"
    } else if ( input === "yellow"){
        return " eh that color is alright..."
    } else if ( input === "green"){
        return "the color of boogers ew!"
    } else if (input === "blue"){
        return " the color of the summer sky"
    } else if ( input === "indigo"){
        return " not sure what color that is but hopefully it/s better than a windigio spirit"
    } else if ( input === "violet"){
       return " violet you/re turning violet!"
    } else{
       return input + " not sure what color that is" + input;
  }
}
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
//function analyzeColor(input) {
   // if(input === "red"){
    //         return " red is nice color"
    //     } else if ( input === "orange"){
    //         return " orange is wonderful color!"
    //     } else if ( input === "yellow"){
    //         return " eh that color is alright..."
    //     } else if ( input === "green"){
    //         return "the color of boogers ew!"
    //     } else if (input === "blue"){
    //         return " the color of the summer sky"
    //     } else if ( input === "indigo"){
    //         return " not sure what color that is but hopefully it/s better than a windigio spirit"
    //     } else if ( inpit === "violet"){
    //         return " violet you/re turning violet!"
    //     } else{
    //         return input + " not sure what color that is" + input;
    //     }
//}
function analyzeColor(input){
switch(input){
    case "red":
         console.log("red is a nice color");
        break;
    case " orange":
        console.log("orange is wonderful color!");
        break;
    case "yello":
        console.log("eh that color is alright...");
        break;
    case "green":
        console.log("the color of boogers ew!");
        break;
    case "blue":
        console.log("the color of the summer sky");
        break;
    case "indigo":
        console.log("not sure what color that is but hopefully it/s better than a windigio spirit");
        break;
    case "violet":
        console.log("violet you/re turning violet!");
        break;
    default:
        console.log("im sorry idk what color that is" + input + "...");
}};
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
var userColor = prompt+ ("hello user what color do you like?");
alert(analyzeColor(userColor));
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(luckyNumber, totalAmount){
    if(luckyNumber === 0){
        return totalAmount;
    }else if(luckyNumber === 1){
        return totalAmount-(totalAmount*.10);
    }else if(luckyNumber === 3){
        return totalAmount-(totalAmount*.30);
    }return totalAmount + totalAmount;
}
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
//Generate a random number between 0 and 6
 var luckyNumber = Math.floor(Math.random() * 6);
var totalBill = parseFloat(prompt("what is your total?"));
var discount = calculateTotal(luckyNumber,totalBill );

if (luckyNumber == 0) {
    alert("not so lucky " + luckyNumber + " todays total is" + totalBill);
} else if (luckyNumber == 1) {
    alert("you won " + luckyNumber + " todays discount" + totalBill + " todays total is" + discount.toFixed(2));
} else if (luckyNumber == 2) {
    alert("you won " + luckyNumber + " todays discount" + totalBill + " todays total is" + discount.toFixed(2));
} else if (luckyNumber == 3) {
    alert("you won " + luckyNumber + " todays discount" + totalBill + " todays total is" + discount.toFixed(2));
} else if (luckyNumber == 4) {
    alert("you won " + luckyNumber + " todays discount" + totalBill + " todays total is" + discount.toFixed(2));
} else if (luckyNumber == 5) {
    alert("you won " + luckyNumber + " todays discount" + totalBill + " todays total is" + discount.toFixed(2));
}

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
// var wantToGiveNumber = confirm ("would you like to give a number?");
// if (wantToGiveNumber) {
//     alert("yay")
//     var userNumber = calculateTotal("what number?");
//     if (typeof (userNumber)) ;
//     alert("isNan")
// }else{
//     alert("okay give me a number:" + userNumber);
//     var isEven = userNumber %2 ===0;
//     var addOneHundred= userNumber+ 100;
//     var isPositive= userNumber =0;
// };


var wantToGiveNumber = confirm("enter a number?");

if (wantToGiveNumber) {

    alert("yay")
    var userNumber = parseInt(prompt("Whats your number?"));
        if (isNaN(userNumber)) {
            alert("Thats not a number?")
        } else {
            var addOneHundred = userNumber + 100;
            var isPositive = userNumber > 0;
            var isEven = userNumber % 2;
            if (isEven == 0) {
                alert("Your number is even");
            } else {
                alert("Your number is odd");
            }

            alert("what is you number plus 100 " + addOneHundred + ".");

            if (isPositive) {
                alert("your number is positive");
            } else {
                alert("you have a negative number");
            }
        }
} else {
    alert("No numbers today");
}
