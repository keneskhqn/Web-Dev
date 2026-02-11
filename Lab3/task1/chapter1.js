"use strict";

alert('hello');
alert('World');
alert(3+
1 
+ 2);
let message;
message = 'Hello';

let user = 'John';

message = 'World';

const mybirthday = '17.05.2007';
// const age = someCode(mybirthday);

alert(message);

//Data Types
message = 123456;
alert('Hello');
alert(1 / 0); 
console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 17); 


let str = "Hello";
let phrase = `Hello, ${str}`;
alert(phrase);

let nameFieldChecked = true;
let ageFieldChecked = false;

typeof phrase;

//Interaction: alert. prompt, confirm
alert("Hello");
let result = prompt("Salam aleikum", []);
alert(result);

let test = prompt("Test", '');

let conf = confirm("Are you satisfied");
alert(conf);

//Type conversions
let value = true;
alert(typeof value);

value = String(value);
alert(typeof value);

alert( "6" / "2" );

alert( Number("   123   ") );
alert( Number("123z") );     
alert( Number(true) );       
alert( Number(false) ); 

//Basic operators, maths
let x = 1;

x = -x;
alert( x ); // -1, unary negation was applied

let z = 1, y = 3;
alert( y - z ); // 2, binary minus subtracts values

alert( 5 % 2 ); // 1, the remainder of 5 divided by 2

alert( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
alert( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)

let s = "my" + "string";
alert(s);

alert(2 + 2 + '1' ); // "41" and not "221"

//Comparisons
alert( 2 > 1 );  // true (correct)
alert( 2 == 1 ); // false (wrong)
alert( 2 != 1 ); // true (correct)

let resul = 5 > 4; // assign the result of the comparison
alert( resul ); // true

alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true

let a = 0;
alert( Boolean(a) ); // false

let b = "0";
alert( Boolean(b) ); // true

alert(a == b); // true!
alert( 0 === false ); // false, because the types are different

//Conditional branching: if, '?'
let year = prompt('Year Conor McGregor became ufc champ?', '');
if(year == 2015){
    alert('Correct');
    alert('You are not glore');
}

let year1 = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year1 == 2015) {
  alert( 'You guessed it right!' );
} else {
  alert( 'How can you be so wrong?' ); // any value except 2015
}

let sm2 = prompt('How old ar ya', '');
let sm3 = sm2 > 18 ? 'You are not a kid' : 'You are a kid';
alert(sm3);

//Logical operators
alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false

if (1 || 0) { // works just like if( true || false )
  alert( 'truthy!' );
}

let hour = 9;

if (hour < 10 || hour > 18) {
  alert( 'The office is closed.' );
}
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  alert( 'The office is closed.' ); // it is the weekend
}

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

alert( firstName || lastName || nickName || "Anonymous");

alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false

let minute = 30;

if (hour == 12 && minute == 30) {
  alert( 'The time is 12:30' );
}

result = !value;

alert( !true ); // false
alert( !0 ); // true

//Nullish coalescing operator '??'
result = (a !== null && a !== undefined) ? a : b;

let user4 = "John";
alert(user4 ?? "Anonymous"); 

let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0

let height11 = null;
let width = null;

// important: use parentheses
let area = (height11 ?? 100) * (width ?? 50);

alert(area); // 5000


//Loops: while and for
while (condition) {
  // code
  // so-called "loop body"
}
let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  alert( i );
  i++;
}

let i2 = 3;
while (i2) { // when i becomes 0, the condition becomes falsy, and the loop stops
  alert( i );
  i--;
}

for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
  alert(i);
}
let sum = 0;

while (true) {
  let value = +prompt("Enter a number", '');
  if (!value) break; // (*)
  sum += value;
}
alert( 'Sum: ' + sum );

for (let i = 0; i < 10; i++) {
  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;
  alert(i); // 1, then 3, 5, 7, 9
}

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Value at coords (${i},${j})`, '');
  }
}
alert('Done!');

//The switch statement
let ac = 2 + 2;

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


//Functions expressions
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


//Arrow functions, the basics
let sum1 = (a, b) => alert(a+ b);
sum1(4, 7);

let age4 = prompt('What is your age? ', '');

let welcome1 = (age < 18) ?
() => alert('Greeting!') :
() => alert('Hello!');

welcome1();

function ask(question, yes, no){
    if(confirm(question)) yes();
    else no();
}

ask('Are you older 18',
   function() {alert('Greeting');},
   function() {alert('Hello');}
);

//JavaScript specials
alert('Hello');
alert('World');

alert("There will be an error after this message")
[1, 2].forEach(alert)

let x1 = 5;
x1 = "John";


typeof null == "object" // error in the language
typeof function(){} == "function"

userName = prompt("Your name?", "Alice");
let isTeaWanted = confirm("Do you want some tea?");

alert( "Visitor: " + userName ); // Alice
alert( "Tea wanted: " + isTeaWanted ); 

alert( '1' + 2 ); // '12', string
alert( 1 + '2' ); // '12', string

let age5 = prompt('Your age?', 18);

switch (age5) {
  case 18:
    alert("Won't work"); // the result of prompt is a string, not a number
    break;

  case "18":
    alert("This works!");
    break;

  default:
    alert("Any value not equal to one above");
}

