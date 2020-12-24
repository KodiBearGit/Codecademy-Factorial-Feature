var assert = require("assert");
const { isMainThread } = require("worker_threads");
var Calculate =  require('../index.js')


//1of11 In your index_test.js file, add an it statement, and then fill in the error message to state that it will test if the output of 5! is equal to 120.
describe('Calculate', () => {
  describe('.factorial', () => {
    it('test if the output of 5! is 120', () => {
      //Setup
      const expectedResult = 120;
      //Exercise
        const inputNumber = 5;
        const result = Calculate.factorial(inputNumber);
      //Verify
        assert.equal(result, expectedResult);
    });
    it('test if the output of 3! is 6', () => {
      //Setup
      const expectedResult = 6;
      //Exercise
        const inputNumber = 3;
        const result = Calculate.factorial(inputNumber);
      //Verify
        assert.equal(result, expectedResult);
    });
  });
});

//worth noting the mocha documentation I read today was saying that use of => was not advised, I'm following this format as that is what I have been taught at this point. 

/*2of11 
Follow the steps below to write a test that checks if 120 is equal to Calculate.factorial(5).

Write an assert.equal() statement inside your it block
The first argument in your assert.equal() statement should be Calculate.factorial(5)
The second argument should be 120
Remember to run npm test to see the error message.*/

/*4of11
Refactor part 1

In your index_test.js file, refactor your test code so that it follows the first three phases of a good test.
Setup
Exercise
Verify
 assert.equal(Calculate.factorial(5), 120);
*/
/*5of11
** Get into the red part 2:**

Write another test, with an input other than 5 to put yourself back in the red. This will force you to write implementation code that covers more conditions than just .factorial(5).

You can write a test that checks if your factorial method returns 6 when you pass 3 to .factorial()
*/

