let menu=document.querySelector(".menu");
let side=document.querySelector(".side");
let heart=document.querySelector(".fa-heart");
let eng=document.querySelector(".eng");
let urdu=document.querySelector(".urdu");
let hindi=document.querySelector(".hindi");
let lang=document.querySelector(".lang");

let khan=document.querySelector("#mq")

eng.addEventListener("click",function(){
    lang.innerText="English ▾"
});
urdu.addEventListener("click",function(){
    lang.innerText="Urdu ▾"
});

hindi.addEventListener("click",function(){
    lang.innerText="Hindi ▾"
});





side.addEventListener("click",function(){
    menu.classList.toggle("active");
    
});
heart.addEventListener("click",function(){
    this.style.color="red"
});
heart.addEventListener("dblclick",function(){
    this.style.color="black"
});
    

khan.addEventListener("mouseover",()=>{
    mq.stop();
});
khan.addEventListener("mouseout",()=>{
    mq.start();
})



