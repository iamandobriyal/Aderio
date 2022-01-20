
let menu = document.querySelectorAll('menu-item');
let section = document.querySelectorAll('.card');
let menubtn = document.querySelector('.menubtn');
let menutab = document.querySelector('.menu-tab');
let m = 0;


let devicewidth = (window.innerWidth > 0)?window.innerWidth:screen.width;



menubtn.addEventListener('click',function(){
    if(m==0)
    {
        menutab.style.height = "380px";
        m++;
    }
    else{
        menutab.style.height = "0";
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
            menutab.style.height = "0";
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



// service

let service = document.querySelectorAll('#service');
let select = document.querySelector('#category');

let cat = document.querySelectorAll('#cat');

let catval = [];

for(let i=0; i<cat.length; i++)
{
    catval[i] = cat[i].value;
}



for(let i=1; i<service.length; i++)
{
    service[i].style.display = "none";
}

function catnew()
{
    let selectVal = parseInt(select.value);
    service[selectVal].style.display = "flex";
    for(let i=0; i<service.length; i++)
    {
        if(i!=selectVal)
        {
            service[i].style.display = "none";
        }
    }
}