'use strict';
//Ask for name, if no name, ask again. Alert recording to response and log to console.
var name = prompt('Hey there, what is your name?');
if(name === '') {
    var name = prompt('Can I please know your name?');
}
alert('Hi ' + name + ', it\'s nice to meet you!');
console.log('Asked for name: ' + name);

//Ask for favorite color, respond according to response and log to console.
var color = prompt('What\'s your favorite color, ' + name + ' ?');
var colorResponse = color.toLowerCase();
if (colorResponse === 'blue') {
    alert('Cool, ' + name +', blue is my favorite color too!');
} else {
    alert('Ehh, that color is okay..');
}
console.log('Asked for favorite color: ' + color);

//Ask if they have any pets, respond to yes/ no and log to console.
var pet = prompt('Do you have any pets?');
var petResponse = pet.toLowerCase();
if (petResponse === 'yes' || petResponse === 'y') {
    alert('Awesome! Me too, I have a husky!');
} else{
    alert('You should definitely get one, ' + name + '. Pets are awesome really awesome.');
}
console.log('Asked if they have any pets: ' + pet);

//Ask if they are hungry, respond to yes/ no and log to console.
var hungry = prompt('Are you hungry?');
var hungryResponse = hungry.toLowerCase();
if (hungryResponse === 'yes' || hungryResponse === 'y') {
    alert('So am I, ' + name + ' I haven\'t eaten all day!! Let\'s go grab some tacos.');
} else{
    alert('Oh really..? I\'m always hungry.');
}
console.log('Asked if they are hungry: ' + hungry);

//Ask if they like snow, respond to yes/ no and log to console.
var snow = prompt('Do you like snow?');
var snowResponse = snow.toLowerCase();
if (snowResponse === 'yes' || snowResponse ==='y') {
    alert('Nice, let\'s go skiing in Canada! :)');
} else{
    alert('Then how about we go to the beach in Cancun?');
}
console.log('Asked if they like snow: ' + snow);

var music = prompt('Do you like listening to classical music?');
var musicResponse = music.toLowerCase();
if (musicResponse === 'yes' || musicResponse === 'y'){
    alert('Me too! Some of my favorite composers are Rachmaninoff and Prokofiev.');
} else{
    alert('How come?? it\'s so great!!');
}

//Ask if they like my questions.
var questions = prompt('Do you like my questions?');
var questionsResponse = questions.toLowerCase();
if (questionsResponse === 'yes' || questionsResponse === 'y') {
    alert('I\'m glad, ' + name + '! Let\'s hang out again somtime and get to know each other more!');
} else{
    alert('Well then... i\'ll leave you alone. Goodbye ' + name + '!');
}
console.log('Asked if they like my questions: ' + questions);






