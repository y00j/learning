/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let count = 0;
  let max = 0;
  nums.forEach((num) => {
      if (num === 1) {
          count++;
          if (max <= count) {
              max = count;
          }
      } else {
          count = 0;
      }
      // console.log(count);
  });
  return max;
};