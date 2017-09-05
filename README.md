Tic Tac Toe

https://jennywy.github.io/tictactoe/


<h1>Technologies Used</h1>
Bootstrap for SCSS
jQuery
Javascript
AJAX


<h1>Development Process</h1>

<h2>Description of files:</h2>
index.html is the main file that contains the architecture of the board
index.scss contains styling for index.html
index.js contains all of the event listeners and handlers for events.js
events.js contains game logic actions, authorization events and game events. It points to api.js, which makes the ajax calls for the authorization and game actions. It also points to a ui page that contains the promises and catches upon the success or failure of those calls.

Day 0 and 1: Panic and cry a lot and go down a rabbit hole trying to figure out how to check for a winner and then have other people take pity on you to help you start on the game logic.

I spent the first day trying to find out how to check for a match. I had set up an array of arrays containing the coordinates of all possible matches, and had wanted to compare an array player's moves against all the elements in the winning matches array. That proved to be really challenging. I could not figure out how to check a for a winner after each move, and it was made especially harder since I didn't have any of the other game logic to support expanding this function.

I was overwhelmed with the game logic, and didn't have a clear understanding of how to use jQuery to edit the text in the div or how to use it to take user actions and store it in an array I could access while writing the rest of my game logic.

At this point I asked the consultants and my much smarter classmates for help and they walked me through how they approached starting the game logic and how to use jQuery to alter the text that appears in the div using the div's data-id, and push the move into an array of gameMoves.

They also helped me with a check function. My plan to use array methods was obviously not going to work and was something I had poorly understood myself.

I realized that it was matching all null values to each other, so I added another condition to my check function to take non-null values

The other working days were a blur of caffeine and not sleeping

I created the sign in, out, password change, create a new game, using a previous in class exercise on AJAX and token authorization. This was all fairly straightforward until I got to the patch request.

Trying to work on my update/patch request after every move function was especially challenging and I had a lot of outside help creating this function. Previous requests only demanded that I store the requests to access it, but I was now trying to feed the request some data about my board. I realized very late that I wasn't storing the object returned.

I realized I had to pass an object that contains the data of the board's status. I realized I had to structure the object as according the API documentation, and feed the the information from my board as the moves were occuring.

I realized (after long consultation with a professional software tester) I could use my game logic to satisfy the value and the index perimeters if I rewrote some of my original game logic. Previously I had hardcoded whose turn it was without declaring a player. The text would just turn over X or O depending on the turn count... But if I created a proper player variable in my if statement for the game function I could use it as a perimeter for my updateMove.

Then I had another problem where my game was not ending in the right place because of a change I made to that game logic. After I got a match in the DOM, I could play the game for one more move before the game completed. My checkWinner function was now out of sync with the game actions. I didn't know how or why, so through experimentation I placed my checkWinner function in different parts of the game function. With a lot of experimenting with the order of my functions, I finally had it in the right place in the right order.

I also realized that my reset button cleared the DOM but it did not create a new game. I called onCreate on my reset, but kept running into an error that didn't recognize preventDefault(). I realized that it was because my button was a button and not a form, and refreshing was a default action of forms and not buttons. I set reset as a form, but ran into the same issue. I realized it was because there were two preventDefaults, and the onCreate was looking for another form to be submitted to prevent the refresh action of. I took the body of my onCreate action, and realized that my reset function did more than my onCreate function and made onCreate obsolete.

<h1>Unsolved Problems</h1>
<ul>
<li> If a player clicks the board after the game is over, the message box will report 'Pick another cell'</li>
<li>Separation of concerns. The events page includes game logic and authorization events. I had attempted to and failed once, and kept it on the same page.</li>
<li>Multiplayer works only in the same window, and requires</li>
</ul>

<h1>Wireframes</h1>
I ended up not abiding my by original wireframe, because I ran out of time to style. I also did not account for the authorization and game actions to retrieve game history in my original wireframe. Below are links to the before, the actual, and the aspirational wireframes. (http://imgur.com/a/KM05a)

<h1>User Stories</h1>
<ul>
<li> As a user, I want to know when the game is won, or drawn after each turn</li>
<li> As a user, I do not want the other player to click over my  moves so I can play a fair game  </li>
<li> As a user, I want to sign up with my email address, pw and pw confirm  </li>
<li> As a user, I want to get an alert when my password is mismatched when I sign in so I can sign in correctly</li>
<li>   As a user, I want to see who wins a game after there’s a match.  </li>
<li> As a user I want to end the game so I can’t click on other empty boxes after there’s a match so I can play again.</li>
<li> As a user, I want to see how many games I've played</li>
</ul>
