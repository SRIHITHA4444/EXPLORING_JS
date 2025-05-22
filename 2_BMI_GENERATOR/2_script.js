const form = document.querySelector('form'); //form contains submit button which is 'Calculate' button

form.addEventListener('submit', (et) => {
    et.preventDefault();

    const height = parseInt(document.querySelector('#height').value); 
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    //.value returns the value provided by user in the form of String

    if(!isNaN(height) && !isNaN(weight) && height !== '' && weight !== '' && height > 0 && weight > 0){
        const bmi = (weight / (Math.pow(height, 2) / 10000)).toFixed(2); 
        let bmiStatus = '';

        if(bmi < 18.6){
            bmiStatus = 'Underweight';
        }
        else if (bmi >= 18.6 && bmi <= 24.9){ 
            bmiStatus = 'Normal';
        } 
        else{ 
            bmiStatus = 'Overweight';
        }

        result.innerHTML = `<span>${bmi}</span></br><span>BMI Status: ${bmiStatus}`;
    }
    else{
        result.innerHTML = "Please enter valid height and weight!!";
    }
});

//when you submit form, by default, the details reach server side in the form of event which has to be stopped. Inorder to this, we use a method called 'et.preventDefault'

//when we write height, weight directly out side the submit event, as soon as the page is loaded, empty values are assigned to them.

//when these values are written inside submit event, as soon as the form is submitted, the corresponding values will be assigned to them.