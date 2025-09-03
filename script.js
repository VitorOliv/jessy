const accordionItems = document.querySelectorAll(".accordion");

// Adiciona evento de click na div accordion se existir.
if (accordionItems) {
    accordionItems.forEach((accordion) => {
        accordion.addEventListener("click", (e) => toggleAccorddion(e));
    });
}

// Accordion simples, recebe o elemento pai desce até o paragrafo e da toggle na classe.
const toggleAccorddion = (e) => {
    let target = e.currentTarget;
    let paragraph = target.querySelector("p");
    let button = target.querySelector(".accordionHeader button");    

    if(!paragraph.classList.contains("accordionBodyShowing")) {
        paragraph.classList.remove("accordionBodyHidden");
        paragraph.classList.add("accordionBodyShowing");

        button.innerHTML = "-";
    } else {
        paragraph.classList.remove("accordionBodyShowing");
        paragraph.classList.add("accordionBodyHidden");

        button.innerHTML = "+";
    }
}


// Slick

$(document).ready(function(){
  $(".carousel").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,  
    variableWidth: true,
    centerMode: true,
  centerPadding: '60px',
  });
});

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelector('ul.navLinks');
    const navIcon = document.querySelector('ul.navLinks li.navIcon');
    const closeNavBtn = document.querySelector('ul.navLinks li.closeNav button');
    const overlay = document.querySelector('.mobile-nav-overlay');
    // Show close button only on mobile
    function updateCloseBtn() {
        if (window.innerWidth <= 768) {
            document.querySelector('ul.navLinks li.closeNav').style.display = 'block';
        } else {
            document.querySelector('ul.navLinks li.closeNav').style.display = 'none';
        }
    }
    updateCloseBtn();
    window.addEventListener('resize', updateCloseBtn);

    function openNav() {
        navLinks.classList.add('open');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    function closeNav() {
        navLinks.classList.remove('open');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    navIcon.addEventListener('click', openNav);
    closeNavBtn.addEventListener('click', closeNav);
    overlay.addEventListener('click', closeNav);

    // Close nav when clicking a link (on mobile)
    navLinks.querySelectorAll('li:not(.navIcon):not(.closeNav) a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) closeNav();
        });
    });
});
