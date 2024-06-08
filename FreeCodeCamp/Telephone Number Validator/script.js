const numberInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

checkBtn.addEventListener("click", ()=>{
   let number  = numberInput.value;
   if(!number){
      alert("Please provide a phone number");
   }else{
      
   }
})

clearBtn.addEventListener("click", ()=>{
   result.innerHTML = "";
})