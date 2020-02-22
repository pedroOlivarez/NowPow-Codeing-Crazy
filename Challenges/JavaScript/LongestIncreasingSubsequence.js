const input = [1, 3, 6, 7, 9, 4, 10, 5, 6];
const expectedOutput = 6;

function findLongestIncreasingSubsequence(nums) {
   let max = 0;
   if (!nums.length) return max;
   const ourMap = new Map();
   const formattedArray = nums.map((value, index) => {
      const numGreaterAfter = nums.filter((_value, _index) => _index > index && _value > value).length;
      return {
         index: index,
         value: value,
         numGreaterAfter: numGreaterAfter
      };
   });

   formattedArray.forEach(value => {
      const mapValue = [value];
      const appendableCandidates = formattedArray.filter(subValue => {
         return subValue.value > value.value && subValue.index > value.index;
      });
      // This sorts the numbers that could potentially be appended first by how many numbers in the array occuring after that value
      // are greater than that value and secondarily by how early that value appears in the array
      appendableCandidates.sort((a, b) => {
         if (a.numGreaterAfter > b.numGreaterAfter) return 1;
         if (b.numGreaterAfter > a.numGreaterAfter) return -1;
         if (a.index > b.index) return -1;
         if (b.index > a.index) return 1;
         return 0;
      });
      while (appendableCandidates.length) {
         const bestCandidate = appendableCandidates.pop();
         if (bestCandidate.index > mapValue[mapValue.length - 1].index && bestCandidate.value > mapValue[mapValue.length - 1].value) {
            mapValue.push(bestCandidate);
         }
      }
      ourMap.set(value.index, mapValue);
   });
   ourMap.forEach(value => {
      if (value.length > max) max = value.length;
   });

   return max;
}

const myOutput = findLongestIncreasingSubsequence(input);

console.log(`Expected Ouput is:  ${expectedOutput}`);
console.log(`My output is:       ${myOutput}`);
