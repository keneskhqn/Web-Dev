let sayHi = function() {
  alert( "Hello" );
};
let sayHi1 = function() { // (1) create
  alert( "Hello" );
};

let func = sayHi1;  //(2)
// ...

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "You agreed." );
}
function showCancel() {
  alert( "You canceled the execution." );
}
// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);

let age2 = prompt("What is your age?", 18);

let welcome = (age2 < 18) ?
  function() { alert("Hello!"); } :
  function() { alert("Greetings!"); };

welcome();

let ac = 2 + 2;
//The switch statement
switch (ac) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too big' );
    break;
  default:
    alert( "I don't know such values" );
}

let ad = 3;

switch (ad) {
  case 4:
    alert('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}

//Functions 
function showMessage(){
    alert('Hello sary ');
}
showMessage();

function showMessage() {
  let message = "Hello, I'm JavaScript!"; // local variable
  alert( message );
}
showMessage();

let userName = 'John';
function showMessage() {
  let message = 'Hello, ' + userName;
  alert(message);
}
showMessage();

function showMessage(from, text) {
  alert(from + ': ' + text);
}
showMessage('Ann', 'Hello!'); 
showMessage('Ann', "What's up?");

function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm('Do you have permission from your parents?');
  }
}

let age = prompt('How old are you?', 18);
if ( checkAge(age) ) {
  alert( 'Access granted' );
} else {
  alert( 'Access denied' );
}

function checkAge(age){
    if(age >= 18){
        return true;
    }
    else
        return confirm('Do u have permission from yo parents?');
}

let age1 = prompt('How old are ya', '');

if(checkAge(age1)){
    alert('Acces granted');
}
else
    alert('Acces denied');
