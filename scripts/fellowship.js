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
var body = document.body;
var section = '<section></section>';

function makeMiddleEarth() {
  $('body').append(section)
  $('section').attr('id', 'middle-earth');
  $('section').append('<article></article>');
  $('section').append('<article></article>');
  $('section').append('<article></article>');
  $('article:nth-child(1)').append('<h1>' + lands[0] + '</h1>');
  $('article:nth-child(2)').append('<h1>' + lands[1] + '</h1>');
  $('article:nth-child(3)').append('<h1>' + lands[2] + '</h1>');

 //   var middleEarth = $(section);
 //   middleEarth.attr('id','middle-earth');
 //   $(body).append(middleEarth);
 
 //     $('#middle-earth').append('<article><h1>'+land+'</h1></article>');
 //   });
 // }

}
 
makeMiddleEarth();

function makeHobbits(){
  $('article:nth-child(1)').append('<ul></ul>');
   hobbits.forEach(function(hobbit){
      $('ul').append('<li class="hobbit">' + hobbit + '</li>');
    })
}

makeHobbits();


function keepItSecretKeepItSafe(){
  $('.hobbit:nth-child(1)').append('<div id="the-ring" class="magic-imbued-jewelry"></div>');
 
}

keepItSecretKeepItSafe();


function makeBuddies(){
  $('article:nth-child(2)').append('<aside><ul></ul></aside>');
    buddies.forEach(function(buddy){
      $('aside ul').append('<li>' + buddy + '</li>');

    });
}

makeBuddies();


function beautifulStranger(){
  $('li').eq(7).text('Aragorn');
  
}

beautifulStranger();

function leaveTheShire(){
  $('aside ul').append($('article ul li'));
}

leaveTheShire();


function forgeTheFellowship() {
  $('aside').append('<div id="the-fellowship"></div>');
  $('aside ul li').each(function(i,item){
    $('#the-fellowship').append(item);
  })
}

forgeTheFellowship();


function theBalrog(){
  $('aside ul li').eq(4).text('Gandalf the White');
    $('aside ul li').eq(4).css({'backgroundColor': 'white', 'border':'2px solid grey'});
}

function hornOfGondor(){
  function hornOfGondor() {
   alert('The horn of Gondor has been blown!');
  $('aside ul li').eq(8).remove();
}
hornOfGondor();

function itsDangerousToGoAlone() {
 itsDangerousToGoAlone();
$('article').eq(2).append($('aside ul li').eq(0));
   $('article').eq(2).append($('aside ul li').eq(0))
   $('article').eq(2).append('<div id="mount-doom"></div>');
 }
}


function weWantsIt() {
$('article').eq(2).append('<div id="gollum"></div>');
   $('#gollum').append($('#the-ring'));
   $('#mount-doom').append($('#gollum'));
}

weWantsIt();

function thereAndBackAgain(){
   $('#gollum').remove();
   $('article').eq(0).append($('.hobbit'));
 }

thereAndBackAgain();
