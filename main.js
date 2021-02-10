'use strict';
let score = 0 ;
let userName = prompt(' enter your name please');
alert(' hi ' + userName);
alert(' you are welcome');
console.log(userName);
//Q 1
function question1 () {
  let color = prompt(' my favorite color is pink ?');
  if (color.toLowerCase() === 'yes' || color.toLowerCase() === 'y') {
    alert('that it\'s right');
    score++;
  // console.log( 'that it\'s right'  );
  }
  else if (color.toLowerCase() === 'no' || color.toLowerCase() === 'n') {
    alert('that it\'s wrong');
  //console.log ( ' that it\'s wrong'  );
  }
  else {
    alert(' please answer yes or no');
  }
}
question1 ();

//Q2
function question2() {

  let age = prompt(' my age is 25?');

  if (age.toLowerCase() === 'yes' || age.toLowerCase() === 'y') {
    alert('that it\'s right');
    score++;
  //console.log( 'that it\'s right'  );
  }
  else if (age.toLowerCase() === 'no' || age.toLowerCase() === 'n') {
    alert(' that it\'s wrong');
  //console.log ( ' that it\'s wrong'  );
  }
  else {
    alert(' please answer yes or no');
  }
}

question2 ();
//Q3
function question3() {


  let namee = prompt(' my name is layan ?');
  if (namee.toLowerCase() === 'yes' || namee.toLowerCase() === 'y') {
    alert('that it\'s right');
    score++;
  //console.log( 'that it\'s right'  );
  }
  else if (namee.toLowerCase() === 'no' || namee.toLowerCase() === 'n') {
    alert(' that it\'s wrong');
  //console.log ( ' that it\'s wrong'  );
  }
  else {
    alert(' please answer yes or no');
  }
}

question3();
//Q4
function question4() {
  let dadName = prompt(' my dad name is jamil ?');

  if (dadName.toLowerCase() === 'yes' || dadName.toLowerCase() === 'y') {
    alert('that it\'s right');
    score++;
  //console.log( 'that it\'s right'  );
  }
  else if (dadName.toLowerCase() === 'no' || dadName.toLowerCase() === 'n') {
    alert(' that it\'s wrong');
  // console.log ( ' that it\'s wrong'  );
  }
  else {
    alert(' please answer yes or no');
  }
}
question4 ();
//Q5
function question5() {


  let mumName = prompt(' my mum name is lina ?');
  if (mumName.toLowerCase() === 'yes' || mumName.toLowerCase() === 'y') {
    alert('that it\'s right');
    score++;
  //console.log( 'that it\'s right'  );
  }
  else if (mumName.toLowerCase() === 'no' || mumName.toLowerCase() === 'n') {
    alert(' that it\'s wrong');
  //console.log ( ' that it\'s wrong'  );
  }
  else {
    alert(' please answer yes or no');

  }
}
question5 ();


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
