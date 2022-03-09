
// NAV TOGGLR

const navToggle = document.getElementById('navToggle');
const navlist = document.getElementById('navlist');
const navKanan = document.getElementById('navKanan')
const nav = document.getElementById('nav')


navToggle.onclick = function (){
    
    navKanan.classList.toggle('nav__kanan-active')
    nav.classList.add('nav-color');
    navToggle.classList.toggle('fa-times')
}


function scrollUp() {
    const nav = document.getElementById('nav')
    if (this.scrollY >= 80) nav.classList.add('nav-color');
    else nav.classList.remove('nav-color')
} window.addEventListener('scroll', scrollUp)