function calculateRoot(input, guess){
  let tooFar = true;
  while(tooFar){
    let guessSquared = guess * guess;
    if(Math.abs(input - guessSquared) <= 5e-15){
      console.log(`the root is ${guess}`);
      tooFar = false;
    } else {
      guess = (guess + (input/guess)) / 2
    }
  }
}

calculateRoot(20, 4.5)
