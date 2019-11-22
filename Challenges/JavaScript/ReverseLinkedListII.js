var getNode = function(val) {
   return {
      val: val,
      next: null
   };
};

var createListAndReturnHead = function(arr) {
   if (!arr || arr.length <= 0) {
      return { val: null, next: null };
   }
   const head = getNode(arr[0]);
   let prev = head;
   let current;
   for (let i = 1; i < arr.length; i++) {
      current = getNode(arr[i]);
      prev.next = current;
      prev = current;
   }

   return head;
};

var convertBackToArray = function(head) {
   let current = head;
   const array = [];

   while (current !== null) {
      array.push(current.val);
      current = current.next;
   }
   return array;
};

var reverseBetween = function(head, start, stop) {
   let nodeBeforeReverse = null;
   let nodeAfterReverse = null;
   let reversedSectionHead = null;
   let reversedSectionEnd = null;
   let index = 1;
   let nodeBeforeReverseIndex = start - 1;
   let nodeAfterReverseIndex = stop + 1;
   let current = head;
   let reversedCurrent = null;
   let reversedPrevious = null;

   while (current !== null && index <= nodeAfterReverseIndex) {
      if (index >= nodeBeforeReverseIndex && index <= nodeAfterReverseIndex) {
         if (index === nodeBeforeReverseIndex) nodeBeforeReverse = current;
         else if (index === nodeAfterReverseIndex) nodeAfterReverse = current;
         else {
            reversedCurrent = getNode(current.val);
            if (reversedPrevious) reversedCurrent.next = reversedPrevious;
            if (index === start) reversedSectionEnd = reversedCurrent;
            if (index === stop) reversedSectionHead = reversedCurrent;
            reversedPrevious = reversedCurrent;
         }
      }
      current = current.next;
      index++;
   }

   if (nodeBeforeReverse) nodeBeforeReverse.next = reversedSectionHead;
   reversedSectionEnd.next = nodeAfterReverse;
   return nodeBeforeReverse ? head : reversedSectionHead;
};

const head = createListAndReturnHead([1, 2, 3, 4, 5]);
const m = 2;
const n = 4;

const expectedOutput = [1, 4, 3, 2, 5];
const myOutput = convertBackToArray(reverseBetween(head, m, n));

console.log("expected ouput:", expectedOutput);
console.log("my output:     ", myOutput);
