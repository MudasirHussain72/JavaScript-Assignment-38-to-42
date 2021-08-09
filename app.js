
/* =====================================================================================
                                Chapters 38-42
=======================================================================================*/



//  ***** Question 01 ***** 


function power() {
    var value1 = +prompt("Please Enter First Value")
    var value2 = +prompt("Please Enter Second Value")
    var answerValue = value1 ** value2

    console.log(answerValue)
}
power()


//  ***** Question 02 ***** 


// Method (01)

function leapYear(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}
leapYear(2020)


// Method (02)

var write = +prompt("enter your year")


var dayOfWk = (write);
switch (dayOfWk) {
    case 2016:
        alert("2016 is a leap year");
        break;
    case 2012:
        alert("2012 is also a leap year");
        break;
    case 2020:
        alert("2020 is a leap year!");
        break;
    default:
        alert("Try again ");
}



//  ***** Question 03 ***** 


var s1 = 5;
var s2 = 6;
var s3 = 7;
var s = (s1 + s2 + s3) / 2;
var area = Math.sqrt(s * ((s - s1) * (s - s2) * (s - s3)));
console.log(area);



//  ***** Question 04 *****


var maths = +prompt("Enter your Mark Obtained in Mathematics");
var physics = +prompt("Enter your Mark Obtained in Physics");
var chemistry = +prompt("Enter your Mark Obtained in Chemistry");
var total = maths + physics + chemistry

function Average() {
    return total / 3
}

function percentage() {
    return total / 300 * 100
}

function main() {
    document.write("Your Average Mark Is" + " " + Average() + "<br>")
    document.write("Your Average Percentage Is" + " " + percentage() + " %")

}



//  ***** Question 05 *****


const str = "This is a string";
const char = "r";

function findCharIndex(str, char) {
    for (let [index, val] of [...str].entries()) {
        if (val === char) {
            return index;
        }
    }
}

console.log(findCharIndex(str, char));



//  ***** Question 06 *****


var strings = ["My name is Owais my father name is Shakeel"];

strings = strings.map(function (string) {
    return string.replace(/[aeiou]/g, '');
});

console.log(strings);



//  ***** Question 07 *****


function findOccurrences() {
    var str = "Pleases read this application and give me gratuity";
    var count = 0;
    let haveSeenVowel = false;

    for (const letter of str.toLowerCase()) {
        switch (letter) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                {
                    if (haveSeenVowel) {
                        count++;
                        haveSeenVowel = false;
                    } else {
                        haveSeenVowel = true;
                    }
                    break;
                }
            default:
                haveSeenVowel = false
        }
    }

    return count
}

document.write(findOccurrences())



//  ***** Question 08 *****


var distance = +prompt("Write the distence B/W two cities", "in KM")

var b = distance * 1000;        //for KM to meter
var c = distance * 3280.84;     // for km to feets
var d = distance * 39370.1      //for KM to inches
var e = distance * 100000       //for Km to centimeter
document.write(distance + " KM convert into meter is = " + b + "<br>" +
    distance + " KM convert into feet is = " + c + "<br>" +
    distance + " KM convert into inches is = " + d + "<br>" +
    distance + " KM convert into centimeter is = " + e + "<br>")



//  ***** Question 09 *****


function overTime() {
    var perHour = 12.00
    var totalHours = 40
    // if(){}
    // Question is not clear
}


//   Question 10 