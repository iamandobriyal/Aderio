
let menu = document.querySelectorAll('menu-item');
let section = document.querySelectorAll('.card');
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