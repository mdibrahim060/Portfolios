var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


// Hamburger old 

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}


const hamburgerIcon = document.getElementById('hamburger-icon');

document.addEventListener('click', function (event) {

    const isClickInsideMenu = sidemenu.contains(event.target);

    const isClickOnHamburger = hamburgerIcon.contains(event.target);

    if (sidemenu.style.right === '0px' && !isClickInsideMenu && !isClickOnHamburger) {
       
        closemenu();
    }
});