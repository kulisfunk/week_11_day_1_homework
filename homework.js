Episode 1

var name = 'Keith';

var printName = function() {
  console.log('My name is ' + name );
};

printName();



answer : "My name is Keith"  console.log prints out name variable which is set to 'Keith'


Episode 2

score = 5;

var result = function() {
  var score = 3;
  return score;
};

console.log(result());

answer: 3 the return statement is within the function where score is changed locally to 3.


Episode 3

var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();

answer: 1: Ducks, 2: Dogs, 3: Lions  inside the listAnimals function myAnimals is set as global variable so the original
array is overwritten.


Episode 4

var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
};

allSuspects();
console.log( 'Suspect three is:' + suspectThree );

answer: 'Suspects include: Jay, Val, Harvey, Rick'         'Suspect three is:Keith' the first console.log is inside
the allSuspects function where locally suspectThree is set to Harvey, the second console.log is outside
of the fucntion so takes the global value for suspectThree which is Keith.

Episode 5

var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};

console.log(detectiveInfo());

answer: 'Poirot' inside detectiveInfo function the name pair in detective is changed to Poirot globally

Episode 6

var murderer = 'rick';

var outerFunction = function() {
  var murderer = 'marc';

  var innerFunction = function() {
    murderer = 'valerie';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);

answer: 'the murderer is valerie' inside innerFunction the global murderer variable is set to valerie. As
this method is called within execution of the outerFunction method, the global is changed to valerie
so the console.log output looks at the global value of murderer.

Episode 7 - Make up your own episode/s!


var characters = [
  { name: 'luke',
    colour: 'blue'
  },
  { name: 'yoda',
    colour: 'green'
  },
  { name: 'vader',
    colour: 'red'
  },
];


var colour = 'amethyst'
function getNewLightsaber(){
  colour = 'purple';
  for (var member of characters){
    if(characters.colour === 'blue'){
       characters.colour = colour;

    }
    console.log("Luke's new lightsaber is " + colour);
  }
}

getNewLightsaber();
