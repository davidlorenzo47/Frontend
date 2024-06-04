// Implementation of:
// filter, map, includes, indexOf, reduce, slice, splice

// Filter
function myFilter(array, callback) {
    const filteredArray = [];
  
    for (const element of array) {
      if (callback(element)) {
        filteredArray.push(element);
      }
    }
  
    return filteredArray;
}
  
const nums_filter = [336, 41, 894, -992, -487, 731, 491, -36, -332, -634];

const evenNumbers = myFilter(nums_filter, (number) => number % 2 === 0);

console.log(evenNumbers); // [2, 4]

//   Map
function myMap(array, callback) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
      newArray.push(callback(array[i], i, array));
    }
    return newArray;
}
  
const nums_map = [912, 704, -299, 436, 204, -695, 209, -252, -634, -892];
const doubledNumbers = myMap(nums_map, number => number * 2);
console.log(doubledNumbers); // Output: [2, 4, 6]

// Includes
function myIncludes(array, searchElement) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === searchElement) {
        return true;
      }
    }
    return false;
}

const nums_includes = [62, 785, 536, 53, -357, 396, -415, 224, -675, -23];
const result1 = myIncludes(nums_includes, 785); // true
console.log(result1);

const result2 = myIncludes(nums_includes, 758); // false
console.log(result2);

// IndexOf
function myIndexOf(array, searchElement) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === searchElement) {
        return i;
        }
    }
    return -1; // Element not found
}
  
const nums_indexof = [180, 48, -909, 952, -348, -361, 216, -911, -868, 650];
const index = myIndexOf(nums_indexof, -348);
console.log(index);
  
// reduce
function myReduce(array, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : array[0];
    for (let i = initialValue !== undefined ? 1 : 0; i < array.length; i++) {
      accumulator = callback(accumulator, array[i], i, array);
    }
    return accumulator;
}
  
const nums_myReduce = [-600, 211, 749, -322, -419, -863, 714, 614, -264, 955];

const sum = myReduce(nums_myReduce, (acc, curr) => acc + curr, 0);
console.log(sum);

const maxNumber = myReduce(nums_myReduce, (acc, curr) => Math.max(acc, curr), -Infinity);
console.log(maxNumber);

// Slice
function mySlice(array, start, end) {
    start = start === undefined ? 0 : start;
    end = end === undefined ? array.length : end;
    
    start = Math.max(0, Math.min(start, array.length));
    end = Math.max(0, Math.min(end, array.length));
  
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(array[i]);
    }
    return result;
}
  
const nums_mySlice = [653, 184, 631, 343, 564, -652, -547, 902, -345, -640];

const sliced1 = mySlice(nums_mySlice, 2, 6);
console.log(sliced1);

// splice
function mySplice(array, start, deleteCount, ...items) {
    start = start === undefined ? 0 : start;
    deleteCount = deleteCount === undefined ? 0 : Math.max(0, deleteCount);
  
    start = Math.max(0, Math.min(start, array.length));
  
    const deletedElements = [];
    for (let i = start; i < start + deleteCount && i < array.length; i++) {
      deletedElements.push(array.splice(i, 1)[0]);
    }
  
    array.splice(start, 0, ...items);
  
    return deletedElements;
}

const nums_mySplice = [-27, -242, 209, 134, -807, -499, -727, -215, -1, -128];

// remove elements and insert new ones
const removed = mySplice(nums_mySplice, 2, 2, "a", "5");
console.log(nums_mySplice);
console.log(removed);  