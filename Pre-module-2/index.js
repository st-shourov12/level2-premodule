const obj = {
    nextLevel: {courseID : "level-2"},
    webDev : {courseID : "level-1"}
}

console.log(obj["webDev"]);

//  task 2
const course1 = {name : "Programming hero"}
const obj2 = {};
obj2.nextLevel = {courseID :"level-2"};
obj2[course1]  = {courseID : "level-1"}

 console.log(obj2["[object Object]"]);