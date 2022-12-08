let arr = [4, 10, 6, 14, 2, 1, 8, 5];

const mergeSort = (arr) => {
  // base case
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);

  // Recursive calls
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
};

const merge = (left, right) => {
  let sortedArr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  return [...sortedArr, ...left, ...right];
};
console.log(merge([1, 4], [2, 6, 9]));
console.log(mergeSort(arr));
