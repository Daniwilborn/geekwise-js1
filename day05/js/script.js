// if
// == equal to
// === strict equal to
// < less than
// <= less than equal to
// > greater than
// >= greater than equal to
// ! not
// !! not not equal to
// != not equal to
// !== Not strict equal
//
// var age = parseInt(prompt('what is your age?'));
// console.log(!!age);
// var gender =  prompt('Are you a male or female?');
//
// if (age >= 21 && gender == 'female'){
//   console.log('welcome');
// }else if(age < 21){
//   console.log('too young');
// }else{
//   // console.log('exactly');
// }
//
// if(!age){
  // console.log('enter your age');
// }

// switch statement
// var today = new Date().getDay();
// console.log(today);
// switch('monday'){
//   case 'Sunday':
//     console.log('it is not Friday yet');
//     break;
//   case 'Monday':
//     console.log('bad case of the Mondays');
//     break;
//   default:
//     console.log('well at least it is not Monday');
// }


// ternary operator
// var age = prompt('What is your age?');
//
// age >= 21 ? console.log('welcome') : console.log('nope');
// if (age >= 21){console.log('welcom');}else{console.log('nope');}

// var myname = 'Daniele'; /*Function scope*/
// console.log(myname);
//
// let mymiddlename = "Mikayla";
// /*Block scope*/
// console.log(mymiddlename);
//
// const mylastname = "Wilborn";
// /*Block scope*/
// console.log(mylastname);
//
// var dog = 2;
//
// if(dog > 1){
//   let dogyears = 7;
//   console.log(dogyears * dog);
// }

// JAVASCRIPT FUNCTIONS

// Function Declaration
// function myName(name, age){/* <--Parameters go here*/
//   // alert(name + ' is ' + age + ' years old ');
//   alert(`${name} is ${age} years old`)
//   // template literals
//   // interpolation`${}`
// }
//
// myName('Chuck', 29); // <--Arguments go here
//
// // Function Expression
// var myCar = function(car, year){/*<--Parameters go here*/
//   alert(`${car} is from ${year}`);
// }('Honda', 2010);// <--Arguments go here

// ''
// ""
// ``
//
// var firstName = prompt('What is your first Name');
// var lastName = prompt('What is your last name?');
//
// function welcome(firstName, lastName){
//   // alert (`Welcome ${firstName} ${lastName}`);
// };
// welcome(firstName, lastName);
