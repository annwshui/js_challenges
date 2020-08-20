const values = {
  objectExample: {
    name: "Sam",
    favoriteColor: "Silver",
    favoriteFood: "Baked Potato"
  },
  stringExample: "A string is a set of characters encapsulated in quotation marks",
  arrayExample: ['Butter', 'Bacon', 'Bread'],
  booleanExample: true,
  numberExample: 42
};

function adder(x){ 
  return x += 5;
}
console.log(adder(5));

function concatenate(str) {
  return str.concat("Hello World")
}
console.log(concatenate("I love cheese"))

function rectangleArea(width, height){
  return width * height
}
console.log(rectangleArea(5,3))