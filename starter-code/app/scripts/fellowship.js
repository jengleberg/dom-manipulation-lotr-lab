console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
  // create a section tag with an id of middle-earth

  var middleEarth = document.createElement('section');
  middleEarth.id = "middle-earth";


  // inside, add each land as an article tag

for (var i = 0, len = lands.length; i < len; i++) {
  var land = document.createElement('article');

  // inside each article tag include an h1 with the name of the land

var h1 = document.createElement("h1");
var textNode = document.createTextNode(lands[i]);
h1.appendChild(textNode);
land.appendChild(h1);
middleEarth.appendChild(land);

}

  // append middle-earth to your document body
  
 body.appendChild(middleEarth);
  

}

makeMiddleEarth();


// Part 2

var theShire = body.querySelectorAll('article')[0];
var rivendell = body.querySelectorAll('article')[1];
var mordor = body.querySelectorAll('article')[2];

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit

  var hobbitList = document.createElement("ul");
  for (var i = 0; i < hobbits.length; i++) {
    var hobbit = document.createElement("li");
    hobbit.className = "hobbit";
    var textNode = document.createTextNode(hobbits[i]);
    hobbit.appendChild(textNode);
    hobbitList.appendChild(hobbit);
  }

theShire.appendChild(hobbitList);

  
  
}

 makeHobbits();

// Part 3

var frodo = body.querySelectorAll("li")[0];


function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  var theRing = document.createElement("div");
  theRing.id = "the-ring";
  // give the div a class of 'magic-imbued-jewelry'
  theRing.className = "magic-imbued-jewelry";
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  theRing.addEventListener('click', nazgulScreech);
    function nazgulScreech() {
      document.getElementById("nazgul-screech").play();
    }
  // add the ring as a child of Frodo
  frodo.appendChild(theRing);
}

keepItSecretKeepItSafe();

// Part 4


function makeBuddies() {
  // create an aside tag
  var aside = document.createElement('aside');
  // attach an unordered list of the 'buddies' in the aside
  var buddyList = document.createElement("ul");
  for (var i = 0; i < buddies.length; i++) {
    var buddy = document.createElement("li");
    buddy.textContent = buddies[i];
    buddyList.appendChild(buddy);
  }
  // insert your aside as a child element of rivendell
  aside.appendChild(buddyList);
  rivendell.appendChild(aside);
}

makeBuddies();

// Part 5

var strider = rivendell.querySelectorAll("li")[3];

function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  strider.textContent = 'Aragon';
}

beautifulStranger();

// Part 6 
var hobbits = theShire.querySelector('ul');

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  rivendell.appendChild(hobbits);
}
leaveTheShire();


// Part 7


var fellowshipMembers = rivendell.querySelectorAll('li');

function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  var theFellowship = document.createElement('div');
  theFellowship.setAttribute('id', 'the-fellowship');
  for(var i = 0, len = fellowshipMembers.length; i < len; i++){
    theFellowship.appendChild(fellowshipMembers[i]);
    // alert(fellowshipMembers[i].textContent + ' has joined the fellowship!');
  }
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  rivendell.appendChild(theFellowship);
}

forgeTheFellowShip();


// Part 8


var gandalf = fellowshipMembers[0];

function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  gandalf.textContent = 'Gandalf the White';
  // apply style to the element
  gandalf.style.border = '3px solid gray';
  // make the background 'white', add a grey border
  gandalf.style.backgroundColor = 'white';
}

theBalrog();


// Part 9

var boromir = fellowshipMembers[4];

function hornOfGondor() {
  alert('the horn of gondor has blown');
  // pop up an alert that the horn of gondor has been blown
  // put a linethrough on boromir's name
  boromir.style.textDecoration = 'line-through';
  // Boromir's been killed by the Uruk-hai!
  // Remove Boromir from the Fellowship
  boromir.parentNode.removeChild(boromir);

}

hornOfGondor();



// Part 10

var sam = fellowshipMembers[6];

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  mordor.appendChild(frodo);
  mordor.appendChild(sam);
  var mountDoom = document.createElement('div');
  mountDoom.setAttribute('id', 'mount-doom');
  mordor.appendChild(mountDoom);
  // add a div with an id of 'mount-doom' to Mordor
}

itsDangerousToGoAlone();


// Part 11

var gollum, theRing;

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  gollum = document.createElement('div');
  gollum.setAttribute('id', 'gollum');
  theRing = frodo.querySelector('#the-ring');
  gollum.appendChild(theRing);
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
  var mountDoom = mordor.querySelector('#mount-doom');
  mountDoom.appendChild(gollum);
}

weWantsIt();


// Part 12

function thereAndBackAgain() {
  gollum.parentElement.removeChild(gollum);
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  var hobbitUL = document.createElement('ul');
  var hobbits = body.querySelectorAll('.hobbit');
  for(var i = 0, len = hobbits.length; i < len; i++){
    hobbitUL.appendChild(hobbits[i]);
  }
  theShire.appendChild(hobbitUL);
  // Move all the hobbits back to the shire
}

thereAndBackAgain();