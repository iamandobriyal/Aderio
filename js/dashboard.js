
let menu = document.querySelectorAll('menu-item');
let section = document.querySelectorAll('.card');
let menubtn = document.querySelector('.menubtn');
let menutab = document.querySelector('.menu-tab');
let m = 0;
let devicewidth = (window.innerWidth > 0)?window.innerWidth:screen.width;
console.log(devicewidth);
menubtn.addEventListener('click',function(){
    if(m==0)
    {
        menutab.style.display = "flex";
        m++;
    }
    else{
        menutab.style.display = "none";
        m--;
    }
    
})




document.querySelector('.logo').addEventListener('click',function(){
    location.href = "../index.html";
})
menu[0].style.background = "var(--links)";
menu[0].style.color = "white";

section[0].style.display = "flex";

for(let i=1; i<menu.length; i++)
{
    section[i].style.display = "none";
}

for(let i=0; i<menu.length; i++)
{
    if(devicewidth<1001){
        menu[i].addEventListener('click',function(){
            menu[i].style.background = "var(--links)";
            menu[i].style.color = "white";
            section[i].style.display = "flex";
            menutab.style.display  = "none";
            for(let j=0; j<menu.length; j++)
            {
                if(j!=i)
                {
                    menu[j].style.background = "transparent";
                    menu[j].style.color = "var(--secondary-color)";
                    section[j].style.display = "none";
                }
            }
        })
    }
    else{
        menu[i].addEventListener('click',function(){
            menu[i].style.background = "var(--links)";
            menu[i].style.color = "white";
            section[i].style.display = "flex";
            for(let j=0; j<menu.length; j++)
            {
                if(j!=i)
                {
                    menu[j].style.background = "transparent";
                    menu[j].style.color = "var(--secondary-color)";
                    section[j].style.display = "none";
                }
            }
        })
    }
}



