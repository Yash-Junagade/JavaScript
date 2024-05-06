const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const body = document.querySelector("body");
let timeIntervalSet;

const randomColor = () => {
    const hexa = "0123456789ABCDEF";
    let color = "#";

    for(let i=0; i<6; i++){
        color += hexa[Math.floor(Math.random() * 16)];
    }

    return color;
}

startBtn.addEventListener("click", function (){
    timeIntervalSet = setInterval(function (){
        body.style.backgroundColor = randomColor();
    }, 500)
})

stopBtn.addEventListener("click", function (){
    clearInterval(timeIntervalSet);
})