// sort out the array below 
let fruits = ['apples', 'oranges', 'banana', 'peaches', 'dragonfruit', 'melon', 'strawberries', 'blueberries'];

let sortedFruits = fruits.sort();
console.log(sortedFruits);

// filter out the words in the array that have more then 4 letters

const currentArray = ["one", "baby", "dodge", "harlem", "chocolate", "nut", "past", "joker", "selfish", "doggo"];

// const newArray = currentArray.filter(n => n.length > 4);
// console.log(newArray);

function filter(){
  let newArray = [];
  for(let i = 0; i < currentArray.length; i++){
    if (currentArray[i].length > 4){
      newArray.push(currentArray[i]);
    }
  }
  return newArray;
}

console.log(filter());