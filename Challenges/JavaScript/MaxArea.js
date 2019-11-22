/**
 * @param {number[]} height
 * @return {number}
 */

const maxArea = height => {
   let maxValue = 0;
   let iterations = 0;
   height.forEach((element, index) => {
      const minDistance = (maxValue ? Math.floor(maxValue / element) : 0) + index;
      for (let i = minDistance; i < height.length; i++) {
         if (index !== i) {
            iterations++;
            let area = Math.abs(index - i) * Math.min(element, height[i]);
            maxValue = Math.max(maxValue, area);
         }
      }
   });
   console.log(iterations);
   return maxValue;
};

const getRandomArray = num => {
   const array = [];
   for (let i = 0; i < num; i++) array.push(Math.floor(Math.random() * 9) + 1);
   return array;
};

const input = [1, 8, 6, 2, 5, 4, 8, 3, 7];

const output = _maxArea(input);

console.log(output);
