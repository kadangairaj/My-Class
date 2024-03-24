function getpermission(name) {
    return new Promise ((res, rej)=> {
        if(name === "Mentor") {
            setTimeout(()=>{
                res("assess granted");
            }, 2000);
        } else {
            setTimeout(()=> {
                rej("Access Denied");
            });
        }
    });
}

function getData(Access) {
    return new Promise ((res, rej)=> {
        if(Access === "assess granted") {
            setTimeout(()=>{
                res([{name : "Esakki"}]);
            }, 2000);
        } else {
            setTimeout(()=> {
                rej("data failed");
            });
        }
    });
}
// getpermission("Mentor")
//  .then((data) => data)
//  .then((data) => {
//     console.log("Welcome your data is processing");
//       return data;
//  })
//  .then((data) => getData(data))
//  .then((res) => console(res))
//  .catch((err) => console.log("Error",err));

 function makeDelay(ms){
    return new Promise((res,rej)=>{
        if (ms <= 1000) {
            setTimeout(() =>{
                res (`delay done for ${ms}`)
        }, ms);
        } else {
            setTimeout(() =>{
                rej (`error in delay executing ${ms}`)
            }, ms);
        }
    });
 }

 async function doOperation() {
    try {
        console.log("start");
        console.log("operation1");
        console.log("operation2");
        delay = await makeDelay(1000);
        console.log(delay);
        console.log("operation3");
        await makeDelay(2000);
        console.log("stop");
    } catch (error) {
        console.log("Error :", error);
    }
 }
 doOperation();


 