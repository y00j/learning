/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (!head || !head.next) return false;
  let nodeList = [];
  let curr = head;
  let temp;
  while (curr) {
    
       if ( nodeList.includes(curr) ) {
           
          return true;
      }
      nodeList.push(curr);
      curr = curr.next;
     

  }
  
  return false;
  
  function _contains(array, node) {
      for( let i = 0; i < array.length; i++) {
          if (array[i] === node) {
              return true;
          }
      }
      return false;
  }
};