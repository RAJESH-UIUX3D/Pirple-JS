'let'
Keyword 'let' was introduced in ES6. 
It provides block scope variables. 
Scope of a variable declared using 'let' inside a block of code is limited to that block.
Variable declared using 'let' can be reassigned.

Syntax:
let <variable name> = <value>;

Eg:
let x = 10;
function letTest(){
  let x = 20;
  return x+=1;
}

console.log(x); 
console.log(letTest());

Output:
10
21

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

'var'
Keyword 'var' declares a variable of any type. We can assign a value to it later.
Unassigned value of a variable declared using 'var' is treated as 'undefined'.
Simply declaring a variable has global scope.
We can re-declare a variable using 'var'. 

Syntax:
var <variable name> = <value>;
or 
var <varible name>;
<variable name> = <value>;

Eg:
var x = 0;
var lang = "C++";
var scripts = ['HTML', 'CSS', 'JavaScript']

