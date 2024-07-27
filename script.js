let menu = document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menu.oneclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}
const typed = new Typed ('.multiple-text',{
    strings:['Frontend Developer', 'Backend Developer','Web Designer','Photographer'],
    typeSpeed:80,
    backSpeed:80,
    backDelay:1200,
    loop: true,
});