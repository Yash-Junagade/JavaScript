const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

checkBtn.addEventListener("click", () => {
    if (!textInput.value.trim()) {
        alert("Please input a value");
    } else {
        // Clean the input by removing non-alphanumeric characters and converting to lowercase
        let cleanedInput = textInput.value.toLowerCase().replace(/[^a-z0-9]/g, '');
        let reverseStr = cleanedInput.split("").reverse().join("");
        console.log(reverseStr);
        if (cleanedInput === reverseStr) {
            result.innerHTML = `${textInput.value} is a palindrome`;
        } else {
            result.innerHTML = `${textInput.value} is not a palindrome`;
        }
    }
});
