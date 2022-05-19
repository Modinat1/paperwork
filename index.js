const burger = document.getElementById('burger');
const navList = document.querySelector('.navlist');

// hamburger toggler event
burger.addEventListener('click', () =>{
    navList.classList.toggle('show');
})

