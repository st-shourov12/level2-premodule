const course1 = {name : "MERN"};
const course2 = {name: "Backend"};

const map = new Map();
map.set(course1, {courseID : "level1"});
map.set(course2, {courseID : "level2"});
// map.delete(course2);
// map.clear()


map.forEach((value, key)=>console.log("key :", key , "value :",value))
// console.log(map);