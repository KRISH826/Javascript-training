const btn = document.getElementById('buttonsubmit')
const nameinput = document.getElementById('name');
const userName = document.getElementById('namepara');

btn.addEventListener('click', () => {
    const value = nameinput.value;
    localStorage.setItem('name', value);
    userName.innerText = value;
    location.reload()
})

window.addEventListener('load', () => {
    const username = localStorage.getItem('name')
    userName.innerText = username
})