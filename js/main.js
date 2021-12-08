
//#region Hero
var menu = document.querySelector('#navcontain');
scrollSpy(menu, 2000, 'easeInOutQuint');
//#endregion

//#region navbar
let onTop = true,
    checked = false;
const navbar = document.getElementById("navbar");
const ckClick = document.getElementById("click");
const btnMenu = document.getElementById("btn-menu");

btnMenu.addEventListener('click', function () {
    checked = !checked;
    if (checked) {
        navbar.classList.add('checked');
        if (onTop) {
            navbar.classList.add('scrolled');
        }
    } else {
        navbar.classList.remove('checked');
        if (onTop) {
            navbar.classList.remove('scrolled');
        }
    }
});

let enlaces = document.querySelectorAll('ul li a');

enlaces.forEach(enlace => {
    enlace.addEventListener('click', () => {
        btnMenu.click();
    });
});


window.onscroll = function () {
    if (document.body.scrollTop >= 20 || document.documentElement.scrollTop >= 20) {
        navbar.classList.add('scrolled');
        onTop = false;
    } else {
        onTop = true;
        if (!checked) {
            navbar.classList.remove('scrolled');
        }
    }
};
//#endregion