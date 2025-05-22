const form = document.querySelector('form'); //form contains submit button which is 'Calculate' button
const body = document.querySelector('body');

form.addEventListener('submit', (et) => {
    et.preventDefault();

    const height = parseInt(document.querySelector('#height').value); 
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    //.value returns the value provided by user in the form of String

    if(!isNaN(height) && !isNaN(weight) && height !== '' && weight !== '' && height > 0 && weight > 0){
        result.innerHTML = weight / Math.pow(height, 2);
    }
    else{
        result.innerHTML = "Please enter valid height and weight";
    }
});

//when you submit form, by default, the details reach server side in the form of event which has to be stopped. Inorder to this, we use a method called 'et.preventDefault'

//when we write height, weight directly out side the submit event, as soon as the page is loaded, empty values are assigned to them.

//when these values are written inside submit event, as soon as the form is submitted, the corresponding values will be assigned to them.