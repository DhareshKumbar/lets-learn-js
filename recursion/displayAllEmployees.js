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
