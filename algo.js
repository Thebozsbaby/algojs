// iteration & looping
const numbers = [1, 12, 9, 4, 15, 6, 37, 38, 19, 20]
let sum = 0;
numbers.forEach((num) => {
    sum += num
})
// {console.log(sum)}


// forloop
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}


// searching algorithms (linerar search)
const users = [
    {id: 1, name: "bozsbaby"},
    {id: 2, name: "dml"},
    {id: 3, name: "steve"},
    {id: 4, name: "ola"}
] 
const searchByName = (name) => {
    return users.find((user) => user.name === name)
}
//{ console.log(searchByName("steve"))}


// binary search
const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length -1
    while (left <= right) {
      const mid = Math.floor((left + right) / 2)
      if (arr[mid] === target){
        return mid
      } else if (arr[mid] < target) {
        letf = mid + 1 
      } else { right = mid -1 }
    }
    return -1
}

const sortedArr = [2, 14, 17, 20, 22, 27, 29, 30, 31, 35, 36, 39, 40, 41, 45]
const target = 30
console.log(binarySearch(sortedArr,target));


// bubble sort
const product = [
    {name: "beans", price: 1000},
    {name: "bread", price: 500},
    {name: "water", price: 600},
    {name: "pack", price: 400},
]
const sortedProduct = product.sort((a , b) => b.price - a.price)
// console.log(sortedProduct)

// merge Sort
const mergeSort = (arr) => {
    if (arr.length <= 1){ 
        return arr 
    }
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return mergeSort( left, right);
};

const merge = (left, right) => {
    let result = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    return result.concat(left, right);
  };
  
  const unsortedArray = [34, 7, 23, 32, 5, 62];