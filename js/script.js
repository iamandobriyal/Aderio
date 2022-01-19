let serviceCard = document.querySelectorAll('.servicecard');
let icon = document.querySelectorAll('i');
let h1 = document.querySelectorAll('h1');
let logo = document.querySelector('.logo');
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

let faqCard = document.querySelectorAll('.faq');
let des = document.querySelectorAll('des');
let faqopen = document.querySelectorAll('.add');
let faqoff = document.querySelectorAll('.sub');
for(let i=0; i<faqCard.length; i++)
{
    faqopen[i].addEventListener('click',function(){
        des[i].style.display = "block";
        faqopen[i].style.display = "none";
        faqoff[i].style.display = "block";
    })
    faqoff[i].addEventListener('click',function(){
        des[i].style.display = "none";
        faqoff[i].style.display = "none";
        faqopen[i].style.display = "block";
    })
}