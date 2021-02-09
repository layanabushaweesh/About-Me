'use strict';
let userName = prompt(' enter your name please');
alert(" hi " + userName);
alert(' you are welcome');
console.log(userName);
//Q 1

let color = prompt(' my favorite color is pink ?');
if (color.toLowerCase() === 'yes' || color.toLowerCase() === 'y') {
  alert('that it\'s right');
  // console.log( 'that it\'s right'  );
}
else if (color.toLowerCase() === 'no' || color.toLowerCase() === 'n') {
  alert('that it\'s wrong');
  //console.log ( ' that it\'s wrong'  );
}
else {
  alert(' please answer yes or no');
}
//Q2
let age = prompt(' my age is 25?');

if (age.toLowerCase() === 'yes' || color.toLowerCase() === 'y') {
  alert('that it\'s right');
  //console.log( 'that it\'s right'  );
}
else if (age.toLowerCase() === 'no' || color.toLowerCase() === 'n') {
  alert(' that it\'s wrong');
  //console.log ( ' that it\'s wrong'  );
}
else {
  alert(' please answer yes or no');
}
//Q3
let name = prompt(' my name is layan ?');
if (name.toLowerCase() === 'yes' || color.toLowerCase() === 'y') {
  alert('that it\'s right');
  //console.log( 'that it\'s right'  );
}
else if (name.toLowerCase() === 'no' || color.toLowerCase() === 'n') {
  alert(' that it\'s wrong');
  //console.log ( ' that it\'s wrong'  );
}
else {
  alert(' please answer yes or no');
}
//Q4
let dadName = prompt(' my dad name is jamil ?');
if (dadName.toLowerCase() === 'yes' || color.toLowerCase() === 'y') {
  alert('that it\'s right');
  //console.log( 'that it\'s right'  );
}
else if (dadName.toLowerCase() === 'no' || color.toLowerCase() === 'n') {
  alert(' that it\'s wrong');
  // console.log ( ' that it\'s wrong'  );
}
else {
  alert(' please answer yes or no');
}
//Q5
let mumName = prompt(' my mum name is lina ?');
if (mumName.toLowerCase() === 'yes' || color.toLowerCase() === 'y') {
  alert('that it\'s right');
  //console.log( 'that it\'s right'  );
}
else if (mumName.toLowerCase() === 'no' || color.toLowerCase() === 'n') {
  alert(' that it\'s wrong');
  //console.log ( ' that it\'s wrong'  );
}
else {
  alert(' please answer yes or no');
}


//Q6
function guessFavNumber() {
  var counter = 1;
  if (counter === 5) {
      alert('Sorry you run out of guesses');
  }
  while (counter < 5 && number !==33) {
      var number = parseInt(prompt('Guess my favorite number'));
      if (number > 33) {
          alert('You guessed too high! Guess again');
          counter++;
      } else if (number < 33) {
          alert('You guessed too low! Guess again');
          counter++;
      }
  }
  if (number === 33) {
      alert('That is correct! My favorite number is 33!');
      score++;
      counter = 5;
  }
}

guessFavNumber();


// Question 7

function questionSeven() {
  var userFavFruit = ['apple', 'strawberry', 'orange', 'grape', 'watermelon'];

  for (var i = 0; i < 6; i++) {
      var userAnsw = prompt('Can you guess my favorite fruit?');
      var guess = userAnsw.toLowerCase();

      for (var j = 0; j < userFavFruit.length; j++){
          if (guess === userFavFruit[j]) {
              alert('Congrats you got it right!!!');
              score++;
              i = 6;
              break;
          }
      }
      if (i !==6){
          alert('Sorry wrong answer, try again');
      }
  }
}

questionSeven();

alert('My favorite fruits are: apple, strawberry, orange, grape and watermelon');

alert('Good Job!... You got ' + score + ' correct answers!');