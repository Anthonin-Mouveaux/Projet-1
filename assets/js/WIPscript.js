const input = document.getElementById('send');
const spot = document.getElementById('nameSpot');
const welcome = document.querySelector('.welcome');
const thanks = document.querySelector('.thanks');

input.addEventListener('click', () => {
    let name = document.getElementById('name').value;
    spot.innerHTML = `${name}`;
    welcome.style.display = 'none';
    thanks.style.display = 'block';
})