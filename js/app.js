'use strict';


var correctAnswersCounter = 0;

//Ask for name, if no name, ask again. Alert recording to response and log to console.
var userName = prompt('Hey there, what is your name?');

if(userName === '') {
  userName = prompt('Can I please know your name?');
}
alert('Hi ' + userName + ', let\'s play a game!');
console.log('Asked for name: ' + userName);

//Ask if they want to play a game.
var positive= ['yes','y','sure','of course','YES','Y', 'okay','ok'];
var negative = ['no','n','no way','no thanks', 'nah'];
console.log('Asked if they want to play a game: ' )

//Ask for favorite color, respond according to response and log to console, update counter.
var color = prompt('What\'s your favorite color?');
var colorResponse = color.toLowerCase();
if (colorResponse === 'blue') {
  alert('Cool, ' + userName +', blue is my favorite color too!');

} else {
  alert('Ehh, that color is okay..');
}
console.log('Asked for favorite color: ' + color);


if (colorResponse === 'blue'){
  correctAnswersCounter ++;
  console.log('Number of correct answers: ' + correctAnswersCounter);
}

//Ask if they have any pets, respond to yes/ no and log to console, update counter.
var pet = prompt('Do you have any pets?');
var petResponse = pet.toLowerCase();
if (petResponse === 'yes' || petResponse === 'y') {
  alert('Awesome! Me too, I have a husky!');
} else{
  alert('You should definitely get one, ' + userName + '. Pets are really awesome.');
}
console.log('Asked if they have any pets: ' + pet);

if (petResponse === 'yes'){
  correctAnswersCounter ++;
  console.log('Number of correct answers: ' + correctAnswersCounter);
}

//Ask if they are hungry, respond to yes/ no and log to console, update counter.
var hungry = prompt('Are you hungry?');
var hungryResponse = hungry.toLowerCase();
if (hungryResponse === 'yes' || hungryResponse === 'y') {
  alert('So am I, ' + userName + ' I haven\'t eaten all day!! Let\'s go grab some tacos.');
} else{
  alert('Oh really..? I\'m always hungry.');
}
console.log('Asked if they are hungry: ' + hungry);

if (hungryResponse === 'yes'){
  correctAnswersCounter ++;
  console.log('Number of correct answers: ' + correctAnswersCounter);
}

//Ask if they like snow, respond to yes/ no and log to console, update counter.
var snow = prompt('Do you like snow?');
var snowResponse = snow.toLowerCase();
if (snowResponse === 'yes' || snowResponse ==='y') {
  alert('Nice, let\'s go skiing in Canada! :)');
} else{
  alert('Then how about we go to the beach in Cancun?');
}
console.log('Asked if they like snow: ' + snow);

if (snowResponse === 'yes'){
  correctAnswersCounter ++;
  console.log('Number of correct answers: ' + correctAnswersCounter);
}

//Ask if thye like classical music, respond to yes/no and log to console, update counter.
var music = prompt('Do you like listening to classical music?');
var musicResponse = music.toLowerCase();
if (musicResponse === 'yes' || musicResponse === 'y'){
  alert('Me too! Some of my favorite composers are Rachmaninoff and Prokofiev.');
} else{
  alert('How come?? it\'s so great!!');
}
console.log('Asked if they like classical music: '+ musicResponse);

if (musicResponse === 'yes'){
  correctAnswersCounter ++;
  console.log('Number of correct answers: ' + correctAnswersCounter);
}

//Ask if they like my questions, respond to yes/ no , record to console, update counter.
var questions = prompt('Do you like my questions?');
var questionsResponse = questions.toLowerCase();
if (questionsResponse === 'yes' || questionsResponse === 'y') {
  alert('I\'m glad, ' + userName + '! Let me ask you two more then!');
} else{
  alert('Well then... let me ask you a few more questions, then i\'ll leave you alone.');
}
console.log('Asked if they like my questions: ' + questions);

if (questionsResponse === 'yes'){
  correctAnswersCounter ++;
  console.log('Number of correct answers: ' + correctAnswersCounter);
}

//******** lab 3 starts here ********//


//Ask how many hours of sleep i got last night (based on random number), respond with 'higher/lower', log to console, update counter.
var sleep = prompt('How many hours of sleep do you think I got last night?');

var correctNumOfHours = '7';

console.log('Asked how many hours I slept last night: ' + sleep + ' Guess number: ' + numOfTries);


for(var numOfTries = 1; numOfTries < 4; numOfTries++){ //test if user gets answer within 4 tries, respond according to their answer.
  if (sleep === correctNumOfHours){
    alert('You are correct!');
    correctAnswersCounter ++;
    console.log('Number of tries: ' + numOfTries + '. Number of correct Answers: ' + correctAnswersCounter);
    break;
  } else if (sleep < correctNumOfHours){
    alert('Think higher!');
    sleep = prompt('Guess again!');
  } else if(sleep > correctNumOfHours){
    alert('Think lower!');
    sleep = prompt('Guess again!');}
  console.log('Guess number ' + (numOfTries + 1) + ': ' + sleep ); // log to each time
}

