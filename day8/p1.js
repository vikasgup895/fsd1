const myPromise = new Promise((resolve, reject) => {
    let sucess = true;
    setTimeout(() => {
         if(sucess){
        resolve ("Data send sucessfully");
  }
  else{
    reject("data not send");
  }
},5000);
   
});
myPromise
.then((message)=>{
    console.log("Data: "+message);
})
.catch((error)=>{
    console.log(error);
});