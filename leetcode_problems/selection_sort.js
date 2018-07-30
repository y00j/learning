function selectionSort(arr) {

  for(let i = 0; i < arr.length; i++) {
    let min = arr[i];
    let minIdx;
    
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[j] < min) {
        min = arr[j];
        minIdx = j;
      }
    }
    if (minIdx) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
  }

  return arr;
}

console.log(selectionSort([5,3,2,1]));