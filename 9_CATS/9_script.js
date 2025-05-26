const url = 'https://api.thecatapi.com/v1/images/search';

const button = document.querySelector("button");
const res = document.querySelector("#cat");

button.addEventListener('click', async () =>{
    try{
        const response = await fetch(url);
        const data = await response.json();
        if (data[0]  && data[0].url) { 
            res.innerHTML = `<img src = ${data[0].url} alt = cat-pic width = ${data[0].width} height = ${data[0].height} />`;
        }
    }
    catch(e){
        res.innerHTML = e.message;
    }
});