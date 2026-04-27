
const startTime = performance.now();
const arr = [1,1,2,3,4,5,2,6,3,5];
const set = new Set(arr);
const arr2 = Array.from(set)
const endTime = performance.now()
console.log(`The performance time ${endTime - startTime} ms`);

// task 2

console.time("task2");
const array = [1,2,3,1,2,5,4,6];
const set2 = new Set(array);
const array2 = Array.from(set2);
console.log(array2);
console.timeEnd("task2")