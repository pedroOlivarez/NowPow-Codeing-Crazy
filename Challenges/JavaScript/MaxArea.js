/**
 * @param {number[]} height
 * @return {number}
 */

const maxArea = height => {
   let maxValue = 0;
   height.forEach((element, index) => {
      const minDistance = (maxValue ? Math.floor(maxValue / element) : 0) + index;
      for (let i = minDistance; i < height.length; i++) {
         if (index !== i) {
            let area = Math.abs(index - i) * Math.min(element, height[i]);
            maxValue = Math.max(maxValue, area);
         }
      }
   });
   return maxValue;
};

const input = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const expectedOutput = 49;
const output = maxArea(input);

console.log(`Expected output: ${expectedOutput}`);
console.log(`My output:       ${output}`);
