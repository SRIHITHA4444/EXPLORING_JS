const passwordGen = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$^_&*?"

function suggestPwd(){
    let pwd = "";
    for(let i = 0; i < 12; i++){
        pwd += passwordGen[Math.floor(Math.random() * passwordGen.length)];
    }
    return pwd;
};

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    const pwd = suggestPwd();
    const p = document.querySelector('p');

    p.innerText = pwd;
})