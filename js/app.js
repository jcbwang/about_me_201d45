'use strict';

// ////////Ask for name and respond to wether or not they typed an answer.

var userName;

function ask_name (){
  userName = prompt('Hey there, what is your name?');

  if(userName === '') {
    alert('Hi enter key, nice to meet you!!');
  }else{
    alert('Hi ' + userName + ', nice to meet you.');}
  console.log('Asked for name: ' + userName);
}
ask_name();

// // ////////Ask if they want to play a game, respond according list of positive, negative, or other answers.

var validResponse = false;

function playGame(){
  var positiveGame= ['yes','y','sure','of course','okay','ok','k','fine','okie dokie', 'yup','yep','yeah'];

  var negativeGame = ['no','n','no way','no thanks', 'nah','i\'m  good','not really'];

  var game = prompt('Do you want to play a game?');

  var gameAnswer = game.toLowerCase();

  for(var i= 0; i< positiveGame.length ; i ++) {//test for postive or negative answer
    if (gameAnswer === positiveGame[i]){
      alert ('Yay! Let\'s play!');
      console.log(userName + ' wants to play!');
      validResponse = true;
    } else if( gameAnswer === negativeGame[i]){
      alert('Too bad, let\'s play!');
      console.log(userName + ' did not want to play but we are gonna play anyway.');
      validResponse = true;
    }
  }
  if (!validResponse){//reply if answer did not match postive/negative
    alert('Weird response... but let\'s play anyway!');
    console.log('Asked ' + userName + 'if they wanted to play and they said: ' + gameAnswer);
  }
}
playGame();

/////////Ask if they own any pets, respond to yes/ no and log to console, update counter.

var correctAnswersCounter = 0;

function pet_question(){
  var pet = prompt('Do you own any pets?');

  var petResponse = pet.toLowerCase();

  var positivePet = ['yes','some','i have some','i have a few','1','2','3','4','5','i used to','yep','yup','y','a few','yeah'];

  var negativePet = ['nope','no','nah','never','n','0','i don\'t like them','i don\'t want one','don\'t like','don\'t want','none'];

  validResponse = false;

  for(var j = 0; j < positivePet.length; j++){//test for positive/negative answer
    if(petResponse === positivePet[j]){
      correctAnswersCounter++;
      alert('Awesome! I own a pet husky!');
      console.log(userName + ' owns a pet!');
      validResponse = true;
    }else if(petResponse === negativePet[j]){
      alert('You should definitely get one, ' + userName + '. Pets are really awesome.');
      console.log(userName + 'does not own any pets.');
      validResponse = true;
    }
  }
  if(!validResponse){//response if answer doesn't match
    alert('Pets make great companions!');
    console.log('For the pet question, ' + userName + ' entered: ' + petResponse);
  }
  console.log('total correct: ' + correctAnswersCounter);
}

pet_question();

// /////////Ask if they are hungry, respond to yes/ no and log to console, update counter.

function hungry_question(){
  var hungry = prompt('Are you hungry?');

  var hungryResponse = hungry.toLowerCase();

  var positiveHungry = ['kind of','starving','yes','y','a little','sort of','yup','yeah','yep'];

  var negativeHungry = ['nope','just ate','nah','n','eh','no'];

  validResponse = false;

  for(var k = 0; k < positiveHungry.length; k++){
    if(hungryResponse === positiveHungry[k]){
      correctAnswersCounter++;
      alert('*Grrrr grrrr..* do you hear my tummy rumbling? Let\'s go grab some tacos.');
      console.log(userName + ' is hungry too!');
      validResponse = true;
    }else if(hungryResponse === negativeHungry[k]){
      alert('I\'m always hungry...');
      console.log(userName + ' is not hungry.');
      validResponse = true;
    }
  }
  if(!validResponse){
    alert('It\'s taco time!!!');
    console.log(userName + ' entered: ' + hungryResponse);
  }
  console.log('total correct: ' + correctAnswersCounter);
}
hungry_question();

// ////////Ask if they like skiing/snowboarding, respond to yes/ no and log to console, update counter.

