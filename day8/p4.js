function fetchdata() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const students = [
                {name: 'alice',score: 50},
                {name: 'bOb',score: 65},
                {name: 'charlie',score: 80},
                {name: 'david',score: 45},
                {name: 'rahul',score: 50},
            ];
            resolve(students);
        },4000);
    });
}
fetchdata()
.then((students)=>{
    let sum =0;
    students.forEach((element) => {
        sum+=element.score;
});
console.log(sum);
})
.catch((error)=>{
    console.log(error);
})