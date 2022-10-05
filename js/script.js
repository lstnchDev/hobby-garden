const menuBtn = document.querySelector('.menu-btn')
const menuBurger = document.querySelector('.menu-burger')
menuBtn.addEventListener('click', ()=>{
    menuBurger.classList.toggle('active')
})

window.onclick = (event) =>{
    if (!event.target.matches('.menu-burger') && !event.target.matches('.menu-btn') && !event.target.matches('.btnBurger')){
        menuBurger.classList.remove('active')
    }
}