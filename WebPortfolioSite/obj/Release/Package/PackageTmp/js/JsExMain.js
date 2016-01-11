/***********************
General Functionality
************************/

function filterFloat(value) {
    //filter out incorrectly formatted numbers (Correct: -2, +2, 22.222, etc.)
    if (/^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/.test(value))
        return Number(value);
    return NaN;
}

//prevent the typing of whitespace in any input field
$(".noSpace").keypress(function (key) {
    if (key.charCode == 32) return false;
});

/***********************
Fun with Numbers!
************************/

//using the 6 numbers from input fields
var num1;
var num2;
var num3;
var num4;
var num5;
var num6;
//on user input (after keyup), store values with filterFloat()
// NOTE: I don't use parseFloat() or parseInt() here because it would truncate values, and corrupt the algorithms

$("#num1").keyup(function () {
    num1 = filterFloat($(this).val());
});

$("#num2").keyup(function () {
    num2 = filterFloat($(this).val());
});

$("#num3").keyup(function () {
    num3 = filterFloat($(this).val());
});

$("#num4").keyup(function () {
    num4 = filterFloat($(this).val());
});

$("#num5").keyup(function () {
    num5 = filterFloat($(this).val());
});

$("#num6").keyup(function () {
    num6 = filterFloat($(this).val());
});

//Question 1
//on click of ("#Find Answer")
$("#btnLeast").click(function () {
    //find lowest number in the set
    var least = Math.min(num1, num2, num3, num4, num5, num6);
    //check if least is/is not a valid numeric value
    if (isNaN(least) == true) {
        $(this).next("#numSet1").text("Oops. Every box must contain a valid number. Try again!");
    } else {
        //display lowest number
        $(this).next("#numSet1").text(least + " is the lowest number.")
    }
});

//Question 2
//on click of ("#Find Answer")
$("#btnGreatest").click(function () {
    //find highest number in the set
    var greatest = Math.max(num1, num2, num3, num4, num5, num6);
    //check if greatest is a numeric value
    if (isNaN(greatest) == true) {
        $(this).next("#numSet2").text("Oops. Every box must contain a valid number. Try again!");
    } else {
        //display highest number
        $(this).next("#numSet2").text(greatest + " is the highest number.");
    }
});

//Question 3
//on click of ("#Find Answer")
$("#btnAvg").click(function () {
    //find the average
    var avg = (num1 + num2 + num3 + num4 + num5 + num6) / 6;
    //check if avg is a numeric value
    if (isNaN(avg) == true) {
        $(this).next("#numSet3").text("Oops. Every box must contain a valid number. Try again!");
    } else {
        //display highest number
        $(this).next("#numSet3").text(avg + " is the average of these numbers.");
    }
});

//Question 4
//on click of ("#Find Answer")
$("#btnSum").click(function () {
    //find the sum
    var sum = num1 + num2 + num3 + num4 + num5 + num6;
    //check if sum is a numeric value
    if (isNaN(sum) == true) {
        $(this).next("#numSet4").text("Oops. Every box must contain a valid number. Try again!");
    } else {
        //display highest number
        $(this).next("#numSet4").text(sum + " is the sum of these numbers.");
    }
});

//Question 5
//on click of ("#Find Answer")
$("#btnProduct").click(function () {
    //find the product
    var product = num1 * num2 * num3 * num4 * num5 * num6;
    //check if product is a numeric value
    if (isNaN(product) == true) {
        $(this).next("#numSet5").text("Oops. Every box must contain a valid number. Try again!");
    } else {
        //display highest number
        $(this).next("#numSet5").text(product + " is the product of these numbers.");
    }
});

/***********************
Calculate a Factorial!
************************/

//on click ("#calcFactorial") 
// calculate the factorial of an integer taken from user input ("#userFactorial")
$("#calcFactorial").click(function () {
    //store input value with filterFloat()
    var userFactorial = filterFloat($("#userFactorial").val());
    var factorial = 1;
    for (var c = 1; c <= userFactorial; ++c) factorial *= c;
    //check to see if userFactorial is a numeric value
    if (isNaN(userFactorial) == true) {
        $(this).next("#factorialAnswer").text("You must enter a valid numeric value. Try again.");
    } else if (userFactorial < 1 || userFactorial > 199) {
        $(this).next("#factorialAnswer").text("Please enter numeric values between 1 and 199.");
    } else if (userFactorial % 1 !== 0) {
        $(this).next("#factorialAnswer").text("Please enter only integers. Try again.");
    } else {
        //display the resulting factorial product
        $(this).next("#factorialAnswer").text(userFactorial + " Factorial (or " + userFactorial + "!) is " + factorial + ".");
    }
});


/***********************
FizzBuzz the Multiples!
************************/

//on click of button (#runMultiples)
$("#runMultiples").click(function runMultiples() {
    //store user input from two text boxes
    var m1 = filterFloat($("#m1").val());
    var m2 = filterFloat($("#m2").val());
    //set text in p (#numbersContainer) to be emptied, this is so it doesn't keep appending to the numbersContainer when you resubmit new numbers to test
    $("#numberContainer").empty();
    //check to see if m1 and m2 are both valid numeric values
    if (isNaN(m1) == true || isNaN(m2) == true) {
        $("#numberContainer").append("You must enter two valid numeric values. Try again.");
    } else if (m1 < 2 || m1 > 99 || m2 < 2 || m2 > 99) {
        $("#numberContainer").append("Both numbers must be between 2 and 99. Try again!");
    } else {
        //iterate through numbers 1-100
        for (var c = 1; c <= 100; ++c) {
            //if remainder of counter divided by m1 equals 0, & counter divided by m2 equals 0
            if (c % m1 === 0 && c % m2 === 0) {
                //then display "fizzbuzz"
                $("#numberContainer").append(" FIZZBUZZ ");
                //else if remainder of counter divided by m1 equals 0
            } else if (c % m1 === 0) {
                //then display "fizz"
                $("#numberContainer").append(" Fizz ");
                //else if remainder of counter divided by m2 equals 0
            } else if (c % m2 === 0) {
                //then display "buzz"  
                $("#numberContainer").append(" Buzz ");
                //else display the counter number value 'c'
            } else {
                $("#numberContainer").append(" " + c + " ");
            }
        }
    }
});

/***********************
Palindrome, or Not?
************************/
//check whether a word provided by user is spelled the same when all of the letters are reversed

var userWord;
var reverseWord;

//on click of button ("#checkPalindrome")
$("#checkPalindrome").click(function () {
    //store user input from textbox ("#userWord") into var (userWord)
    userWord = $("#userWord").val();
    //split string chars
    //reverse string chars
    //join string chars
    //store new string as var (reverseWord)
    reverseWord = userWord.split('').reverse().join('');
    //if reverseWord equals userWord
    if (userWord == "") {
        $(this).next("#palindromeAnswer").text("You must first enter a word, phrase or sequence. Try Again.");
    } else if (userWord.length < 3) {
        $(this).next("#palindromeAnswer").text("Come on now, make it interesting! Try at least two characters.");
    } else if (userWord.toLowerCase() === reverseWord.toLowerCase()) {
        //display YES PALINDROME message
        $(this).next("#palindromeAnswer").text(userWord + " is a palindrome!");
        //else display NO PALINDROME message 
    } else {
        $(this).next("#palindromeAnswer").text(userWord + " is not a palindrome because it's different when read backward. (" + reverseWord + ")");
    }
});