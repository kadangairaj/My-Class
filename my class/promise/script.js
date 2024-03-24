
// const from = document.getElementById("from");
// from.addEventListener("submit", (event)=>{
//     event.preventDefault();
//     let taskpercentage = document.querySelector(".task_input").value;
//     console.log("strat calculating");


//     let place_promise =  new  Promise((reslove, reject) =>{
//         setTimeout(() => {
//             if (taskpercentage >=80) {
//                 reslove("yes we can move placement");
//             } else {
//                 reject("we cannot move this profile");
//             }
//         }, 2000);
//     });
//     place_promise
//        .then((res) => {
//         console.log(res);
//         console.log("Result provider");
//        })
//        .catch((rej) =>{
//         console.log(rej);
//         console.log("Result provider");
//     }) 
//     .finally(() => console.log("Result is given"));
// });

// let chain_promise = new Promise((res, rej)=> {
//     let value = 1;
//     setTimeout(() => {
//         if (value <=0) {
//             rej ("cannot next process");
//         } else {
//             res (value);
//         }
//     }, 2000);
// });

// chain_promise
//  .then((data) => {
//     console.log("Frist process", data);
//     return data * 2;
//  })
//   .then((data2) => {
//     console.log("second process", data2);
//     return data2 * 4;
//   })
//   .catch((err) => console.log (err));

//api
fetch("https://restcountries.com/v3.1/all")
.then((res) => res.json())
.then((data4) => {
    data4.map((ele) => {
        console.log(ele);
        createDataCard(ele);
    });
})
.catch((err) =>console.log(err));

  function createDataCard(ele) {
    document.body.innerHTML += `
    <div class="container">
    <img id="flag" src=${ele.flags.png} alt="someone">
    <div class="card-info">
        <h2>${ele.name.common}</h2>
        <p><span>Population :</span>${ele.population}</p>
        <p><span>Region :</span>${ele.region}</p>
        <p><span>Capital :</span>${ele.capital [0]}</p>
    </div>
   </div>
    `;
  }
