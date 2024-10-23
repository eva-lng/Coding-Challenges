/* Quicksort 

Implement quickosort
*/

// solution 1
function quickSort1(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const leftArr = [];
  const rightArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

// solution 2
function qs(arr, lo, hi) {
  if (lo >= hi) {
    return;
  }

  const pivotIdx = partition(arr, lo, hi);
  qs(arr, lo, pivotIdx - 1);
  qs(arr, pivotIdx - 1, hi);
}

function partition(arr, lo, hi) {
  const pivot = arr[hi];
  let idx = lo - 1;

  for (let i = lo; i < hi; ++i) {
    if (arr[i] <= pivot) {
      idx++;
      const tmp = arr[i];
      arr[i] = arr[idx];
      arr[idx] = tmp;
    }
  }

  idx++;
  arr[hi] = arr[idx];
  arr[idx] = pivot;

  return idx;
}

function quickSort2(arr) {
  qs(arr, 0, arr.length - 1);
}