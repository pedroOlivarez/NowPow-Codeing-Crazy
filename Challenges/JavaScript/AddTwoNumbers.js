var addTwoNumbers = function(l1, l2) {
   let carry = 0;
   let returnNode;
   let previousNode;
   let currentNode;
   while (l1 !== null || l2 !== null || carry !== 0) {
      const num1 = l1 ? l1.val : 0;
      const num2 = l2 ? l2.val : 0;
      let val = num1 + num2 + carry;

      if (val >= 10) {
         carry = 1;
         val -= 10;
      } else carry = 0;

      if (!returnNode) {
         returnNode = { val: val, next: null };
         previousNode = returnNode;
      } else {
         currentNode = { val: val, next: null };
         previousNode.next = currentNode;
         previousNode = currentNode;
      }

      l1 = l1 ? l1.next : null;
      l2 = l2 ? l2.next : null;
   }
   return returnNode;
};
