/* /* /* let a = () => {
    console.log("arrow function")
};

let b = () => console.log("arrow function 2");

let c=(x,y)=>
{
    return x+y;
}

let res = c('rahul',"ravi");
let res1 = c(23,34);
console.log(res,res1)
 
function display(){
    let p1 = document.querySelectorAll("p");
    p1[0].innerHTML = "I AM IN PARRA";
    p1[0].style.backgroundColor = "blue";
    p1[1].innerHTML = "I am in 2 parr";
    p1[1].style.backgroundColor="red";
}
let  change = () => {
    let head1 = document.querySelector("h1");
    head1.textContent = "change the title";
    let a1 = document.querySelector(a);
    a1.setAttribute("href","https://aktu.ac.in");
    a1.innerHTML = "aktu"; 
}; */

 let addcontent = () =>{
    let newdiv = document.createElement('div');
    newdiv.textContent="this is a new div";
    const body = document.querySelector('body');
    body.appendChild(newdiv);
    
 }