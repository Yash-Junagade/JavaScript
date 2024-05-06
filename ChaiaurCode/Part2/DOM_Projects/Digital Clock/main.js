const timeTag = document.querySelector("#time");

setInterval(function (){
    let time = new Date();
    timeTag.innerHTML = time.toTimeString();
}, 1000)