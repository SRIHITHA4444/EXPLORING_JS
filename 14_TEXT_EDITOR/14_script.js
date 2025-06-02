const uprBtn = document.querySelector('.btn-uppercase');
const lwrBtn = document.querySelector('.btn-lowercase');
const captBtn = document.querySelector('.btn-capitalize');
const boldBtn = document.querySelector('.btn-bold');
const italicBtn = document.querySelector('.btn-italic');
const ulineBtn = document.querySelector('.btn-underline');
const ip = document.querySelector('#input-field');
const res = document.querySelector('#output-field');

let prevAns = '';

function resetFonts(){
    ['uppercase', 'underline', 'italic', 'capitalize'].forEach((ele) =>{
        res.classList.remove(ele);
    });
    res.style.fontWeight = 'normal';
}

uprBtn.addEventListener('click', (et) => {
        et.preventDefault();
        resetFonts();
        prevAns = ip.value;
        res.classList.add('uppercase');
        let curAns = prevAns;
        res.innerHTML = curAns;
});

lwrBtn.addEventListener('click', (et) => {
    et.preventDefault();
    resetFonts();
    prevAns = ip.value;
    let curAns = prevAns.toLowerCase();
    res.innerHTML = curAns;
});

captBtn.addEventListener('click', (et) => {
    et.preventDefault();
    resetFonts();
    prevAns = ip.value;
    res.classList.add('capitalize');
    let curAns = prevAns;
    res.innerHTML = curAns;
});

boldBtn.addEventListener('click', (et) => {
    et.preventDefault();
    resetFonts();
    prevAns = ip.value;
    res.innerHTML = prevAns;
    res.style.fontWeight = 900;
});

italicBtn.addEventListener('click', (et) => {
    et.preventDefault();
    resetFonts();
    prevAns = ip.value;
    res.classList.add('italic');
    let curAns = prevAns;
    res.innerHTML = curAns;
});

ulineBtn.addEventListener('click', (et) => {
    et.preventDefault();
    resetFonts();
    prevAns = ip.value;
    res.classList.add('underline');
    let curAns = prevAns;
    res.innerHTML = curAns;
});

//double click to reset current effect caused

[uprBtn, lwrBtn, captBtn, italicBtn, boldBtn, ulineBtn].forEach((ele) => {
    ele.addEventListener('dblclick', (et) => {
        et.preventDefault();
        resetFonts();
        res.innerHTML = prevAns;
    })
})