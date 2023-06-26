let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');


const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true

});


menu.onclick = () =>  {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};




sr.reveal('.hero-text',{delay: 200 , origin: 'top'});
sr.reveal('.hero-img', {delay:500, origin: 'top'});
sr.reveal('.scoll-down', {delay:250, origin: 'bottom'});
sr.reveal('.icons', {delay:300, origin: 'left'});