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




/* acordion skills*/
const skillsContent = document.getElementsByClassName('skills__content')
const skillsHeader = document.querySelectorAll('.skills__header')

function toogleSkills(){
    let itemClass = this.parentNode.className

for(i = 0; i < skillsContent.length; i++){
    skillsContent[i].className = 'skills__content skills__close'
}

if(itemClass === 'skills__content skills__close'){
    this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toogleSkills)
})




/* acordion Quali*/

const tabs = document.querySelectorAll('[data-target]'),
        tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })
            target.classList.add('qualification__active')
            
            tabs.forEach(tab =>{
                tab.classList.remove('qualification__active')
            })
            tab.classList.add('qualification__active')
    })
})

/*active box modal*/ 

const modalViews = document.querySelectorAll('.services__modal')
const modalBtns = document.querySelectorAll('.services__button')
const modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn,i) => {
    modalBtn.addEventListener('click', () =>{
        modal(i)
    })
})

modalCloses.forEach((modalClose) =>{
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
    })
})


/*swiper*/

let swiper = new Swiper(".portifolio__container", {
    cssMode: true,
    loop:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable:true,
    },

    });
