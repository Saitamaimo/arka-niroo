// =============================
// ARKA NIROO Build 1.0
// script.js
// =============================

// اسکرول نرم برای منو
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior:"smooth"
            });
        }
    });
});

// انیمیشن نمایش بخش‌ها هنگام اسکرول
const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.15});

sections.forEach(section=>{

section.classList.add("hidden");

observer.observe(section);

});
.hidden{

opacity:0;

transform:translateY(60px);

transition:all .8s ease;

}

.show{

opacity:1;

transform:translateY(0);

}
// ==========================
// دکمه بازگشت به بالا
// ==========================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "backToTop";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "25px";
topButton.style.left = "25px";
topButton.style.width = "55px";
topButton.style.height = "55px";
topButton.style.borderRadius = "50%";
topButton.style.border = "none";
topButton.style.background = "#ff9800";
topButton.style.color = "#fff";
topButton.style.fontSize = "24px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.boxShadow = "0 10px 25px rgba(0,0,0,.35)";
topButton.style.zIndex = "9999";

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topButton.style.display="block";

}else{

topButton.style.display="none";

}

});

topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});


// ==========================
// شمارنده آمار
// ==========================

const numbers=document.querySelectorAll(".stat h3");

numbers.forEach(item=>{

const target=parseInt(item.innerText);

let count=0;

const timer=setInterval(()=>{

count++;

item.innerText=count+"+";

if(count>=target){

item.innerText=target+"+";

clearInterval(timer);

}

},25);

});

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    font-family:'Vazirmatn',sans-serif;
    background:#071A2D;
    color:#fff;
}

header{
    <link rel="stylesheet" href="style.css">
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:20px 8%;
    background:#0A2744;
    position:sticky;
    top:0;
}

.logo{
    font-size:30px;
    font-weight:900;
    color:#ff9800;
}

nav a{
    color:white;
    text-decoration:none;
    margin:0 12px;
    font-weight:bold;
}

nav a:hover{
    color:#ff9800;
}

.hero{
    height:90vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    padding:20px;
    background:linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.55)),
    url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1600&auto=format&fit=crop') center/cover;
}

.hero h1{
    font-size:60px;
    margin-bottom:20px;
}

.hero p{
    font-size:24px;
    max-width:850px;
    line-height:2;
}

.btn{
    display:inline-block;
    margin-top:40px;
    background:#ff9800;
    color:#fff;
    text-decoration:none;
    padding:18px 45px;
    border-radius:10px;
    font-size:22px;
    font-weight:bold;
    transition:.3s;
}

.btn:hover{
    transform:scale(1.05);
    background:#ffb300;
}

.about{
    padding:80px 10%;
    background:#0b2037;
}

.about h2{
    font-size:42px;
    margin-bottom:25px;
    color:#ff9800;
}

.about p{
    font-size:22px;
    line-height:2;
}

footer{
    background:#06111d;
    padding:30px;
    text-align:center;
    font-size:18px;
}
#backToTop{

transition:.3s;

}

#backToTop:hover{

transform:scale(1.1);

background:#ffb300;

}
//==============================
// تغییر رنگ هدر هنگام اسکرول
//==============================

const header=document.querySelector(".header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.style.background="#05101d";

header.style.boxShadow="0 10px 30px rgba(0,0,0,.45)";

}else{

header.style.background="rgba(8,25,42,.95)";

header.style.boxShadow="none";

}

});

//==============================
// نمایش سال جاری
//==============================

const year=new Date().getFullYear();

const copyright=document.querySelector(".copyright");

if(copyright){

copyright.innerHTML="© "+year+" ARKA NIROO | تمامی حقوق محفوظ است.";

}

//==============================
// افکت Hover کارت ها
//==============================

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});

//==============================
// پیام خوش آمد
//==============================

console.log("ARKA NIROO Version 1.0 Loaded Successfully");
