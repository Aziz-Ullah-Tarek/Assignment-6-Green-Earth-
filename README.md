
1. What is the difference between var, let, and const?

Answer:
Var: Old variable, global & function scope, re-declarable, modifiable.

Let: Block scope, modifiable but not re-declarable.

Const: Block scope, cannot be re-declared or reassigned, but object/array properties can change.

2. What is the difference between map(), forEach(), and filter()?

Answer:
map(): Runs function on each element, returns new array.

forEach(): Runs function on each element, does not return anything.

filter(): Returns new array with elements that match condition.

3. What are arrow functions in ES6?

Answer:
A short form of function expression. No own this or arguments. Single-line can have implicit return. Usually declared with const.

4. How does destructuring assignment work in ES6?

Answer:
It unpacks values from arrays or objects into separate variables.
Example:

const [x, y] = [10, 20];
const {name, age} = person;

5. Explain template literals in ES6. How are they different from string concatenation?

Answer:
Template literals use backticks (`) and ${} for dynamic values. Easier than + concatenation, supports multi-line strings.

Example:const name = "John";
console.log(`Hello, ${name}!`);
