const navMenu = document.getElementById('nav-menu')
const navToogle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

    /*Menu show*/
    if (navToogle) {
        navToogle.addEventListener('click',() => {
            navMenu.classList.add('show-menu')
        })
    }


    /*menu Hide */

    if(navClose){
        navClose.addEventListener('click',() => {
            navMenu.classList.remove('show-menu')
        })
    }


    /*Remove Menu Mobile */
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
