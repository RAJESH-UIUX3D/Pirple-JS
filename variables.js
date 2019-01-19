'let'
Keyword 'let' was introduced in ES6. 
It provides block scope variables. 
Scope of a variable declared using 'let' inside a block of code is limited to that block.
Variable declared using 'let' can be reassigned.

Syntax:
let <variable name> = <value>;

Eg:
let x = 0;
function letTest(){
  let x = 10;
  return x;
}
console.log(letTest());
console.log(x); 

Output:
10
0

------------------------------------------------------------------------------------------------------

'const'
Keyword 'const' was introduced in ES6.
Constants declared using 'const' is similar to variables declared using 'let'.
But Constant values cannot be reassigned further.
Block scope of 'const' is similar to that of 'let'.

Syntax:
const <constant ref> = <value>;

Eg:
const x = 10;
const y = 5;
function constTest(){
  const x = 20;
  return x;
}
console.log(x);
console.log(constTest());
console.log(y++);

Output:
10
20
"uncaught TypeError: Assignment to constant variable"

------------------------------------------------------------------------------------------------------

