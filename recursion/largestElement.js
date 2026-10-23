/* Question: Write a program to find the largest element in the below nested array 
[[3, 4, 58], [709, 8, 9, [10, 11]], [111, 2]]
*/

/* Outpu would be: 709 */

/* This Question is based on concept: Recursion */

/* A recursive function in JavaScript is a function that calls itself to solve a smaller piece of a problem until it reaches a stopping point */

/* Every recursive function needs two main parts:
1. Base Case: The condition that stops the function from calling itself again. Without this, the function loops infinitely and causes a RangeError: Maximum call stack size exceeded (stack overflow).
2. Recursive Case: The part where the function calls itself with a modified or smaller input to move closer to the base case.
*/

/* array = [x, y, z] to understand better and each index represents an array*/ 
var arr = [[3, 4, 58], [709, 8, 9, [10, 11]], [111, 2]];
// call the function here
console.log('Largets element is: '+ getLargestElement(arr));

/* define a function which uses recurssive functionality*/
function getLargestElement(arr) {
  var max = 0;
  traverse(arr);
  function traverse(arr) {
    for (let i=0; i<arr.length; i++) {
      if (Array.isArray(arr[i])) {
        traverse(arr[i]);
      } else {
        if (arr[i] > max) {max = arr[i]};
      }
    }
  }
  return max;
}
