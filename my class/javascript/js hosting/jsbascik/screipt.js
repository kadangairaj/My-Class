var a = 10;
var b = a;
   b = 45;

console.log("a", a);
console.log("b", b);
console.log(a);

//arr
let arr = ["esakki", true, 1,"babi"];
copyarr = arr;
copyarr[0] = 45;

console.log("org-arr", arr);
console.log("copy-arr", copyarr);


//obj
let obj ={
    name: "esakki",
    class: 12,
    subject:["tamil", "english", "histroy"],
    teacher:{
        name: "babi",
        subject: "histroy",
    },
}
console.log(obj.name);
console.log(obj.class);
console.log(obj.subject[0]);
let copyobj = obj;
copyobj.subject[0] = "mathes";
console.log("obj", obj);
console.log("copyobj", copyobj);

//arr
let orgarr = ["esakki"];
let orgobj ={ name: "raj"};
let copyorgarr = Object.assign([], orgarr);
let copyorgobj = Object.assign({}, orgobj);
copyorgarr[0] = "rajubai";
copyorgobj.name = "raju";
console.log("orgarr :", orgarr);
console.log("copyorgarr :", copyorgarr);
console.log("orgobj :", orgobj);
console.log("copyorgobj :", copyorgobj);

// xml http reqest
// https://restcountries.com/v3.1/all

let xhr = new XMLHttpRequest();
console.log(xhr)
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function () {
    const data = JSON.parse(xhr.response);
    console.log(data);
};

// function
function aboutmyself(){
  console.log("my neme is Esakki");
  
}
aboutmyself();


// with parametera and arguments
// parameters
function addTwonumbers(num1, num2) {
    console.log(num1 + num2);
}
//arguments
addTwonumbers(5, 10);
addTwonumbers(5.5, 4.5);

// function with returen keyword
function getvalue() {
    return 10;
}
getvalue();
let value = getvalue();
console.log(value);

// arrow function
