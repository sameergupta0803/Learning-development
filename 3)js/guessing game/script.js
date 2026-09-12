let maxNum=parseInt(prompt("Enter max number greater than 0"))
while(!maxNum || maxNum<1)maxNum=parseInt(prompt("Please enter a number greater than 0"))
let numToGuess=Math.floor(Math.random()*maxNum+1);
let numOfGuesses=0;
let userGuess=prompt(`Please enter your guess.The number is between 1 and ${maxNum}.Press 'q' to quit`)
let userGuessNumber=parseInt(userGuess);
numOfGuesses++;  
while(userGuessNumber!=numToGuess){
    if(userGuess=='q')break;
    if(userGuessNumber>numToGuess && userGuessNumber<=maxNum){
        console.log(userGuessNumber)
        userGuess=prompt(`The number is lower.Please enter a valid guess between 1 and ${maxNum}.Press 'q' to quit`)
        userGuessNumber=parseInt(userGuess)
        numOfGuesses++;
    }
    else if(userGuessNumber<numToGuess && userGuessNumber>=1){
        console.log(userGuessNumber)
        userGuess=prompt(`The number is higher.Please enter a valid guess between 1 and ${maxNum}.Press 'q' to quit`)
        userGuessNumber=parseInt(userGuess)
        numOfGuesses++;
    }
    else{
        userGuess=prompt(`Please enter a valid guess between 1 and ${maxNum}.Press 'q' to quit`);
        userGuessNumber=parseInt(userGuess);
    }

}
if(userGuess=='q')console.log("You lost!!Get better")
else {
    console.log(userGuessNumber)
    console.log(`You won!!The number was ${numToGuess}`)
    console.log(`You guessed the number in ${numOfGuesses} turns`);
}