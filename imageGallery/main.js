const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

function setPrincipal(e){
    displayedImage.setAttribute('src', e.target.getAttribute("src")) ;
}

for(let i = 1; i <= 5; ++i){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/pic'+i+'.jpg');
    newImage.addEventListener("click", setPrincipal);
    thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */

function darken(){
    if(btn.className === "dark"){
        btn.className = "light";
        btn.textContent = "Light";
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }else{
        btn.className = "dark";
        btn.textContent = "Dark";
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
}

btn.addEventListener("click", darken);