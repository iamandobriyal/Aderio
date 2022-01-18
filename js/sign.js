let forbtn = document.querySelector('#forbtn');
let card = document.querySelectorAll('.card');
forbtn.addEventListener('click',function()
{
    card[0].style.display = "none";
    card[1].style.display = "none";
    card[2].style.display = "block";
})
 let forget = document.querySelector('.forget');

 forget.addEventListener('click',function()
 {
    card[0].style.display = "block";
    card[1].style.display = "block";
    card[2].style.display = "none";
 })