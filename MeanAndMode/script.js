function statsFinder(array) {
  // Calculate Mean
  const sum = array.reduce((acc,curr)=>{
    return acc + curr;
  });
  const mean = sum / array.length;
  
  //Calculate Mode
  let mode = 0;
  const countArray = [];
  for (let i = 0; i < array.length; i++){
    for (let j = i+1; j < array.length; j++){
      if (array[i] === array[j]){
        if (countArray[i]){
          countArray[i] += 1;
        }else{
          countArray[i] = 1;
        }
        
      }
    }
  }

  let maxCount = 0;
  let maxCountIndex = 0;
  for (let i = 0; i < countArray.length; i++){
    if (countArray[i] > maxCount){
      maxCount = countArray[i];
      maxCountIndex = i;
    }
  }

  mode = array[maxCountIndex];

  //Return Value
  return [mean, mode];
}

console.log(statsFinder([500, 400, 400, 375, 300, 350, 325, 300]))

// Leave this so we can test your code:
module.exports = statsFinder;