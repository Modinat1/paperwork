const burger = document.getElementById('burger');
const navList = document.querySelector('.navlist');

burger.addEventListener('click', () =>{
    navList.classList.toggle('show')
})