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

}








export {Tree, Node}; 
