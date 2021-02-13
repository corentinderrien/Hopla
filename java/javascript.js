// Menu de navigation pour téléphone
function menu() {
    document.querySelector(".menutel").classList.toggle("ouvert");
    document.querySelector("#hamburger-button").classList.toggle("burger2");
}

var divs = document.querySelectorAll('.nav-link');
window.onscroll = function () {

    if (document.documentElement.scrollTop > 80) {
        document.querySelector('.navbar').classList.add('navbar2');
        for (var i = 0; i < divs.length; i++) {
            divs[i].classList.add('nav-link2');
        }
    }
    else {
        document.querySelector('.navbar').classList.remove('navbar2');
        for (var i = 0; i < divs.length; i++) {
            divs[i].classList.remove('nav-link2');
        }
    }
    if (document.documentElement.scrollTop > 100) {
        document.querySelector('.decouverte').classList.add('decouverte2');
        document.querySelector('.txtaccueil').classList.add('txtaccueil2');
    }
    else {
        document.querySelector('.decouverte').classList.remove('decouverte2');
        document.querySelector('.txtaccueil').classList.remove('txtaccueil2');
    }

    if (document.documentElement.scrollTop > 10) {
        document.querySelector('.fristcontent').classList.add('fristcontent2');
    }
    else {
        document.querySelector('.fristcontent').classList.remove('fristcontent2');

    }
    if (document.documentElement.scrollTop > 1400) {
        document.querySelector('.tagline_contact').classList.add('tagline_contact2');
    }
    else {
        document.querySelector('.tagline_contact').classList.remove('tagline_contact2');

    }

}



