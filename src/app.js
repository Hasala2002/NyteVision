import './scss/styles.scss'

let navbar = document.getElementById('navbar')
let scrollable = document.getElementById('scrollable')
let toggleSwitch = document.getElementById('toggleSwitch')

scrollable.onscroll = function () { 
    "use strict";
    if (scrollable.scrollTop >= 10 ) {
        navbar.classList.add("scrolled");
    } 
    else {
        navbar.classList.remove("scrolled");
    }
};

toggleSwitch.addEventListener('click',()=>{
    if(toggleSwitch.textContent === "light_mode"){
        toggleSwitch.textContent = "dark_mode"
        document.documentElement.setAttribute('data-theme', 'dark');
    }else{
        toggleSwitch.textContent = "light_mode"
        document.documentElement.setAttribute('data-theme', 'light');
    }
})