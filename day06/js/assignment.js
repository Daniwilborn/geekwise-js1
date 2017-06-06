var firstBtn = document.getElementById('firstBtn');
// console.log(firstBtn);
 var secondBtn = document.getElementsByTagName('button')[1];
 // console.log(secondBtn);
var thirdBtn = document.querySelector('li:last-child button');
// console.log(thirdBtn);

function properCap(str){
    return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
}
var fullName = '';
firstBtn.addEventListener('click', function(){
  fullName += properCap(prompt('Get First Name')) + ' ';
});

secondBtn.addEventListener('click', function(){
  fullName += properCap(prompt('Get Middle Name')) + ' ';
});

thirdBtn.addEventListener('click', function(){
  fullName += properCap(prompt('Get Last Name'));
  alert(fullName);
});
