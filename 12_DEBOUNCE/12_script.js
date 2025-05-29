// function debounce(timeSet, delay){
//     let timer;

//     return function(){
//         clearTimeout(timer);
//         timer = setTimeout(() => timeSet, delay);
//     }
// }

// const ip = document.querySelector('#user-input');

// async function fetchData(url){
//     try{
//         const response = await fetch(url);
//         return await response.json();
//     }
//     catch (e){
//         throw `${e.message}`;
//     }
// }

// const api = document.querySelector('.api-card')

// ip.addEventListener('keydown', async (et) => {
//     if(et.key === 'Enter'){
//         et.preventDefault();

//         const data = await fetchData(et.target.value);

//         if(!data) return "";

//         api.innerHTML = "";

//         const img = document.createElement('img');   
//         img.src = data.avatar_url || "";
//         img.alt = "profile";
//         api.appendChild(img);

//         const h2 = document.createElement('h2');
//         h2.innerText = data.name || "";
//         api.appendChild(h2);

//         const p = document.createElement('p');
//         p.innerHTML = `PUBLIC REPOSITORIES: ${data.public_repos || 0}`;
//         api.appendChild(p);

//         api.style.display = 'block';
//     }   
// });

const ip = document.querySelector('#user-input');
const api = document.querySelector('.api-card');

function debounce(timeSet, delay){
    let timer;

    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(() => timeSet.apply(this, args), delay);
    };
}

async function fetchData(url){
    try{
        const response = await fetch(url);
        return await response.json();
    }
    catch(e){
        throw `Error: ${e.message}`;
    }
};

ip.addEventListener('keydown', debounce(async (et) => {
    if(et.key === 'Enter'){
        et.preventDefault();
        
        const data = await fetchData(et.target.value);

        if(!data) return "";

        api.innerHTML = "";

        const img = document.createElement('img');
        img.src = data.avatar_url || "";
        img.alt = 'profile';
        api.appendChild(img);

        const h2 = document.createElement('h2');
        h2.innerText = data.name || "No Name";
        api.appendChild(h2);

        const p = document.createElement('p');
        p.innerText = `PUBLIC REPOSITORIES: ${data.public_repos || 0}`;
        api.appendChild(p);

        api.style.display = 'block';
    }
}), 300);

