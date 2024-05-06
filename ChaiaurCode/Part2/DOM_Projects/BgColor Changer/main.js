const button = document.querySelectorAll(".button");
const body = document.querySelector("body");

button.forEach(function (btn) {
    btn.addEventListener("click", function(e) {

        switch(e.target.id){
            case "grey":
                body.style.background = "grey";
                break;
            case "white":
                body.style.background = "white";
                break;
            case "blue":
                    body.style.background = "blue";
                    break;
            case "yellow":
                        body.style.background = "yellow";
                        break;
            default : 
                    body.style.background = "black";

        }
    })
})