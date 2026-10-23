/* Concept: Recursion */

/* A recursive function in JavaScript is a function that calls itself to solve a smaller piece of a problem until it reaches a stopping point */

/* Every recursive function needs two main parts:
1. Base Case: The condition that stops the function from calling itself again. Without this, the function loops infinitely and causes a RangeError: Maximum call stack size exceeded (stack overflow).
2. Recursive Case: The part where the function calls itself with a modified or smaller input to move closer to the base case.
*/

/*
Use Case: Recursion is very helpful when working with data structures of unknown depth, such as directory trees, JSON payloads, or DOM elements.
*/

const companyTree = {
  name: "CEO",
  subordinates: [
    {
      name: "Manager A",
      subordinates: [{ name: "Developer 1" }, { name: "Developer 2" }]
    },
    {
      name: "Manager B",
      subordinates: [{ name: "Designer 1" }]
    }
  ]
};

function printEmployeeNames(node) {
  console.log(node.name); // Process current node
  
  if (node.subordinates) {
    node.subordinates.forEach(child => printEmployeeNames(child)); // Recursive call
  }
}

printEmployeeNames(companyTree);
// Output: CEO, Manager A, Developer 1, Developer 2, Manager B, Designer 1
