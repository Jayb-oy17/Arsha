"use strict";

// NAV //

const nav = document.querySelector(".nav");
const btnNav = document.querySelector(".nav-button");

btnNav.addEventListener("click", function (e) {
    nav.classList.toggle('navs');
});

// ACCORDION //

const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accord) => {
    accord.addEventListener("click", function (e) {
        e.preventDefault();
        this.querySelector(".accordion-article").classList.toggle("hidden");
    });
});

// SLIDER //

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

const goToSlides = function (slide) {
    slides.forEach((s, index) => {
        s.style.transform = `translateX(${(index - slide) * 100}%)`;
    });
};

goToSlides(0);

let currentslide= 0;
const maxSlide = slides.length -1;

const nextSlide = function () {
    if (currentslide === maxSlide) {
        currentslide = 0;
    }else{
        currentslide++;
    }
    goToSlides(currentslide);
    dots.forEach((dot) => {
        dot.classList.remove("dot-active");
    });
    document.querySelector(`.dot-${currentslide}`).classList.add("dot-active");
};

setInterval(nextSlide, 3000);

// STICKY NAV //
const headerSection = document.querySelector(".header");

const navObserver = new IntersectionObserver(
    function (entries) {
        const [entry] = entries;
        if (!entry.isIntersecting) {
            document.body.classList.add("sticky");
        }else{
            document.body.classList.remove("sticky");
        }
    },
    {
        root: null,
        threshold: 0,
        rootMargin: "-100px",
    }
);

navObserver.observe(headerSection);

// MODAL //

const modal = document.querySelector(".login-modal");
const modalBtn = document.querySelector(".nav-btn");
const modalCloser = document.querySelector(".close-btn");
const togo = document.querySelector(".logged");
const email = document.querySelector(".email");
const pass = document.querySelector(".password");
const passTwo = document.querySelector(".password-two");

modalBtn.addEventListener("click", function () {
    modal.style.display = ("block");
});

const closeModal = () => {
        modal.style.display = "none";
}

modalCloser.addEventListener("click", closeModal);

window.addEventListener("click", function (e) {
    if(e.target == modal){
        modal.style.display = "none";
    }
});

togo.addEventListener("click", function () {
    if (!email.value || !pass.value || !passTwo.value ){
        alert ("please fill the input fields")
    return;
    }
    if (pass.value !== passTwo.value){
        alert("password does not match")
        return
    }else{
        alert("account created succesfully")
    }
    email.value = " "
    pass.value = " " 
    passTwo.value = " "
    closeModal();
});














// const tabs = document.querySelector('.portfolio-tab');
// const eachTab = document.querySelectorAll('.portfolio-tab-title');
// const tabContent = document.querySelectorAll('.portfolio-image-tab');

// tabs.addEventListener("click", function (e) {
//     e.preventDefault();
//     const tab = e.target.classList.contains("portfolio-tab-title")
//     if (!tab) return;
//     console.log(tab)

//     eachTab.forEach((item) => item.classList.remove("tab-active"));

//     e.target.classList.add("tab-active");

//     tabContent.forEach((content) => content.classList.remove('portfolio-active'));
//     const data = e.target.dataset.tab;

//     document.querySelector(`.portfolio-image-tab-${data}`).classList.add("portfolio-active")
// })