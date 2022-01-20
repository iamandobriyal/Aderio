let serviceCard = document.querySelectorAll('.servicecard');
let icon = document.querySelectorAll('i');
let h1 = document.querySelectorAll('h1');
let logo = document.querySelector('.logo');
let menutbtn = document.querySelector('.menubtn');
let mobileMenu = document.querySelector('.menu-mobile');
let menu = document.querySelectorAll('menu-item');
menu[4].addEventListener('click',function(){
    location.href = "pages/dashboard.html";
})
mobileMenu.style.display = "none";
let m = 0;
menutbtn.addEventListener('click',function(){
    if(m==0)
    {
        mobileMenu.style.display = "flex";
        m++;
    }
    else{
        mobileMenu.style.display = "none";
        m--;
    }
    
})

function start()
{
    location.href = 'pages/sign.html';
}

logo.addEventListener('click',function(){
    location.href = "index.html";
})
for(let i=0; i<h1.length; i++)
{
    h1[i].style.color = "white";
}
console.log(serviceCard);
for(let i=0; i<serviceCard.length; i++)
{
    serviceCard[i].addEventListener('mouseover',function()
    {
        icon[i].style.color = "white";
    })
    serviceCard[i].addEventListener('mouseout',function(){
        icon[i].style.color = "black";
    })
}
let slide = document.querySelectorAll('.slide');
let dot = document.querySelectorAll('.dot');


dot[0].style.background = "var(--links)";
for(let i=0; i<slide.length; i++)
{
    dot[i].addEventListener('click',function(){
        if(i==0)
        {
            slide[i].style.display = "flex";
            slide[i+1].style.display = "none";
            dot[i].style.background = "var(--links)";
            dot[i+1].style.background = "white";
        }
        else{
            slide[i].style.display = "flex";
            slide[i-1].style.display = "none";
            dot[i].style.background = "var(--links)";
            dot[i-1].style.background = "white";
        }
    })
}
//   faq

let faqCard = document.querySelectorAll('.faq');
let on = document.querySelectorAll('.add');
let off = document.querySelectorAll('.sub');

on[0].addEventListener('click',function(){
    console.log('hello');
})


for(let i=0; i<faqCard.length; i++)
{
    on[i].addEventListener('click',function()
    {
        faqCard[i].style.height = "fit-content";
        faqCard[i].style.rowGap = "5px";
        on[i].style.display = "none";
        off[i].style.display = "flex";
    })
    off[i].addEventListener('click',function()
    {
        faqCard[i].style.height = "57px";
        faqCard[i].style.rowGap = "20px";
        on[i].style.display = "flex";
        off[i].style.display = "none";
    })
}

AOS.init();