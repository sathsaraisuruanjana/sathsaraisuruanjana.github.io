
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({ 
    reset: true,
    distance:'80px',
    duration: 2000,
    delay: 200
});

 ScrollReveal().reveal('.home-content, .heading ', { origin:'top' });
 ScrollReveal().reveal('.home-img, .education-container ', { origin:'bottom' });
 ScrollReveal().reveal('.home-content h1, .about-img ', { origin:'left' });
 ScrollReveal().reveal('.home-content p, .about-content ', { origin:'right' });

const typed = new Typed('.multiple-text',{
    strings:['Software Engineer', 'Investor','Entrepreneur'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000, 
    loop:true
})

const typeSpeed = new Typed('.end-text',{
    strings:['Thank you for visiting my website','Have a great day!'],
    typeSpeed: 150,
    backSpeed: 100,
    backDelay: 500, 
    loop:true
})


let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon' , 'bx-sun');
        document.body.classList.add('color');
    }else{
        darkmode.classList.replace('bx-sun' , 'bx-moon');
        document.body.classList.remove('color')
    }
}