const header = document.querySelector("header");
window.addEventlistener ("scroll" , function() {
	header.classlist.toggle("sticky" ,window.scrollY >100);
}); 

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.oneclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('open');
};