let menu = document.getElementById("menu")
let menu_bar= document.getElementById("menu_bar")

menu.addEventListener("click", ()=>{
    console.log("work")
    menu_bar.classList.toggle("active")
})

window.onscroll=()=>{
    menu_bar.classList.remove("active")
}
