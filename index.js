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
    let current = this.root;

    while (current !== null) {
      if (current.data === value) {
        return current;
      }

      if (value < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return null; // not found
  }

  // Create a method similar to forEach in arrays
  levelOrderForEach(callback) {
    if (typeof callback !== "function") {
      throw new Error("Callback function is required");
    }

    if (this.root === null) return; // empty tree

    // Use a queue for breadth-first traversal
    const queue = [this.root];

    while (queue.length > 0) {
      const current = queue.shift(); // remove first element
      callback(current); // apply callback to the node

    // enqueue children
      if (current.left !== null) queue.push(current.left);
      if (current.right !== null) queue.push(current.right);
    }
  }

  // Create a method that run a callback in a left-root-right manner
  inOrderForEach(callback) {
    if (typeof callback !== "function") {
      throw new Error("Callback must be a function");
    }

    const traverse = (node) => {
      if (node !== null) {
        traverse(node.left);
        callback(node);
        traverse(node.right);
      }
    };

    traverse(this.root); // start from root
  }


  // Create a method that runs a callback in a root-left-right manner
  preOrderForEach(callback) {

  }

  // Create a method that runs a callback in a left-right-root manner
  postOrderForEach(callback) {

  }




}









export {Tree, Node}; 
