const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if ( currentTheme ) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if ( currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}
toggleSwitch.addEventListener('change', switchTheme, false);


/* * * *

* * Toggle sidebar * *

* * * */


function changeBar(barThis) {
    var y = document.getElementById("wrapper");
    barThis.classList.toggle("change");
    y.classList.toggle("toggled");
}


/* * * *

* * sticky navbar main * *

* * * */

window.onscroll = function() {
    stickyNavMain();
}

var navMain = document.getElementById('nav-main');

var posNavMain = navMain.offsetTop;

function stickyNavMain() {
    if ( window.pageYOffset >= posNavMain ) {
        navMain.classList.add('sticky-nav-main');
    } else {
        navMain.classList.remove('sticky-nav-main');
    }
}
