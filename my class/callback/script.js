function insertcard(cb) {
    console.log("hi insert your card");
    cb();
}

function selectAccounttype(cb){
    console.log("please select a account type");
    setTimeout(() =>{
       console.log("account type seleceted");
       cb();
    },4000) 
}

function processing(cb) {
    console.log("processing your requst");
    setTimeout(() => {
        console.log("complete your process");
        cb();
    }, 2000);
}
function greeting() {
    console.log("your process is completed");
}

function handlingcash() {
   insertcard(()=>{
    selectAccounttype(()=>{
        processing(greeting)
    })
   })
}