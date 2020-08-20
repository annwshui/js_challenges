//Create a variable named shoppingList
let shoppingList = [];
shoppingList.push("beans");
shoppingList.push("carrots");
shoppingList.push("ice");
shoppingList.push("potato");
console.log(shoppingList);

//Create a variable named lengthOfArray
let lengthOfArray = shoppingList.length;
console.log(lengthOfArray);

//Create an array named numArray
let numArray = [3, 4, 5];

//Create a function named unshifter
function unshifter(num){
  let arr = [];
  for(let i = 0; i < numArray.length; i++){
    arr.push(numArray[i])
  }
  arr.unshift(num)
  return arr
}
console.log(unshifter(1));
console.log(unshifter(2));