const Calculate = {
  factorial(inputNumber) {
    if (inputNumber === 0){
      return 1;
    };
    let factorialResult = inputNumber;
    for (let i = inputNumber - 1; i > 0; i--) {
      factorialResult *= i;
    };
    return factorialResult; 
  }
}

module.exports = Calculate;

/* 3of11
** Get into the green part 1:**

In your index.js file, add a factorial method inside the Calculate object
The factorial method should accept one input and return 120
*/

/*6of11
In your index.js file, replace the line of code return 120 with code that will actually calculate the factorial of the input argument passed to the .factorial() method
*/

/*9of11

Edge case — production code

In your index.js file add implementation code that makes your edge case test pass.
*/