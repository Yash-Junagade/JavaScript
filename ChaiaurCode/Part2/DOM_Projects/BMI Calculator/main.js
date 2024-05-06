const form = document.querySelector("form");
form.addEventListener('submit', function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const ans = document.querySelector("#ans p");

    if(height < 0 || height === " " || isNaN(height)){
        ans.innerHTML = `Please Enter Valid Height ${height}`;
    }else if(weight < 0 || weight === " " || isNaN(weight)){
        ans.innerHTML = `Please Enter Valid Weight ${weight}`;
    }else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        ans.innerHTML = `Your BMI is ${bmi}`;

        if(bmi <= 18.6){
            ans.innerHTML += ` And you are under weight.`;
        }else if(bmi >= 24.9){
            ans.innerHTML += ` And you are over weight.`;
        }else{
            ans.innerHTML += ` And you are weight is normal.`
        }
    }
})