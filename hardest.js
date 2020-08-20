function fizzBuzz(n) {
  let arr = [];
  for(let i = 1; i <= n; i += 1){
    if (i % 4 === 0 && i % 5 === 0){
      arr.push("FIZZBUZZ");
    } else if (i % 4 === 0){
      arr.push("Fizz");
    } else if (i % 5 === 0){
      arr.push("Buzz");
    } else {
      arr.push(i);
    }
  }
  return arr;
}

console.log(fizzBuzz(21));