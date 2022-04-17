// year
const yearEl=document.querySelector(".year")
const currentYear=new Date().getFullYear()
yearEl.textContent=currentYear

// Make Mobile Navigation
const btnNavEl=document.querySelector(".btn-mobile-nav")
const hearderEl=document.querySelector(".header")
btnNavEl.addEventListener("click",function(){
    hearderEl.classList.toggle("nav-open")
})
