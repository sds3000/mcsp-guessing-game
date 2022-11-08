// This is your main function that runs when the page loads
let highScore = {};
/** 
    this starts the game
    */
function play() {
  // RNGesus for number to guess
  let secret_Number = Math.floor(Math.random() * 10 + 1);
  console.log(secret_Number);
  //empty array to log all guesses
  let prevGuess = [];
  //counts number of guesses to win
  let count = 1;
  //prompts player for his name
  let user = prompt("What's your name?");
  
  //while loop to keep asking for guesses
  while (true) {

    //prompts the player to guess a number
    let player = prompt("What's your guess?"),
      guess = Number(player);

    //pushes guesses into empty array
    prevGuess.push(guess);

    //breaks if press cancel or escape
    if (player === null) {
      alert("Goodbye");
      break;
    }

    //if over number, tells player lower
    if (guess > secret_Number) {
      count++;
      alert(`Sorry ${user}, guess lower`);

      //if lower than number tells player higher
    } else if (guess < secret_Number) {
      count++;
      alert(`Sorry ${user}, guess higher`);

      
    } else {
      //creates a new object key in empty object highscore and assigns it the number of prev guesses. also ooverites user's old score
      highScore[user] = count;

      //determines if user has played before
      if (highScore[user] === undefined) {
        
        alert(`You got it!! it took you ${count} guesses`);
        
      } else {
        let prevAttempts = highScore[user],
          diff = prevAttempts - count;
        if (diff < 0) {
          alert(
            `That's Correct ${user}! You did better in your last game by ${Math.abs(diff)} fewer guesses.`);
        } else if (diff > 0) {
          alert(`That's Correct ${userName}! And you beat your previous attempt by ${diff} fewer guesses!`);
        } else {
            alert(`That"s Correct ${user}! You tied your previous attempt.`);
        }
      }
      //prompts to ask if they want to play again
      let ans = prompt("do you want to play again?");
      console.log(ans)
      //conditionals for no and yes
      if (ans.toLowerCase === 'yes') {
        play()
      
      } else {
        console.log(2)
        alert("thanks for playing");
        break;
      }
    }
  }
}

function playAgain() {
  //prompt to ask if they want to play again
}

play();
