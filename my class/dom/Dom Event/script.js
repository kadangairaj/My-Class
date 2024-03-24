const resulte = document.querySelector(".res-div");

function exe_alert() {
    alert("Hi You have clicked alert btn");
}
function exe_confirm() {
    const con_result = confirm ("do want continue")
    if (con_result) {
        resulte.innerText = "User want to contine";
    } else {
        resulte.innerText = "User want to cancel";
    }
}

function exe_prompt() {
    const prt_result = prompt("Hi Whats is your Name", "name");
    if (prt_result) {
        resulte.innerText= `user name is ${prt_result}`;
    } else{
        resulte.innerText= `user cancel this opr `;
    }
    
}
let timeoutCount = 10;
function timeout_counter(){
    resulte.innerText = timeoutCount;
    timeoutCount--;
    const id = setTimeout(timeout_counter, 1000);
    if (timeoutCount<0) {
        clearTimeout(id);
        resulte.innerText = "Your time is up ";
    }
}

let intervalTimer =10;
function interval_counter() {
    let int_id = setInterval(() => {
        resulte.innerText = intervalTimer;
        intervalTimer--;
        if (intervalTimer < 0) {
            clearInterval(int_id);
            resulte.innerText = "Your time is up ";
        }
    },1000)
}