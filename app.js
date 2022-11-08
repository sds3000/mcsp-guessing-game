 // This is your main function that runs when the page loads
 let highScore = {

 }
/** 
    this starts the game
    */
function play(){
    // RNGesus for number to guess
    let secret_Number = Math.floor(Math.random()*10 + 1)
    console.log(secret_Number)
    //empty array to log all guesses
    let prevGuess = []
    //counts number of guesses to win
    let count = 0;
    //prompts player for his name
    let user = prompt('What\'s your name?')
    
    //shows the highscore to the new player
    alert(highScore)
   
    //while loop to keep asking for guesses
    while(true){
        //prompts the player to guess a number
        let player = prompt('What\'s your guess?'), guess = Number(player);
        //pushes guesses into empty array
        prevGuess.push(guess)
        //breaks if press cancel or escape
        if(player === null){
            alert('Goodbye')
            break;
        }
        //if over number, tells player lower
        if(guess > secret_Number){
            count++
            alert(`Sorry ${user}, guess lower`)
        //if lower than number tells player higher
        }else if (guess < secret_Number){
            count++
            alert(`Sorry ${user}, guess higher`)
        //wins th game tells how many turns 
        //will tell all guesses
        }else{
            alert('Winner winner chicken dinner' + `in ${count} turns`)
            alert(`These were all of your guesses ${prevGuess.join(", ")}`)
            //creates a new object key in empty object highscore and assigns it the number of prev guesses
            highScore[user] = prevGuess.length
            alert(highScore)
            let ans = prompt('do you want to play again?')
            //conditionals for no and yes
            if(ans.toLowerCase === 'yes'){
                play();
            }else{
                alert('thanks for playing')
                break;
            }
        }
    }
    
   
}

function playAgain(){
    //prompt to ask if they want to play again
    
    
    
}


play();
