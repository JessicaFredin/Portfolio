const open_btn = document.querySelector(".open-btn")
const close_btn = document.querySelector(".close-btn")
const nav = document.querySelectorAll(".nav")

open_btn.addEventListener("click", () => {
    nav.forEach(nav_el => {
        nav_el.classList.add("visible")
    })
})

close_btn.addEventListener("click", () => {
    nav.forEach(nav_el => {
        nav_el.classList.remove("visible")
    })
})








var heart = document.getElementById('heart');
let timer1 = setInterval(onTick1, 1000);
let timer2 = setInterval(onTick2, 5001);


function onTick1()
{
   heart.style.animation = "2s ease-in forwards HeartAnimation1, 0.8s linear 2s 2 forwards Beat";
}
function onTick2()
{
   heart.style.animation = "";
}