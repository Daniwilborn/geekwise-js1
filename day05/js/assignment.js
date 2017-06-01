// User clicks the button
function getUsername(){
  var userFirst = prompt('Enter your first Name.').trim();
  // console.log(userFirst);
  // userFirst =
  welcome(properCap(userFirst));
}

function properCap(uf){
  uf = uf.charAt(0).toUpperCase() + uf.substr(1).toLowerCase();
  // welcome(uf);
  return uf; /*<--Always the last command*/
}

function welcome(uf){
  alert(`Welcome ${uf}`);
}


// user is prompted to enter their first name
// save user's name and account for extra spaces
// ensure first character is capped
// remaining are dropped
// pass into another function
// alert welcome message to user
