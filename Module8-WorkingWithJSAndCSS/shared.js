let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let selectPlanButons = document.querySelectorAll('.plan button');
let noButton = document.querySelector('.modal__action--negative');
let menuToggleBtn = document.querySelector('.toggle-button');
let mobileNav = document.querySelector(".mobile-nav");

for(let i = 0; i < selectPlanButons.length; i++) { 
    selectPlanButons[i].addEventListener('click', function() {
        modal.classList.add('open');
        backdrop.classList.add('open');
    });
}

backdrop.addEventListener('click', function() {
    mobileNav.classList.remove('open');
    closeModal();
});

if(noButton) {
    noButton.addEventListener('click', closeModal);
}

function closeModal() {
    if(modal) {
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
}

menuToggleBtn.addEventListener('click', function() {
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});
