Homework Assignment #3: Statements and Operators
----------------------------------------------------
"All men are mortal
Socrates is a man.
Therefore, socrates is mortal."

//---The following array states that 'Socrates' is a part of a collection of items referred to as "men"---
const men =['Abraham','John','Kevin','Socrates','Chris'];

//---The following function states that any of the item of collection 'men' is mortal---
function mortal(i){
  if(i>=1 && i<=5){
	  return men[i-1]+' is mortal';	
  }
}

console.log(
	mortal(1)+'\n'+
  mortal(2)+'\n'+
  mortal(3)+'\n'+
  mortal(4)+'\n'+        // ----- this line prints - 'Socrates is mortal' as it is one of the items of collection 'men' mortals---
  mortal(5)
);

========================================================================================================================================

"This cake is either vanilla or chocolate.
This cake is not chocolate.
Therefore, this cake is vanilla."

//---The following line defines the boolean value of a variable 'cake' is either 'Vanilla' or 'Chocolate'---
let cake = 'Vanilla' || 'Chocolate';

//---The following 'if' statement says if 'cake' is not 'Chocolate, then it's value is 'Vanilla'---
if (cake != 'Chocolate'){
  console.log('This cake is '+cake); // --- Prints 'cake' value ('Vanilla')---
}


