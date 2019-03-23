/* 
A. [Game data]
1a. Words
- Generate a list of 10 words that will make up the initial set of potential words and store in an array

B. [Game instructions state]
1b. "Press any key to get started!": Game gets activated using a key listening event
2b. "Wins:" Counter that is equal to the number of wins, updated after each win
3b. "Letters already guessed:"" Array with the letters that have been guessed
4b. "Number of guesses remaining:" Counter for the number of guesses the user has remaining

1b. Activating the game
Will be activated by a listening event so that if a user types any key, then the game will start.

When the game "starts," the following occurs (expressed with functions):
- A word is generated from 1a and stored as a var "answer"
- The "answer" is parsed into an array called "answer_arr"
- The word is not displayed to the user
- The length of the word is identified
- An array is created with the number of values equaling the length of the word, with each value equaling "_"

2b. Keeping track of wins and displaying counter
- A counter is created as a var to detect the number of times that a user wins
- A "win" is counted when the "user_word" array is equal to the "answer"
- The win condition is evaluated each time that a user makes a guess (or could be done whenever they get a "hit")

3b. Keeping track of guesses and displaying counter
- When word_complete.length = 
- 

4b. Keeping track of letters guessed and displaying array
- Create a var "user_guesses" that contains an array
- When a user enters a letter, it gets added to this array
- After the letter gets added to the array, it gets updated on the screen
- Once a letter has been guessed, it cannot be guessed again. If the user tries to guess the same letter, they get an alert asking them to make another guess
- When a letter is guessed, it is matched against the "answer_arr" to detect whether the letter is in the array (should return undefined if it's not in the array)
- 

Need to detect the index of each letter. When a character match is performed on the array, a loop function replaces each "_" with the appropriate letter matching the right index.

 */



/* // Let's start by grabbing a reference to the <span> below. */
var userText = document.getElementById("user-text");

/* Next, we give JavaScript a function to execute when onkeyup event fires. */
/* document.onkeyup = function(event) {
  userText.textContent = event.key;
}; */


/* document.onkeypress = function(event) { */
document.onkeyup = function(event) {
    var word_bank = ["zara", "uniqlo", "nike", "everlane"]
    var answer = "zara"
    var answer_arr = [];
    var num_wins = 0;
    var user_guesses = 10;
    

    // Determines which key was pressed.
    var key = event.key;


    // Function to parse the string into an array
    function string_to_array(answer) {
        for(var i = 0; i < answer.length; i++) {
            answer_arr += answer[i];
            console.log(answer_arr);
        }
        console.log(answer_arr);
        alert(answer_arr);
    }

    
}

