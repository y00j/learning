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
          let searchBackIdx = searchBackward(nums, i, nextEl);
          
          if (searchBackIdx) {
              startIdx = searchBackIdx;
          } else {
              startIdx = 0;    
          }
          
          break;
      }
  }
  console.log(startIdx);
  if (startIdx === undefined) return 0;
  
  for (let i = nums.length - 1; i > 0; i--) {
      let prevEl = nums[i - 1];
      let currEl = nums[i];
      
      if (prevEl > nums[i]) {
          let searchForwardIdx = searchForward(nums, i, prevEl);
          console.log(searchForwardIdx);
          if (searchForwardIdx) {
              endIdx = searchForwardIdx;
          } else {
              endIdx = nums.length - 1;
              
          }
          break;
      }
  }
  
  let subArr = nums.slice(startIdx, endIdx + 1);
  let [min, max] = [Math.min(...subArr), Math.max(...subArr)];
  console.log(min, max);
  
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
  console.log(startIdx, endIdx);
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
      console.log(i);
      if (arr[i] >= n) return i - 1;
  }
  return undefined;
}