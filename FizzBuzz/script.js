function fizzbuzz(n) {
  // Write your code here
  const resultArray = [];
  for (let i = 1; i <= n; i++){
    if (i % 3 === 0 && i % 5 === 0){
      resultArray.push('FizzBuzz');
    }else if (i % 5 === 0){
      resultArray.push('Buzz');
    }else if (i % 3 === 0){
      resultArray.push('Fizz');
    }else {
      resultArray.push(i);
    }
  }
  return resultArray;
}

console.log(fizzbuzz(16));

// Leave this line for testing:
module.exports = fizzbuzz;