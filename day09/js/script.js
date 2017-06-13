// var myCar = {
//   make: 'Honda',
//   model: 'Accord',
//   year: 2010
// };
//
// var myOtherCar = {
//   make: 'Honda',
//   model: 'Pilot',
//   year: 2015
// };
//
// function Car(userMake, pModel, pYear, pColor){
//   this.make = userMake;
//   this.model = pModel;
//   this.year = pYear;
//   this.color =
//   pColor;
// }
//
// var myHonda = new Car('Honda', 'Accord', 2010, 'black');
//
// var myOtherHonda = new Car('Honda', 'Pilot', 2015, 'Silver')
//
// console.log(myCar);
// console.log(myHonda);
// console.log(myOtherHonda.color);

/*CREATE A PERSON OBJECT



CHOOSE 5 TRAITS (PROPERTIES)

CREATE 2 NEW INSTANCES OF YOUR PERSON OBJECT CONSTRUCTOR */


// function Person(hair, eyes, weight, height, facialHair){
//   this.hair = hair;
//   this.eyes = eyes;
//   this.weight = weight;
//   this.height = height;
//   this.facialHair = facialHair;
// };
//
// var person1 = new Person('black', 'brown', '150lbs', '5.5ft', 'none')
// console.log(person1);
//
// var person2 =  new Person('blonde', 'blue', '170lbs', '5ft 7in', 'none');
// console.log(person2);


/*setTimeOut*/
function delay(){
  setTimeout(sayHello, 4000);
};

function sayHello(){
  alert("Hello");
};

/*setInterval*/
// var greeting = setInterval(sayHi, 500);
// var greet = 0;
//
// function sayHi(){
//   greet++;
//   console.log('Hi   ' + greet);
// }

var btns = document.querySelectorAll('button');

var timer;
for(let btn of btns){
  btn.addEventListener('mouseover', function(evt){
    // console.log(this);
    timer = setTimeout(function(){getBtn(evt);}, 3000);
  });

  btn.addEventListener('mouseout', function(evt){
    clearTimeout(timer);
  });
}

function getBtn(evt){
  console.log(evt.target);
  evt.target.style.color = 'red'
  evt.target.style.fontSize = '200%'
}
