A project to create a calculator that will involve all my HTML, CSS, and JavaScript skills that I have learned thus far.  This calculator will only use the basic operators.  I will mainly use this README for pseudocode.

// Interpreting the equation.
- Store the display as a string which can be split into an array for organization when equal sign is hit.
- Put error checks in place for operators in wrong spots or invalid equation
- If the array is split by each character, it can be looped across to make a new array where the digits are formed to be full numbers with operators between them
- Loop through the array checking for division and divide two numbers by taking array value of +1 and -1.  Enter the new number into a new array without the use operator or old numbers.  This can likely be done using recursion
- Repeat for the other operations
- This should lead to an array with one item.