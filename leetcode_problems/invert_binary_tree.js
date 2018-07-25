/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    
  if (root == null) {
      return root;
  }
  
  let [left, right] = [root.left, root.right];
  [root.left, root.right] = [right, left];       
  invertTree(left);
  invertTree(right);
  
  
  return root;
};