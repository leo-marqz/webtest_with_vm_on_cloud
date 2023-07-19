
const span = document.getElementById("ipv4-address");

document.addEventListener('DOMContentLoaded', (e)=>{
    fetch("https://icanhazip.com/")
    .then(response => response.text())
    .then(data => {
        console.log(data);
        span.innerText = data;
    })
});

