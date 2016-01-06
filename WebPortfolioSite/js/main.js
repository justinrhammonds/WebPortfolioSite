//////////////////////////////////////////////////////
//Let's Play With Numbers!
//using the 6 numbers from input fields

var num1;
var num2;
var num3;
var num4;
var num5;
var num6;

//upon user interaction (after keyup), store inputs as parsed integer

$("#num1").keyup(function () {
    num1 = parseInt($(this).val());
});

$("#num2").keyup(function () {
    num2 = parseInt($(this).val());
});

$("#num3").keyup(function () {
    num3 = parseInt($(this).val());
});

$("#num4").keyup(function () {
    num4 = parseInt($(this).val());
});

$("#num5").keyup(function () {
    num5 = parseInt($(this).val());
});

$("#num6").keyup(function () {
    num6 = parseInt($(this).val());
});


//Question 1
//on click of ("#Find Answer")
$("#btnLeast").click(function () {
    //find smallest number in the set
    var least = Math.min(num1, num2, num3, num4, num5, num6);
    //display smallest number
    $(this).next().replaceWith("<p class='light-blue'>" + least + " is the smallest number</p>");
});

//Question 2
//on click of ("#Find Answer")
$("#btnGreatest").click(function () {
    //find smallest number in the set
    var greatest = Math.max(num1, num2, num3, num4, num5, num6);
    //display smallest number
    $(this).next().replaceWith("<p class='light-blue'>" + greatest + " is the largest number</p>");
});

//Question 3
//on click of ("#Find Answer")
$("#btnAvg").click(function () {
    //find the average
    var avg = (num1 + num2 + num3 + num4 + num5 + num6) / 6;
    //display the average
    $(this).next().replaceWith("<p class='light-blue'>" + avg + " is the average of the set of numbers</p>");
});

//Question 4
//on click of ("#Find Answer")
$("#btnSum").click(function () {
    //find the sum
    var sum = num1 + num2 + num3 + num4 + num5 + num6;
    //display the sum
    $(this).next().replaceWith("<p class='light-blue'>" + sum + " is the sum of the set of numbers</p>");
});

//Question 5
//on click of ("#Find Answer")
$("#btnProduct").click(function () {
    //find the product
    var product = num1 * num2 * num3 * num4 * num5 * num6;
    //display the product
    $(this).next().replaceWith("<p class='light-blue'>" + product + " is the product of the set of numbers</p>");
});



//////////////////////////////////////////////////////
//Factorial Fun!

//on click ("#calcFactorial"), calculate the factorial of integer taken from the user input ("#userFactorial")

$("#calcFactorial").click(function () {
    var userFactorial = parseInt($("#userFactorial").val());
    var factorial = 1;
    for (var c = 1; c <= userFactorial; ++c) factorial *= c;
    //display the resulting factorial product
    console.log(factorial);
    $(this).next().replaceWith("<p class='light-blue'>Answer: " + userFactorial + " Factorial (or " + userFactorial + "!) is " + factorial);
});



//////////////////////////////////////////////////////
//Multiplicity!
var m1;
var m2;

//on click of button (#runMultiples)
$("#runMultiples").click(function runMultiples() {
    //store user input from two text boxes
    m1 = parseInt($("#m1").val());
    m2 = parseInt($("#m2").val());
    $("#numberContainer").empty();
    //set text in p (#numbersContainer) to be emptied
    // $("#numbersContainer").text().replaceWith("");
    //iterate through numbers 1-100
    for (var c = 1; c <= 100; ++c) {
        //if remainder of counter divided by m1 equals 0, & counter divided by m2 equals 0
        if (c % m1 === 0 && c % m2 === 0) {
            //display "fizzbuzz"
            $("#numberContainer").append("   FizzBuzz   ");
            //else if remainder of counter divided by m1 equals 0
        } else if (c % m1 === 0) {
            //display "fizz"
            $("#numberContainer").append("   Fizz   ");
            //else if remainder of counter divided by m2 equals 0
        } else if (c % m2 === 0) {
            //display "buzz"  
            $("#numberContainer").append("   Buzz   ");
            //else display counter
        } else {
            $("#numberContainer").append("   " + c + "   ");
        }
    }
});



//////////////////////////////////////////////////////
//To Palindrome, or Not To Palindrome...
//check whether a word provided by user is spelled the same when all of the letters are reversed

var userWord;
var reverseWord;

//on click of button ("#checkPalindrome")
$("#checkPalindrome").click(function () {
    //store user input from textbox ("#userWord") into var (userWord)
    userWord = $("#userWord").val();
    console.log(userWord);
    //split string chars
    //reverse string chars
    //join string chars
    //store new string as var (reverseWord)
    reverseWord = userWord.split('').reverse().join('');
    console.log(reverseWord);
    //if reverseWord equals userWord    
    if (userWord.toLowerCase() === reverseWord.toLowerCase()) {
        //display isPalindrome
        $(this).next().replaceWith("<p class='light-blue'>" + userWord + " is a palindrome! Cool!</p>");
        //else display isNotPalindrome  
    } else {
        $(this).next().replaceWith("<p class='light-blue'>" + userWord + " is not a palindrome because it is not spelled the same forwards and backwards (" + reverseWord + ")</p>");
    }
});



//////////////////////////////////////////////////////