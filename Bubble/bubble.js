// 5 3 4 1 2 in ascending

arr = [5, 3, 4, 1, 2];

const bubbleSort = (arr) => {
  let a = [...arr];
  for (let j = 0; j < a.length - 1; j++) {
    for (let i = 0; i < a.length - 1; i++) {
      if (a[i] > a[i + 1]) {
        let temp = a[i + 1];
        a[i + 1] = a[i];
        a[i] = temp;
        temp = null;
      }
    }
  }
  return a;
};

console.log(bubbleSort(arr));
