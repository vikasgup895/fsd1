/* /*  let num = [1,2,3,4,45,6,45];
let newnum = num.map(x=>x*2)
console.log(newnum)

let evennum = num.filter(x=>x%2==0);
console.log(evennum)

let sum = num.reduce((x,y)=>x+y,0)
console.log(sum) 
 
const students = [
    {name: 'alice',score: 50},
    {name: 'bOb',score: 65},
    {name: 'charlie',score: 80},
    {name: 'david',score: 45},
    {name: 'rahul',score: 50},
];
let scores = students.filter((x)=>x.score>60).map((x) =>x.score+10).reduce((x,y)=>x+y,0);
console.log(scores); */

console.log("start");
setTimeout(() => {
    console.log("first task compeleted");
      setTimeout(() => {
       console.log("Second task compeleted");
        setTimeout(() => {
           console.log("Third task compeleted");
},3000);
},2000);
},1000);
console.log("end")