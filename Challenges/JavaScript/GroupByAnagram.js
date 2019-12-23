var groupAnagrams = function(strs) {
   let results = new Map();
   let returnValue = [];

   strs.forEach(str => {
      let orderedTokens = str
         .split("")
         .sort()
         .join("");
      if (results.has(orderedTokens)) {
         let arr = results.get(orderedTokens);
         arr.push(str);
         results.set(orderedTokens, arr);
      } else results.set(orderedTokens, [str]);
   });

   results.forEach(element => {
      returnValue.push(element);
   });

   return returnValue;
};

const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
const output = groupAnagrams(input);

console.log(output);
