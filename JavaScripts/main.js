const searchEl = document.querySelector('.search');
const searchInputEl = document.querySelector('input');

searchEl.addEventListener ('click', function(){
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

const badgeEI = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function(){
    console.log('scroll');

    if(window.scrollY > 500){
        gsap.to(badgeEI, .6, {
            opacity:    0,
            display:    'none'
        });

    }else{

        gsap.to(badgeEI, .3, {
            opacity:    1,
            display:    'block'
        });
    }
}, 300));