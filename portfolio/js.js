let menu = document.getElementById("menu")
let menu_bar= document.getElementById("menu_bar")
let home_left=document.getElementById("home_left")
let btn=document.getElementById("btn")
let li=document.querySelectorAll("li a")
console.log(li[0])

menu.addEventListener("click", ()=>{
    menu_bar.classList.toggle("active")
})

window.onscroll=()=>{
    menu_bar.classList.remove("active")
}
window.onload=()=>{
    home_left.classList.add("show")
    setTimeout( btn.classList.add("slidup"),1000)   
}

li.forEach(Element=>{
   
    Element.addEventListener("click",(e)=>{
        li.forEach(ele=>ele.classList.remove("active"))
        e.target.classList.add("active")
    })
})





