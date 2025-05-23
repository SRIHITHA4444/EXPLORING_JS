const randomColor = '012345ABCDEF';

function randomColorGen(){
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += Math.floor(Math.random() * 16);
    }
    return color;
}

let intervel;

document.querySelector('#start').addEventListener('click', () => {
    intervel = setInterval(() => {
        document.body.style.backgroundColor = randomColorGen();
    }, 1000);
});

document.querySelector('#stop').addEventListener('click', () => {
    clearInterval(intervel);
    intervel = null; //dereferenced variable
    document.body.style.backgroundColor = '';   
});