/**
 * @param {number[]} nums
 * @return {number}
 */



var findUnsortedSubarray = function(nums) {
  let startIdx, endIdx;
      
  for (let i = 0; i < nums.length - 1; i++) {
      let nextEl = nums[i + 1];
      let currEl = nums[i];
      
      
      if (nextEl < nums[i]) {
          startIdx = i;
          break;
      }
  }
  if (startIdx === undefined) return 0;
  
  for (let i = nums.length - 1; i > 0; i--) {
      let prevEl = nums[i - 1];
      let currEl = nums[i];
      
      if (prevEl > nums[i]) {
          endIdx = i;
          break;
      }
  }
  
  let subArr = nums.slice(startIdx, endIdx + 1);
  let [min, max] = [Math.min(...subArr), Math.max(...subArr)];
  
  let newStartIdx = searchBackward(nums, startIdx, min) 
  if (newStartIdx) {
      startIdx = newStartIdx;
  } else {
      startIdx = 0;
  }
  
  let newEndIdx = searchForward(nums, endIdx, max)
  if (newEndIdx) {
      endIdx = newEndIdx;
  } else {
      endIdx = nums.length - 1;
  }
  
  return (endIdx - startIdx + 1);
};


function searchBackward(arr, idx, n) {
  
  for (let i = idx - 1; i >= 0; i--) {
      if (arr[i] <= n) return i + 1;
  }
  return undefined;
}

function searchForward(arr, idx, n) {
  for (let i = idx + 1; i < arr.length; i++) {
      if (arr[i] >= n) return i - 1;
  }
  return undefined;
}