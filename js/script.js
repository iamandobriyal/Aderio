let serviceCard = document.querySelectorAll('.servicecard');
let icon = document.querySelectorAll('i');
let h1 = document.querySelectorAll('h1');
let logo = document.querySelector('.logo');
let menutbtn = document.querySelector('.menubtn');
let mobileMenu = document.querySelector('.menu-mobile');
let menu = document.querySelectorAll('menu-item');


let m = 0;
menutbtn.addEventListener('click',function(){
    if(m==0)
    {
        mobileMenu.style.height = "160px";
        m++;
    }
    else{
        mobileMenu.style.height = "0px";
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





// aos

AOS.init();






// menu-pc 


let links = ["index.html","pages/about.html","#services","#contact","pages/dashboard.html"];

for(let i=0; i<(menu.length-5); i++)
{
    menu[i].addEventListener('click',function(){
        location.href = links[i];
    })
}

for(let i=5; i<menu.length; i++)
{
    menu[i].addEventListener('click',function(){
        location.href = links[i-5];
    })
}






