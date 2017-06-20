/*New User Creator
The left panel headline and icon will be hidden if no users exist.
Any 'hard coded' user profile list items will render in the left panel.
The right panel has a simple form that accepts new user names.
The user can type any single, or multiple word usernames into the box.
When the user clicks the [add.] button, it will:
    1. Only submit if it has a value in the input box.
    2. Properly capitalized EACH word (example: MATthEw davID HiGlEy will process to Matthew David Higley).
    3. Return the capitalized name and create a new user profile list item.
    4. A random number will be generated and used to embed an image with the new user.
User can click the [x] in any user profile list item to delete that item
After all user profile list items have been deleted, panel headline and icon displays
*/
/*Challenge 1 -
Target two elements from the HTML: the <h3> and the <ul> from the .users <div>
Target the <form> element from the .add-user <div>
Create an array of 3 - 5 placeholder names
console all four items checking for any errors
*/
// var h3 = document.getElementsByTagName('h3')[0];
// var ul = document.querySelector('ul');
var usersH3=document.querySelector('.users h3'),
usersUl = document.querySelector('.users ul'),
userForm = document.querySelector('.add-user form');

// console.log(h3);
// console.log(ul);
// var form = document.getElementsByTagName('form')[0];
// console.log(form);

var users = ['Peter', 'Stephanie', 'Lorin', 'Philip'];
// console.log(userInfo);
/*Challenge 2 -
Create a function that returns a random number
Test the random number generator by invoking your function as an argument in a `console.log()`
example: console.log(myRandomNumber());
*/
function returnRandomNumber(){
  return Math.floor(Math.random() * 1084);
}

console.log(returnRandomNumber());
/* Challenge 3 -
Create a function that returns a properly capitalized unsername string
Test the capitalization by invoking your function as an argument in a `console.log()`
  example: console.log(stringCapitalization('MaTTheW hiGLEy'));
  Note: This is not exactly the same as we have done in the past. This challenge should accepts strings that are multiple words long. You'll need to do some searching for this answer. How do you break up a string at the spaces? How does each word get properly capitalized? How do you put them all back together?
Tip: Look into the .map() method
*/
function properCapString(str){
  var string = str.split(' ');
  string = string.map(function(e){
    // return 'adding text to: ' + e;
    e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
  }).join(' ');
  return string;
}

/* Challenge 4.0 -
Create a function that will clearout the <ul> when called.

Invoke your function.
*/
function populateUsersList(){
  usersUl.innerHTML = '';
  if(users.length){
    usersH3.classList.add('hidden');
    for(let i = 0; i < users.length; i++){
      // console.log(users[i]);
      let randNum = returnRandomNumber();

      let li = document.createElement('li'),
          img = document.createElement('img'),
          p = document.createElement('p'),
          span = document.createElement('span');

        li.dataset.index = i;
        img.src = 'http://unsplash.it/85/85?image' + randNum;
        p.textContent = users[i];
        span.textContent = 'x';

        li.append(img, p, span);
        usersUl.append(li);

        span.addEventListener('click', function(evt){
          console.log(this.parentElement.dataset.index);
          users.splice(this.parentElement.dataset.index, 1);
          populateUsersList();
      });
    }
  }else{
    usersH3.classList.remove('hidden');
    // no users in array
  }
}

populateUsersList();

console.log(userForm);
userForm[1].addEventListener('click', function(evt){
  evt.preventDefault();
  if(userForm[0].value){
    users.push(properCapString(userForm[0].value));
    populateUsersList();
  }
})
/*
Challenge 4.1 -

Inside your function, add the class of "hidden" to the <h3> IF your usernames array has any items, OTHERWISE, remove that class of "hidden" from the <h3>
*/

/*
Challenge 4.2 -

IF there are items in your usernames array then:

Loop through the array. You WILL NEED to be able to know the current index number you're on in the loop

For each loop:

Save a random number.

Create the markup necessary for a user name list item (<li>, <img>, <p>, <span>).

For your <li>, you'll need to add an attribute called a "data" attribute. Search for "dataset" for more info.

Each <li>'s "data" attribute should be set to match it's array index number.

    example: The first <li> should have a "data" attribute of 0, second of 1, etc...

Each <img> must have the source attribute AND a corresponding alt attribute. Use your saved random number to complete the source url. Use 'http://unsplash.it/85/85?image=' as the starting point. After the equal sign in the url is where your random number will go.

Each <p> will have the text of the array item.

Each <span> will have the text of a lowercase "x". <- This you can hardcode!

Combine all the elements to create your complete markup.
*/
/*
Challenge 4.3 -

An event listener MUST be added to each <span> tag WHEN it is generated!

When the user clicks on the [x], it must check to see the "data" to know what array index it is.

It will remove that index from your usernames array and run the function to repopulate the user profile list items again.

This will essentially "delete" it... since it no longer exists in the array.
*/
/*
Challenge 5 -

Referencing the submit button from your form variable, add a click event listener.

There is some default functionality to this button, so you'll need to disable that for this challenge to work properly.

IF the user has filled in the input box:

    Push the new input value to your usernames array.

    Invoke the function that generates your user profile list items.

After your array has been modified, clear out your input box
*/
