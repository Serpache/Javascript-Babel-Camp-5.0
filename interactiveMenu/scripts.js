const buttonOpen = document.getElementById('icon-open');
const buttonClose = document.getElementById('icon-close');
const headerVar = document.querySelector('header');
const mainVar = document.querySelector('main');
const link = document.querySelectorAll('nav a');

function openMenu(){
    headerVar.classList.add("nav-open");
}

function closeMenu(){
    if(headerVar.classList.contains("nav-open")){
    headerVar.classList.remove("nav-open");
    }
}

buttonOpen.addEventListener('click', openMenu);
buttonClose.addEventListener('click', closeMenu);
mainVar.addEventListener('click', closeMenu);

link.forEach(linkA => {linkA.addEventListener('click', closeMenu);})
