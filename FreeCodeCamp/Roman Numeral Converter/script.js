const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output")

function convertToRoman(number){
   const romanNumericals = [
      {value : 1000, numeral: "M"},
      {value : 900, numeral: "CM"},
      {value : 500, numeral: "D"},
      {value : 400, numeral: "CD"},
      {value : 100, numeral: "C"},
      {value : 90, numeral: "XC"},
      {value : 50, numeral: "L"},
      {value : 40, numeral: "XL"},
      {value : 10, numeral: "X"},
      {value : 9, numeral: "IX"},
      {value : 5, numeral: "V"},
      {value : 4, numeral: "IV"},  
      {value : 1, numeral: "I"}      
   ];

   let ans = "";

   for(const {value, numeral} of romanNumericals){
      while(number >= value){
         ans+=numeral;
         number-=value;
      }
   }
   console.log(ans);
   return ans;
}


convertBtn.addEventListener("click", ()=>{
   const number = numberInput.value;
   if(number === ""){
      output.innerHTML = "Please enter a valid number";
      }else{
         if(number < 1){
            output.innerHTML = "Please enter a number greater than or equal to 1";
         }else if(number > 3999){
            output.innerHTML = "Please enter a number less than or equal to 3999";
         }else{
            output.innerHTML = convertToRoman(number);
         }
   }
})