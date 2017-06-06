// var btn = document.querySelector('button');
// var nav = document.querySelector('ul');
// // Click
// btn.addEventListener('click', function(evt){
//   // console.log(this);
//   //  console.log(evt.target.innerText);
// });
// // Mouse Enter
// btn.addEventListener('mouseenter',function(evt){
//   // console.log(evt);
//   evt.target.style.color = 'red';
//   // console.log(evt);
// })
//
// // Mouse Leave
// btn.addEventListener('mouseleave', function(evt){
//   // console.log(evt);
//   evt.target.style.color = 'black';
// });
//
// window.addEventListener('scroll', function(evt){
//   // console.clear();
//   // console.log(evt.pageY);
//   if(evt.pageY>57){
//     nav.classList.add('vis');
//   }else{
//     nav.classList.remove('vis');
//
// });

// keydown, keyup, keypress

//
// var setDiv = document.querySelector('div#set');
// setDiv.innterHTML = '<p>Line</p>';
//
// var getDiv = document.querySelector('div#get');
// console.log(getDiv.innerHTML);
// var link = document.querySelector('a');
// link.addEventListener('click', function(evt){
//   evt.preventDefault();
// })

var submitBtn = document.querySelector('input[type="submit"]');
var form = document.querySelector('form');
// var passwordBox = document.querySelector('input[type="password"]');
// var inputBox = document.querySelector('input[type="text"]');
submitBtn.addEventListener('click', function(evt){
  evt.preventDefault();
  console.log(form);
  var formVals = [];

  for(var i = 0; i < form.length - 1; i++){
    // console.log(form[i].value);
    formVals.push(form[i].value);
  }
  console.log(formVals);
  // var text = inputBox.value;
  // var pass = passwordBox.value;
  // alert(text + ' ' + pass);
})


// add a second input box with the type of password
// Capture BOTH values
// alert results


/*-"listen" for keypresses
-grab the keycode
-textContent or innerHTML to "set" the code to the window
-http://keycode.info*/
