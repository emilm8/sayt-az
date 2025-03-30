const xezer = document.getElementById('xezer')



function handleAcc(arg) {
    if (arg == 'ay') {
        card1money.innerHTML = '5 m'
        card2money.innerHTML = '10 m'
        card3money.innerHTML = '20 m'
       
    } else {
        card1money.innerHTML = '60 m'
        card2money.innerHTML = '120 m'
        card3money.innerHTML = '240 m'
     
    }
}

function scrollOnePageAsagi() {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  }
    
  document.addEventListener("DOMContentLoaded", function () {
    let swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 3,
        navigation: {
            nextEl: ".hs-carousel-next",
            prevEl: ".hs-carousel-prev",
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
        },
    });
});

function opensb() {
    const sidebar = document.getElementById('sidebar');
    const alldropdowns = document.querySelectorAll('.switch');

    alldropdowns.forEach(dropdown => {
        dropdown.classList.remove('switch');
    });
    sidebar.classList.toggle('opensb');
    document.body.classList.toggle('no-scroll');
}
