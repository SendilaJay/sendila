new Typed("#typing",{

strings:[
"Full Stack Developer",
"Flutter Developer",
"React Developer",
"Software Engineer"
],

typeSpeed:60,
backSpeed:40,
loop:true

});

const cursor=document.querySelector(".cursor")

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px"
cursor.style.top=e.clientY+"px"

})

ScrollReveal().reveal('.hero-text',{delay:200});
ScrollReveal().reveal('.hero-image',{delay:400});
ScrollReveal().reveal('.skill-card',{interval:200});
ScrollReveal().reveal('.project-card',{interval:200});
