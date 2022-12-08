let arr = [13, 20, 27, 33, 39, 41, 42, 44, 49, 51, 59, 62, 76, 80, 92];
// search is for 51

const binarySearch = (arr, num) => {
  let startIndex = 0;
  let endIndex = arr.length - 1;
  while (startIndex <= endIndex) {
    
    let mid = Math.floor((startIndex + endIndex) / 2);
    if (num === arr[mid]) {
      return true;
    }
    if (num > arr[mid]) {
      startIndex = mid + 1;
    } else {
      endIndex = mid - 1;
    }
  }

  return false;
};
console.log(binarySearch(arr, 51));
