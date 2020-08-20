// Declare the shape variable here and assign the object required
let shape = {
  name: "cube",
  sides: 6,
  colour: "red"
}

console.log(shape)




// Create your function here that will output the topgear string
let car = {
  name: 'Bugatti Veryon', 
  engine: "8.0L",
  transmission: "7-speed direct shift automatic",
  topSpeed: "408 km/h"
};


console.log(car.name);
console.log(car.engine);
console.log(car.transmission);
console.log(car.topSpeed);

function topgearCarDescription(){
  return 'In TopGear BCC, the Bugatti Veryon has won the award for fastest sports car in the world, with a top speed of 408 km/h, 8.0L engine and 7-speed direct shift automatic gear system.';
}

console.log(topgearCarDescription());