function snowboarding(){
  var snow = prompt('Do you like skiing/ snowboarding?');

  var snowResponse = snow.toLowerCase();

  var positiveSnow = ['kind of','yes','y','a little','sort of','yup','yeah','yep','of course','sure'];

  var negativeSnow = ['nope','nah','n','eh','no'];

  validResponse = false;

  for(var l = 0; l < positiveSnow.length; l++){
    if(snowResponse === positiveSnow[l]){
      correctAnswersCounter++;
      alert('Awesome, ' + userName + ' it\'s one of my favorite things to do!');
      console.log(userName + ' likes skiing/ snowboarding.');
      validResponse = true;
    }else if(snowResponse === negativeSnow[l]){
      alert('You should try it sometime!');
      console.log(userName + ' is not interested in skiing or snowboarding.');
      validResponse = true;
    }
  }
  if(!validResponse){
    alert('Let it snow, let it snow, let it snow!!! It\'s best to ski/snowboard when there\'s lots of snow');
    console.log(userName + ' entered: ' + snowResponse);
  }
  console.log('total correct: ' + correctAnswersCounter);
}
snowboarding();

// ///////Ask if they like classical music, respond to yes/no and log to console, update counter.

function musicQuestion(){
  var music = prompt('Do you like listening to classical music?');

  var musicResponse = music.toLowerCase();

  var positiveMusic = ['kind of','yes','y','a little','sort of','yup','yeah','yep','sure','a lot'];

  var negativeMusic = ['nope','nah','n','eh','no','boring','nah'];

  validResponse = false;

  for(var m = 0; m < positiveMusic.length; m++){
    if(musicResponse === positiveMusic[m]){
      correctAnswersCounter++;
      alert('Cool, we would get a long well!');
      console.log(userName + ' likes classical music!');
      validResponse = true;
    }else if(musicResponse === negativeMusic[m]){
      alert('BOOOOOOOO');
      console.log(userName + ' does not like classical music.');
      validResponse = true;
    }
  }
  if(!validResponse){
    alert('I\'m not sure what you typed... but I spent a long time typing possible answers and you chose this one to make things difficult.');
    console.log(userName + ' entered: ' + musicResponse);
  }
  console.log('total correct: ' + correctAnswersCounter);
}
musicQuestion();

// /////Ask if they like my questions, respond to yes/ no , record to console, update counter.

function questionsQuestion(){
  var questions = prompt('Do you like my questions?');

  var questionsResponse = questions.toLowerCase();

  var positiveQuestions = ['kind of','yes','y','a little','sort of','yup','yeah','yep','sure','a lot'];

  var negativeQuestions = ['nope','nah','n','eh','no','boring','nah'];

  validResponse = false;

  for(var n = 0; n < positiveQuestions.length; n++){
    if(questionsResponse === positiveQuestions[n]){
      correctAnswersCounter++;
      alert('I\'m glad, ' + userName + '! Let me ask you a few more then!');
      console.log(userName + ' like my questions!');
      validResponse = true;
    }else if(questionsResponse === negativeQuestions[n]){
      alert('Well then... let me ask you a few more questions, then i\'ll leave you alone.');
      console.log(userName + ' didn\'t like my questions.. :(');
      validResponse = true;
    }
  }
  if(!validResponse){
    questions = prompt('Try again. Just a simple yes or no will do!');
    console.log(userName + ' entered: ' + questionsResponse);
  }
  console.log('total correct: ' + correctAnswersCounter);
}
questionsQuestion();

// //******** lab 3 starts here ********//

// //Ask how many hours of sleep i got last night (based on random number), respond with 'higher/lower', log to console, update counter.

