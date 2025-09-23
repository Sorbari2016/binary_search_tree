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

