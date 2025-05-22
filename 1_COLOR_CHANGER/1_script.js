const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach( (buttonEle) => {
    //console.log(buttonEle);
    buttonEle.addEventListener('click', (et) => {
        console.log(et);
        console.log(et.target);        
    })
})