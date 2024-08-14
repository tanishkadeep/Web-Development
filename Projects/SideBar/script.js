let menu = document.getElementById('menu');
let body = document.getElementById('content');
let header = document.querySelector('header');
let sidebar = document.getElementById('sidebar');
let overlay = document.getElementById('overlay');
let close = document.getElementById('close');

menu.addEventListener('click', () => {
    header.style.display = 'none';
    sidebar.style.display = 'block';
    sidebar.style.width = '400px';

    sidebar.style.backgroundColor = 'white';
    body.style.backgroundColor = 'rgba(218, 218, 218, 0.8)';
})

close.addEventListener('click', () => {
    header.style.display = 'block';
    sidebar.style.display = 'none';
    body.style.backgroundColor = 'white';
})