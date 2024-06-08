const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

checkBtn.addEventListener("click", () => {
   if(!textInput.value){
      alert("Please input a value");
   } else {
      let reverseStr = textInput.value.split("").reverse().join("");
      console.log(reverseStr);
      if(textInput.value === reverseStr){
         result.innerHTML = `${textInput.value} is a palindrome`;
      } else {
         result.innerHTML = `${textInput.value} is not a palindrome`;
      }
   }
})