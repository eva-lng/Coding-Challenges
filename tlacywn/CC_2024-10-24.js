/* Tree Traversal

Implement preorder, inorder and postorder tree traversal
*/

// preorder
function walkPre(curr, path) {
  if (!curr) {
    return path;
  }

  path.push(curr.value);
  walk(curr.left, path);
  walk(curr.right, path);
  
  return path;
}

function preOrderSearch(head) {
  return walkPre(head, []);
}

// inorder
function walkIn(curr, path) {
  if (!curr) {
    return path;
  }

  walk(curr.left, path);
  path.push(curr.value);
  walk(curr.right, path);
  
  return path;
}

function inOrderSearch(head) {
  return walkIn(head, []);
}

// postorder
function walkPost(curr, path) {
  if (!curr) {
    return path;
  }

  walk(curr.left, path);
  walk(curr.right, path);
  path.push(curr.value);
  
  return path;
}

function postOrderSearch(head) {
  return walkPost(head, []);
}