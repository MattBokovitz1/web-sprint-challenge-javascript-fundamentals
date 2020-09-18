// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

// The nested function can access variable internal, because the const internal is defined in myFunction() which is an outer function of the nested function. Therefore, the inner function has access to the variable defined in the outer function.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

const summation = function(number){
  let sum = 0;
  for(let i=0; i <= number; i++){
     sum += i;
  }
  return sum;
}