const buttonOpen = document.getElementById('icon-open');
const buttonClose = document.getElementById('icon-close');
const headerVar = document.querySelector('header');
const mainVar = document.querySelector('main');
const link = document.querySelector('a');

function openMenu(){
    headerVar.classList.add("nav-open");
}

function closeMenu(){
    headerVar.classList.remove("nav-open");
}

buttonOpen.addEventListener('click', openMenu);
buttonClose.addEventListener('click', closeMenu);
link.addEventListener('click', closeMenu);
mainVar.addEventListener('click', closeMenu);