//log to console even if answers are wrong. Alert when no guesses are correct
if (numOfTries === 4 && sleep !== correctNumOfHours){
  alert('Sorry you\'re out of tries!');
  console.log('Number of tries: ' + numOfTries + '. Number of correct Answers: ' + correctAnswersCounter);
}else if(numOfTries === 4 && sleep === correctNumOfHours){
  alert('You are correct!');
  console.log('Number of tries: ' + numOfTries + '. Number of correct Answers: ' + correctAnswersCounter);
}

//Ask if they know what countries i've lived in.

//**Don't understand how to check if the string that user entered matches any of the list items. */


var country = prompt('Can you guess a country i\'ve lived in besides the U.S?');
console.log('Asked if they can guess a country i\'ve lived in besides U.S.: ' + country);

var countryFinal = country.toLowerCase();

var myCountries = ['new zealand' , 'taiwan', 'singapore'];

//first attempt


for(numOfTries = 1; numOfTries < 6; numOfTries++){
  for(var i = 0; i < myCountries.length; i++){
    if (countryFinal === myCountries[i]){
      alert('You got it!!');
      correctAnswersCounter ++;
      console.log('Number of tries: ' + numOfTries + '. Number of correct Answers: ' + correctAnswersCounter);
      break;
    } else{
      country = prompt('Guess again!');
      console.log('Number of tries: ' + numOfTries + '. Number of correct Answers: ' + correctAnswersCounter);
      break;
    }
    // if (numOfTries === 6){
    //   alert('Sorry, you\'re out of tries! The correct answers were: New Zealand, Taiwan, and Singapore!:)');
    //   console.log('Guess number ' + numOfTries + '. Number of correct Answers: ');
    // }
  }
}
alert('Sorry, you\'re out of tries! The correct answers were: New Zealand, Taiwan, and Singapore!:)');
console.log('Guess number ' + numOfTries + '. Number of correct Answers: ');

//Second attempt

// for(numOfTries = 1; numOfTries <6; numOfTries++){
//   if(countryFinal === toString.indexOf(myCountries[0]) || countryFinal === toString.indexOf(myCountries[1]) || countryFinal === toString.indexOf(myCountries[2])){
//     alert('You got it!!');
//     correctAnswersCounter++;
//     console.log('Number of tries: ' + numOfTries + '. Number of correct Answers: ' + correctAnswersCounter);
//   }else{
//     alert('Guess again!');
//     country = prompt('Can you guess a country i\'ve lived in besides the U.S?');
//   }
// }

// if (numOfTries === 6 ){
//   alert('Sorry you\'re out of tries! The correct answers were: New Zealand, Taiwan, and Singapore!');
//   console.log('Number of tries: ' + numOfTries + '. Number of correct Answers: ' + correctAnswersCounter);
// }




//calculate compatibility by testing out score to customize sentence and calculate percentage.

var sentenceStarter;
var percentage;

if (correctAnswersCounter === 0){
  sentenceStarter = 'How sad ';
  percentage = '0';
}
else if (correctAnswersCounter === 1){
  sentenceStarter = 'How sad ';
  percentage = '9';
}
else if (correctAnswersCounter === 2){
  sentenceStarter = 'How sad ';
  percentage = '18';
}
else if (correctAnswersCounter === 3){
  sentenceStarter = 'How sad ';
  percentage = '27';
}
else if (correctAnswersCounter === 4){
  sentenceStarter = 'How sad ';
  percentage = '36';
}
else if (correctAnswersCounter === 5){
  sentenceStarter = 'Not bad ';
  percentage = '45';
}
else if (correctAnswersCounter === 6){
  sentenceStarter = 'Not bad ';
  percentage = '55';
}
else if (correctAnswersCounter === 7){
  sentenceStarter = 'Not bad ';
  percentage = '64';
}
else if (correctAnswersCounter === 8){
  sentenceStarter = 'Pretty good ';
  percentage = '73';
}
else if (correctAnswersCounter === 9){
  sentenceStarter = 'Great ';
  percentage = '81';
}
else if (correctAnswersCounter === 1){
  sentenceStarter = 'Amazing ';
  percentage = '91';
}
else if (correctAnswersCounter === 1){
  sentenceStarter = 'Amazing ';
  percentage = '100';
}

//display message

var message = (sentenceStarter + userName + ', we are ' + percentage + '% compatible!' + ' You got ' + correctAnswersCounter + ' out of 11 questions right.');

alert(message);

















