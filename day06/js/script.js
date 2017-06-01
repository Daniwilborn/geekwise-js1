// Write a function that returns a random number from 0-10
// write a function that alerts random number

/*function alertRand(){
  alert(getRandNum())
}
 function getRandNum(){
   return Math.floor(Math.random()*11);
 }*/



 // function asking user for a name
 // properCap
 // function asking if there are more names -if statement-
// after all names complete, alert full name
// var fullName = '';
//
// function getName() {
//   var user = prompt('enter name');
//   alertName(getMore(properCap(user)));
// }
//
// getName();
//
// function properCap(pc){
//   return pc.charAt(0).toUpperCase() + pc.substr(1).toLowerCase();
//
// }
//
// function getMore(ns){
//   fullName += `${ns}`;
//
//   if(confirm('more names?')){
//     getName();
//   }else{
//     return fullName;
//   }
// }
//
// function alertName(str){
//   if( str !== 'undefined'){
//     alert(str);
//   }
// }

// Targeting DOM elements
// getElementByID()
var myH1 = document.getElementById('hdr1');
var myP =
// getElementsByTagName()
 document.getElementsByTagName('p')[0];
 // getElementsByClassName()
 var myAs = document.getElementsByClassName('a');
 // querySelector()
 var h1 = document.querySelector('#hdr1');

console.log(myH1);
console.log(myP);

myH1.addEventListener('click', function(){
  // this.style.color = 'red';
  // this.style.paddingTop = '50px';
  // this.style.fontSize = '100px';
  // myP.style.color = 'teal';
  // myP.classList.add('red');
  myP.classList.toggle('red');
});
