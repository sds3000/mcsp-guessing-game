 // This is your main function that runs when the page loads

 // RNGesus
let secret_Number = Math.floor(Math.random()*10 + 1)
console.log(secret_Number)
//empty array to log all guesses
let prevGuess = []
//counts number of guesses to win
let count = 0;
/** 
    this starts the game
    */
function play(){
    //while loop to keep asking for guesses
    
   while(true){
    //prompts the player to guess a number
        let player = prompt('What\'s your guess?'), guess = Number(player);
        //pushes guesses into empty array
        prevGuess.push(guess)
        //if over number, tells player lower
        if(guess > secret_Number){
            count++
            alert('lower')
        //if lower than number tells player higher
        }else if (game < secret_Number){
            count++
            alert('higher')
        //wins th game tells how many turns 
        //will tell all guesses
        }else{
            alert('Winner winner chicken dinner' + `in ${count} turns`)
            alert(`These were all of your guesses ${prevGuess.join(", ")}`)
            break;
        }
    }
   
}

function playAgain(){
    //prompt to ask if they want to play again

    //conditionals for no and yes
    
    
}


play();
