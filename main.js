import {Tree, Node} from './index.js'; 

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

const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);  

console.log(prettyPrint(tree.root))

const tree2 = new Tree([]); 
tree2.root = tree2.insert(tree2.root, 10);

console.log(tree2.root); 

tree2.root = tree2.insert(tree2.root, 11); 
tree2.root = tree2.insert(tree2.root, 10); 

console.log(prettyPrint(tree2.root)); 

tree.delete(tree.root, 7)
console.log(prettyPrint(tree.root)); 

console.log(tree.find(4))

console.log(tree.find(17))

tree.levelOrderForEach((node) => console.log(node.data)); 

tree.inOrderForEach(node => console.log("In-order:", node.data));
tree.preOrderForEach(node => console.log("Pre-order:", node.data));
tree.postOrderForEach(node => console.log("Post-order:", node.data));

console.log(tree.height(8))
console.log(tree.depth(4))

console.log(tree.isBalanced()); 

const tree3 = new Tree([1, 2, 3, 4, 5, 6, 7]);

console.log(prettyPrint(tree3.root))
console.log(tree3.isBalanced()); 

tree3.insert(tree3.root, 100);
tree3.insert(tree3.root, 101);
tree3.insert(tree3.root, 102);
console.log(tree3.isBalanced());
console.log(prettyPrint(tree3.root))

tree3.rebalance(); 
console.log(tree3.isBalanced()); 
console.log(prettyPrint(tree3.root))





