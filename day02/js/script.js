// alert("Warning! Your PC is infected with a virus. Click okay to format your hard drive.");

// var consoleInput = confirm("Morpheus is only holding one pill and it's purple. Do you say OK and take it, or Cancel the offer and run away.");
//
// console.log(consoleInput);

// prompt("Your identity has been compromised. What name will be used to identify you from now on?");

// var firstName = prompt("Your identity has been compromised. What name will be used to identify you from now on?");
//
// console.log(firstName);

// var userAge = parseInt(prompt("Please enter your age"));
//
// console.log(userAge + 10);

// String Object
var myString="this is a string";
var myStringObj=new String("this is also a string");
// console.log(myStringObj);

// Number Object
var num = 7;
var numObj = new Number(7);

// console.log(numObj)

// Float Object
var float = 5.987654;
// console.log(float);

// Boolean Object
var bool=true;
// console.log(bool);

// Array Object
// var arr = ['red','blue','orange','green'];
// console.log(arr)

var arr = ['red','blue','orange','green'];
var numArr = [ 0, 1, 2, 3 ]
// console.log(arr[1] + arr[2])
// console.log(numArr[1] + numArr[2])

// Object Object
var myCar = {
  make:"Honda",
  model:"Accord",
  year:"2010",
};

// console.log( myCar.year );

// Math Ojbects
var num1 = 5.09;
// console.log( Math.round(num1) );
// console.log( Math.floor(num1) );
// console.log( Math.ceil(num1) );

// console.log(Math.random());

var rand = Math.random();
rand = rand*10;
rand = Math.round(rand);
// console.log(rand);

// console.log(Math.round((Math.random())*10));

// Date Object
var theDate = new Date ();
// console.log(theDate.getDate());
// ---getDate is the day of the month
// ---getDay is the day of the week - 0
// ----getFullYear is year
// ---getHours is hour based off of 24hr
// ---getMoth is month - 0

// if(theDate.getDay()===0){
// console.log('sunday');
// }else if(theDate.getDay()===1){
// console.log('monday');
// }else if(theDate.getDay()===2){
// console.log('tuesday');
// }else if(theDate.getDay()===3){
// console.log('wednesday');
// }

// var myDate = theDate.toLocaleString('en-us', {weekday:'short'});
// console.log(myDate);

// var myDate = theDate.toLocaleString('en-us', {weekday:'long'});
// console.log(myDate);

// var myBday = new Date(1990, 11, 30);
// // var myDate = theDate.toLocaleString('en-us', {day:'2-digit'});
// // console.log(myBday);
//
// var myBdate = myBday.toLocaleString('en-us', {day:'numeric'});
// var myBmon = myBday.toLocaleString('en-us', {month:'long'});
// var myByear = myBday.toLocaleString('en-us', {year:'numeric'});
//
// console.log(myBmon + ' ' + myBdate + ', ' + myByear);

// prompt user for 3 individual items
// ask the user for their birth month
// ask the user for their birth day
// ask the user for their birth year
// save each response as a variable
// parse each response into a Number
// for 0 based items, subtract 1
// create a new Date instance representing users birthday
// var myBday = new Date (1999, 9, 02);

// var someVariableName = New Date (var, var, var);

// take users birthday object and parse to console in the following format: Oct 02, 99

var userMonth = parseInt(prompt("Birth Month"))-1;
console.log(userMonth);

var userDay = parseInt(prompt("Birth day"));
console.log(userDay);

var userYear = parseInt(prompt("Birth year"));
console.log(userYear);

var userBday = new Date (userYear, userMonth, userDay);

var userMonth = userBday.toLocaleString('us-eng', {month: 'short'});
var userDay = userBday.toLocaleString('us-eng', {day:'2-digit'});
var userYear = userBday.toLocaleString('us-eng', {year: '2-digit'});

console.log(userMonth + ' ' + userDay + ', ' + userYear);

// MDN - Mozilla Developer Network
// w3schools
// javascript1.matthewhigley.com
// javascript30.com
// codecademy.com
// lynda.com
