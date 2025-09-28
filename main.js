// TEST, DRIVER SCRIPT.  

import { Tree } from "./index.js";

// To visualise your Tree
const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};

function generateRandomArray(length, maxValue) {
  const array = []; 
  for (let i = 0; i < length; i++) {
    array.push(Math.floor(Math.random() * maxValue)); 
  }
  return array; 
}

const numbersBelow100 = generateRandomArray(15, 100); 

const tree = new Tree(numbersBelow100); 

console.log(tree.root)
console.log(prettyPrint(tree.root))

console.log(tree.isBalanced())

tree.levelOrderForEach((node) => console.log(node.data)); 

tree.inOrderForEach(node => console.log("In-order:", node.data));
tree.preOrderForEach(node => console.log("Pre-order:", node.data));
tree.postOrderForEach(node => console.log("Post-order:", node.data));

tree.root = tree.insert(tree.root, 101);
tree.root = tree.insert(tree.root, 120); 
tree.root = tree.insert(tree.root, 115);

console.log(prettyPrint(tree.root))

console.log(tree.isBalanced())

tree.rebalance(); 

console.log(tree.isBalanced())

tree.levelOrderForEach((node) => console.log("Level-order", node.data)); 

tree.inOrderForEach(node => console.log("In-order:", node.data));
tree.preOrderForEach(node => console.log("Pre-order:", node.data));
tree.postOrderForEach(node => console.log("Post-order:", node.data));
