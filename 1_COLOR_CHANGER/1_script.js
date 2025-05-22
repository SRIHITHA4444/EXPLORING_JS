const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach( (buttonEle) => {
    //console.log(buttonEle);
    buttonEle.addEventListener('click', (et) => {
        //console.log(et);
        //console.log(et.target);

        if(et.target.id === 'pink' || et.target.id === 'violet' ||et.target.id === 'magenta' || et.target.id === 'cadetblue'){
            body.style.backgroundColor = et.target.id;
        }
    });
});