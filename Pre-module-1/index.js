
const startTime = performance.now();
const arr = [1,1,2,3,4,5,2,6,3,5];
const set = new Set(arr);
const arr2 = Array.from(set)
const endTime = performance.now()
console.log(`The performance time ${endTime - startTime} ms`);