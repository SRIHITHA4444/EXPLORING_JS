const localTime = document.getElementById('local-time');

setInterval(() => {
    let time = new Date().toLocaleTimeString()
    localTime.innerHTML = time;
    localTime.style.color = 'rgb(205, 12, 93)';
    localTime.style.fontWeight = 800;
}, 1000);

 //setIntervel has two params : function, time in ms