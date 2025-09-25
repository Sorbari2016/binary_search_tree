// Creating a linkedlist blueprint

// Create a Node class. 
class Node {
  constructor(data) {
    this.data = data; 
    this.left = null; 
    this.right = null; 
  }
}


// Create a Tree class, blueprint for a complete tree.  
class Tree {
  constructor(array) {
    // Remove duplicate, & sort
    const sortedArray = [...new Set(array)].sort((a, b) => a - b);
    this.root = this.buildTree(sortedArray, 0, sortedArray.length - 1); 
  }

  // Creata a function that takes an array of data, & returns a  balanced binary tree
  buildTree(array, start, end) {
    // Base case
    if(start > end) return null; 

    // Get the middle element
    const mid = Math.floor((start + end)/2); 
    
    // Create root node
    const root = new Node(array[mid]); 

    // build left subtree
    root.left = this.buildTree(array, start, mid - 1);

    // build right subtree
    root.right = this.buildTree(array, mid + 1, end); 

    return root; 
  }

  // Helper method to find the smallest node in a subtree
  findMin(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }


  // To insert a value
  insert(root, value) {
    if (root === null) {
      return new Node(value); 
    }

    // Prevent duplicates
    if (value === root.data) return root;

    if (value < root.data) {
      root.left = this.insert(root.left, value);
    } else {
      root.right = this.insert(root.right, value);
    }

    return root;
  }

  // To delete a value
  delete(root, value) {
    if (root === null) {  // Base case
      return root; // nothing to delete
    }

    if (value < root.data) {
      root.left = this.delete(root.left, value);
    } else if (value > root.data) {
      root.right = this.delete(root.right, value);
    } else {
    
    // Found the node to delete

    // If there is no child
    if (root.left === null && root.right === null) {
      return null;
    }

    // If there is a child
    if (root.left === null) {
      return root.right;
    } else if (root.right === null) {
      return root.left;
    }

    // if there are two children
      let successor = this.findMin(root.right);
      root.data = successor.data; // copy successor value
      root.right = this.delete(root.right, successor.data); // delete successor
    }

    return root;
  }

  // Create a method to find a given value
  find(value) {
  if (this.root === null) return null; // Base case: if the node doesnt exist

  // If we found the node with the value, return it
  if (this.root.data === value) return this.root; 

  // If value is smaller, search the left subtree
  if (value < this.root.data) return this.find(this.root.left, value);
  
  // If value is larger, search the right subtree
  return this.find(this.root.right, value);
  }


  // Create a method similar to forEach in arrays
  levelOrderForEach(callBack) {

  }



}









export {Tree, Node}; 
