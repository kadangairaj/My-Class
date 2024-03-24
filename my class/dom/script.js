const arr = document.createElement("a")
arr.setAttribute(hrerf= "google.com", traget="blank")
console.log(arr)
let qeryAll = document.querySelector(".qa")
qeryAll.style.color = "blue"
console.log(qeryAll)




const color = ["red", "bule", "green", "yellow"]
let qeryAllcls = document.querySelectorAll(".qa")
for (let i = 0; i <qeryAllcls.length; i++) {
    qeryAllcls [i].style.color = color[i];
    console.log(qeryAllcls[i]);
}