document.querySelector('#switch').addEventListener('click',function(){
    location.href = "../index.html";
})
let logo = document.querySelector('.logo');
logo.addEventListener('click',function(){
    location.href = "../index.html";
})

let menu = document.querySelectorAll('menu-item');

let links = ["../index.html","../pages/about.html","../index.html#services","../index.html#contact","../pages/dashboard.html"];

for(let i=0; i<menu.length; i++)
{
    menu[i].addEventListener('click',function(){
        location.href = links[i];
    })
}
