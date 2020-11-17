// Generate a random number yes
// Give the user the ability to guess
// If they guess and they are wrong, ask them again (hint)
// If they win- say that they won


function guessGame(){
    let randomNumber = Math.floor(Math.random() * 11);
    let guess;
    console.log("start");

    do{
        guess = prompt("Guess a number between 1-10");
        console.log(guess, randomNumber);
        if(randomNumber > guess){
            console.log("You guessed too low");
            console.log(guess, randomNumber);
        }else if (randomNumber < guess){
            console.log("You guess too high");
            console.log(guess, randomNumber);

        }
    }while (guess != randomNumber){
        console.log("You Won");
    }
}

guessGame();