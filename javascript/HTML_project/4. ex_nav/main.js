const toggleBtn =document.querySelector('.navber__toogleBtn');
const menu = document.querySelector('.nav_menu');
const icons = document.querySelector('.nav_link');

toggleBtn.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});
