/*var myName = "Daniele Wilborn";
console.log(myName);

// .Length
console.log(myName.length);

// .charAt()
console.log(myName.charAt(11));
console.log(myName.charAt(250));

// .indexOf()
console.log(myName.indexOf('n'));
console.log(myName.indexOf('W'));

// .concat()
console.log(myName.concat(' peanuts'));

// .substring() - up to but not incuding
console.log(myName.substring(0, 3));
console.log(myName.substring(5, 2));
console.log(myName.substring(2, 5));
console.log(myName.substring(8));

// .substr() - total characters
console.log(myName.substr(0, 3));
console.log(myName.substr(5, 2));
console.log(myName.substr(2, 5));
console.log(myName.substr(8));

// .toUpperCase()
console.log(myName.toUpperCase());

// .toLowerCase()
console.log(myName.toLowerCase());

var newUser = "       yoda     "
console.log(newUser);

// .trim()
console.log(newUser.trim());
 // regular expressions*/

 // Arrays identified by []
//  var sodas = ['pepsi', 'dr. pepper', 'mountain dew'];
// console.log(sodas);
// console.log(sodas[2]);
// console.log(Array.isArray(sodas));

var colors = ['red', 'orange', 'purple'];
var arrLength = colors.push('green')
// console.log("the new array is  ", colors);
// console.log("the array length is ", arrLength);

arrLength = colors.unshift('pink');
// console.log("the New array ", colors);
// console.log("Array length is", arrLength);

var item = colors.pop();
// console.log("Item is ", item);
//
// console.log("the new array", colors);


item = colors.shift();
// console.log("Item is", item);
// console.log("The new Array is", colors);

// .indexOf()
// console.log(colors.indexOf('red'));

// .lastIndexOf()
// console.log(colors.lastIndexOf('orange'));

// .splice() - remove or add items
var removeItem = colors.splice(1, 2);
// console.log(colors);
// console.log(removeItem);

var addItems = colors.splice(1, 0, 'green', 'blue');
// console.log(colors);
// console.log(addItems);

var newColors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

var move = newColors.indexOf('green');
// console.log(move);
newColors.splice(move, 1, 'indigo');
// console.log(newColors);

// .slice() - up to but not including
var moreColors = newColors.slice(1, 4);
// console.log(moreColors);

// .reverse()
var reverseColors = newColors.reverse();
// console.log(newColors);
// console.log(reverseColors);

//
newColors.sort();
console.log(newColors);

var names = ['Matt', 'matt', 'david', 'higley', 'Higley', 'David'];
names.sort();
console.log(names);

// var points = [1, 10, 21, 2, 103];
// points.sort();
// console.log(points);

var points = [4,2,5,1,3];
points.sort(function(a,b){
  return a-b;
})
console.log(points);

// for loop
// for(var i = 0; i < newColors.length; i++){
//   console.log('my fave color is', newColors[i]);
// }

var modColors = newColors.map(function(e, i){
  // console.log(e);
  // console.log(i);
  console.log('my fav color', e);
});
console.log(modColors);

var modPoints = points.map(function(e){
  return e * 2
});
console.log(modPoints);
