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

$("#num1").change(function () {
    $(".numset").contents().empty();
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
        $(this).next().replaceWith("<p class='light-blue-font'>Oops. Every box must contain a valid number. Try again!</p>");
    } else {
        //display lowest number
        $(this).next().replaceWith("<p class='light-blue-font'><span class='big-white-font'>" + least + "</span> is the lowest number</p>");
    }
});

//Question 2
//on click of ("#Find Answer")
$("#btnGreatest").click(function () {
    //find highest number in the set
    var greatest = Math.max(num1, num2, num3, num4, num5, num6);
    //check if greatest is a numeric value
    if (isNaN(greatest) == true) {
        $(this).next().replaceWith("<p class='light-blue-font'>Oops. Every box must contain a valid number. Try again!</p>");
    } else {
        //display highest number
        $(this).next().replaceWith("<p class='light-blue-font'><span class='big-white-font'>" + greatest + "</span> is the highest number</p>");
    }
});

//Question 3
//on click of ("#Find Answer")
$("#btnAvg").click(function () {
    //find the average
    var avg = (num1 + num2 + num3 + num4 + num5 + num6) / 6;
    //check if avg is a numeric value
    if (isNaN(avg) == true) {
        $(this).next().replaceWith("<p class='light-blue-font'>Oops. Every box must contain a valid number. Try again!</p>");
    } else {
        //display the average
        $(this).next().replaceWith("<p class='light-blue-font'><span class='big-white-font'>" + avg + "</span> is the average of the set of numbers</p>");
    }
});

//Question 4
//on click of ("#Find Answer")
$("#btnSum").click(function () {
    //find the sum
    var sum = num1 + num2 + num3 + num4 + num5 + num6;
    //check if sum is a numeric value
    if (isNaN(sum) == true) {
        $(this).next().replaceWith("<p class='light-blue-font'>Oops. Every box must contain a valid number. Try again!</p>");
    } else {
        //display the sum
        $(this).next().replaceWith("<p class='light-blue-font'><span class='big-white-font'>" + sum + "</span> is the sum of the set of numbers</p>");
    }
});

//Question 5
//on click of ("#Find Answer")
$("#btnProduct").click(function () {
    //find the product
    var product = num1 * num2 * num3 * num4 * num5 * num6;
    //check if product is a numeric value
    if (isNaN(product) == true) {
        $(this).next().replaceWith("<p class='light-blue-font'>Oops. Every box must contain a valid number. Try again!</p>");
    } else {
        //display the product
        $(this).next().replaceWith("<p class='light-blue-font'><span class='big-white-font'>" + product + "</span> is the product of the set of numbers</p>");
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
        $(this).next().replaceWith("<p class='light-blue-font'>You must enter a valid numeric value. Try again.</p>");
    } else if (userFactorial < 1 || userFactorial > 199) {
        $(this).next().replaceWith("<p class='light-blue-font'>Please enter numeric values between 1 and 199.</p>");
    } else if (userFactorial % 1 !== 0) {
        $(this).next().replaceWith("<p class='light-blue-font'>Please enter only integers. Try again.</p>");
    } else {
        //display the resulting factorial product
        $(this).next().replaceWith("<p class='light-blue-font'>Answer: <span class='big-white-font'>" + userFactorial + " Factorial (or " + userFactorial + "!) is " + factorial + "</span></p>");
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
    //set text in p (#numbersContainer) to be emptied
    $("#numberContainer").empty();
    //check to see if m1 and m2 are both valid numeric values
    if (isNaN(m1) == true || isNaN(m2) == true) {
        $("#numberContainer").append("<p class='light-blue-font'>You must enter two valid numeric values. Try again.</p>");
    } else if (m1 < 2 || m1 > 99 || m2 < 2 || m2 > 99) {
        $("#numberContainer").append("<p class='light-blue-font'>Both numbers must be between 2 and 99. Try again!</p>");
    } else {
        //iterate through numbers 1-100
        for (var c = 1; c <= 100; ++c) {
            //if remainder of counter divided by m1 equals 0, & counter divided by m2 equals 0
            if (c % m1 === 0 && c % m2 === 0) {
                //then display "fizzbuzz"
                $("#numberContainer").append("<span class= 'big-white-font'>   FIZZBUZZ </span>  ");
                //else if remainder of counter divided by m1 equals 0
            } else if (c % m1 === 0) {
                //then display "fizz"
                $("#numberContainer").append("<span class= 'big-white-font'>    Fizz </span>   ");
                //else if remainder of counter divided by m2 equals 0
            } else if (c % m2 === 0) {
                //then display "buzz"  
                $("#numberContainer").append("<span class= 'big-white-font'>    Buzz </span>   ");
                //else display the counter number value 'c'
            } else {
                $("#numberContainer").append("   " + c + "   ");
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
        $(this).next().replaceWith("<p class='light-blue-font'>You must first enter a word, phrase or sequence. Try Again.</p>");
    } else if (userWord.length < 3) {
        $(this).next().replaceWith("<p class='light-blue-font'>C'mon now, make it interesting! Try at least two characters.</p>");
    } else if (userWord.toLowerCase() === reverseWord.toLowerCase()) {
        //display YES PALINDROME message
        $(this).next().replaceWith("<p class='light-blue-font'><span class='big-white-font'>" + userWord + "</span> is a palindrome! Cool!</p>");
        //else display NO PALINDROME message 
    } else {
        $(this).next().replaceWith("<p class='light-blue-font'><span class='big-white-font'>" + userWord + "</span> is not a palindrome because it's different when read backward. (" + reverseWord + ")</p>");
    }
});