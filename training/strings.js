/** @format */

// escape character

// let nameVar = new String("krishnendu");
// let nameVar = 'krishnendu is "good" boy';
// console.log(nameVar);

// indexOf() == > The indexOf() method returns the position of the first occurrence of a value in a string.
// The indexOf() method returns -1 if the value is not found.this is case sensitive.

// console.log(nameVar.indexOf("i", 3));

// lastIndexOf() => The indexOf() method returns the position of the first occurrence of a value in a string.
// console.log(nameVar.lastIndexOf("y"));

// searching for a string in a string
let biodata = "krishnendu where are you?";
let sData = biodata.search("you");

console.log(sData);

// extracting string parts
// slice(star, end), substring(start, end), substr(start, end);

// The slice() method returns selected elements in an array, as a new array. The slice() method selects from a given start, up to a (not inclusive) given end.
//The slice() method does not change the original array.
var sliceStr = "apple, banana, kiwi, dragon, fruit";

// let res = sliceStr.slice(7, -2);
// let res = sliceStr.slice(5);
// console.log(res);

// substring()
// let res = sliceStr.substring(7, -2);
// console.log(res);

// substr() is similar to slic()
// you cant add end value
// let res = sliceStr.substr(-3);

// replacing string content
let bioData = "krish is my bro krish";

// The replace() method searches a string for a value or a regular expression. The replace() method returns a new string with the value(s) replaced. The replace() method does not change the original string.

let replaceData = bioData.replace("krish", "Krishnendu");
console.log(replaceData);

// there are 3 methods of extracting string methods
// charat(position), charCodeAt(position), Property access[]

let word = "Krish is High";
// console.log(word.charAt(1));
console.log(word.charCodeAt(3));

// return the unicode of the last charactor in a string

let str = "HELLO wORLD";
// let res = str.length - 1;
// console.log(str.charCodeAt(res));

// proprty access
console.log(str[0]);
console.log(str.toLowerCase());
console.log(str.toUpperCase());

// concat
let fname = "krishnendu";
let lname = "panja";
console.log(fname.concat(" ", lname));

// it removes white space but it only removes start and end not middle
var string = "   hello krishh  ";
console.log(string.trim());

var texts = "a,b,c,d";
console.log(texts.split(","));