function sleepQuestion(){
  var sleep = prompt('How many hours of sleep do you think I got last night?');

  console.log('Guess number 1: ' + sleep);

  var correctNumOfHours = 6;

  for(var numOfTries = 1; numOfTries < 4; numOfTries++){ //test if user gets answer within 4 tries, respond according to their answer.
    if (sleep == correctNumOfHours){//only works with == and not ===.
      alert('You are correct!');
      correctAnswersCounter ++;
      console.log('Number of tries: ' + numOfTries + '. Number of correct Answers: ' + correctAnswersCounter);
      break;
    } else if (sleep < correctNumOfHours){
      sleep = prompt('Think Higher!');
    } else if(sleep > correctNumOfHours){
      sleep = prompt('Think Lower!');
    }else{
      sleep = prompt('Please enter a number!');
    }
    console.log('Guess number ' + (numOfTries + 1) + ': ' + sleep ); // log to each time
  }
  //// log to console even if answers are wrong. Alert when no guesses are correct
  if (numOfTries == 4 && sleep != correctNumOfHours){
    alert('Sorry you\'re out of tries!');
    console.log('Number of tries: ' + numOfTries + '. Number of correct Answers: ' + correctAnswersCounter);
  }else if(numOfTries == 4 && sleep == correctNumOfHours){
    alert('You are correct!');
    console.log('Number of tries: ' + numOfTries + '. Number of correct Answers: ' + correctAnswersCounter);
  }
}
sleepQuestion();

// ///////////Ask if they know what countries i've lived in.

function countryQuestion(){

  var country = prompt('Can you guess a country i\'ve lived in besides the U.S?');

  var countryFinal = country.toLowerCase();

  var myCountries = ['new zealand' , 'taiwan', 'singapore'];

  var counter = 1;

  do{
    for(var r = 0; r < myCountries.length; r++){
      if(countryFinal === myCountries[r] && counter === 6){
        correctAnswersCounter++;
        alert('You got it!');
        console.log('Guessed: ' + country);
        validResponse = true;
        counter++;
        break;
      }
    }
    for(r = 0; r < myCountries.length; r++){
      if(countryFinal === myCountries[r] && counter < 6){
        correctAnswersCounter++;
        prompt('You got it! Can you guess another one?');
        console.log('Guessed: ' + country);
        validResponse = true;
        counter++;
        break;
      }
    }
    for(r = 0; r < myCountries.length; r++){
      if(countryFinal !== myCountries[r]){
        country = prompt('Sorry, try again!');
        console.log('Guessed: ' + country);
        validResponse = true;
        counter++;
        break;
      }
    }
  } while (counter < 6);

  alert('The correct answers were: New Zealand, Taiwan, and Singapore!:)');
  console.log('total correct: ' + correctAnswersCounter);
}
countryQuestion();

/////////calculate compatibility by testing out score to customize sentence and calculate percentage.

function compatibility(){
  var sentenceStarter;
  var percentage;

  if (correctAnswersCounter === 0){
    sentenceStarter = 'How sad, ';
    percentage = '0';
  }
  else if (correctAnswersCounter === 1){
    sentenceStarter = 'How sad, ';
    percentage = '11';
  }
  else if (correctAnswersCounter === 2){
    sentenceStarter = 'How sad, ';
    percentage = '22';
  }
  else if (correctAnswersCounter === 3){
    sentenceStarter = 'How sad, ';
    percentage = '33';
  }
  else if (correctAnswersCounter === 4){
    sentenceStarter = 'Could be better, ';
    percentage = '44';
  }
  else if (correctAnswersCounter === 5){
    sentenceStarter = 'Not bad, ';
    percentage = '56';
  }
  else if (correctAnswersCounter === 6){
    sentenceStarter = 'Good, ';
    percentage = '67';
  }
  else if (correctAnswersCounter === 7){
    sentenceStarter = 'Great, ';
    percentage = '78';
  }
  else if (correctAnswersCounter === 8){
    sentenceStarter = 'Awesome, ';
    percentage = '89';
  }
  else if (correctAnswersCounter === 9){
    sentenceStarter = 'Amazing, ';
    percentage = '100';
  }

  //display message
  var message = (sentenceStarter + userName + ', we are ' + percentage + '% compatible!' + ' You got ' + correctAnswersCounter + ' out of 9 questions right.');

  alert(message);
}
compatibility();















