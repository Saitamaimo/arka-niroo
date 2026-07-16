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
/* ===================================
ARKA NIROO
JavaScript Version 1.0
=================================== */


/* MOBILE MENU */

const menuToggle = document.querySelector(".menu-toggle");

const menu = document.querySelector(".menu");


if(menuToggle){

menuToggle.addEventListener("click",()=>{

menu.classList.toggle("active");

});

}



/* CLOSE MENU AFTER CLICK */


document.querySelectorAll(".menu a").forEach(link=>{


link.addEventListener("click",()=>{


menu.classList.remove("active");


});


});






/* SCROLL REVEAL */


const revealItems = document.querySelectorAll(

".vision-card, .card, .innovation-card, .lab-card, .command-card, .future-card, .project-card, .stat, .contact-card"

);



const observer = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";


}


});


},{

threshold:.15

});





revealItems.forEach(item=>{


item.style.opacity="0";

item.style.transform="translateY(40px)";

item.style.transition="all .8s ease";


observer.observe(item);


});






/* HEADER CHANGE ON SCROLL */


const header=document.querySelector(".header");


window.addEventListener("scroll",()=>{


if(window.scrollY>80){


header.style.background="rgba(3,11,18,.96)";


}

else{


header.style.background="rgba(7,21,33,.92)";


}


});





/* CURRENT YEAR FOOTER */


const year=document.querySelector(".copyright");


if(year){


year.innerHTML=

"© "+new Date().getFullYear()+" ARKA NIROO - All Rights Reserved";
    /* =====================
ARKA CHATBOT
===================== */


function toggleChat(){

let box=document.getElementById("chatBox");

if(box.style.display==="block"){

box.style.display="none";

}

else{

box.style.display="block";

}

}





function sendQuestion(q){


let body=document.getElementById("chatBody");


let answer="";


if(q.includes("خط گرم")){

answer="آرکا نیرو خدمات عملیات خط گرم، تعمیرات شبکه بدون خاموشی و نگهداری خطوط توزیع را ارائه می‌دهد.";

}


else if(q.includes("تجهیزات")){

answer="تجهیزات تخصصی شامل ابزارهای خط گرم، تجهیزات عایقی، خودروهای عملیاتی و تجهیزات تست می‌باشد.";

}


else if(q.includes("همکاری")){

answer="برای شروع همکاری می‌توانید از بخش تماس با آرکا نیرو درخواست خود را ارسال کنید.";

}


else if(q.includes("گواهینامه")){

answer="بخش گواهینامه‌ها شامل مدارک صلاحیت، استانداردها و تاییدیه‌های تخصصی شرکت خواهد بود.";

}



body.innerHTML +=

"<p><b>شما:</b> "+q+"</p>"+

"<p><b>ARKA AI:</b> "+answer+"</p>";



}




function sendMessage(){

let input=document.getElementById("userInput");


if(input.value.trim()!=""){

sendQuestion(input.value);

input.value="";
    /* =====================
ARKA AI ASSISTANT V2
===================== */


function toggleChat(){

const box=document.getElementById("chatBox");

if(box.style.display==="block"){

box.style.display="none";

}

else{

box.style.display="block";

}

}





function addMessage(sender,text){


const body=document.getElementById("chatBody");


body.innerHTML += `

<div style="margin:12px 0">

<b>${sender}</b>

<br>

<span>${text}</span>

</div>

`;



body.scrollTop=body.scrollHeight;


}





function botReply(message){


let text=message.toLowerCase();


let answer="";



if(text.includes("خط") || text.includes("hotline")){


answer=

"آرکا نیرو در زمینه عملیات خط گرم، تعمیرات و نگهداری شبکه‌های توزیع بدون خاموشی فعالیت می‌کند. تجهیزات عایقی، هات‌استیک و روش‌های ایمن عملیاتی استفاده می‌شوند.";


}



else if(text.includes("تجهیز") || text.includes("ابزار")){


answer=

"تجهیزات تخصصی شامل ابزار خط گرم، تجهیزات حفاظت فردی، خودروهای عملیاتی، بالابر، تجهیزات تست و ابزارهای کنترل شبکه است.";


}



else if(text.includes("هوش") || text.includes("ai")){


answer=

"ARKA AI برای تحلیل اطلاعات پروژه، مدیریت ریسک، گزارش‌گیری هوشمند و توسعه شبکه‌های برق هوشمند استفاده می‌شود.";


}



else if(text.includes("شبکه") || text.includes("توزیع")){


answer=

"خدمات شبکه شامل احداث، توسعه، اصلاح و نگهداری شبکه‌های فشار متوسط و فشار ضعیف می‌باشد.";


}



else if(text.includes("پست")){


answer=

"آرکا نیرو در طراحی، اجرا و توسعه پست‌های برق و زیرساخت‌های انرژی فعالیت دارد.";


}



else if(text.includes("گواهی") || text.includes("مدرک")){


answer=

"بخش Certification Center شامل گواهینامه‌ها، صلاحیت‌های تخصصی و استانداردهای شرکت خواهد بود.";


}



else if(text.includes("همکار") || text.includes("تماس")){


answer=

"برای شروع همکاری از بخش تماس سایت درخواست خود را ثبت کنید. تیم آرکا نیرو در سریع‌ترین زمان پاسخ خواهد داد.";


}



else{


answer=

"سؤال شما ثبت شد. لطفاً درباره خدمات برق قدرت، خط گرم، تجهیزات یا فناوری‌های آرکا نیرو سؤال کنید.";


}




setTimeout(()=>{


addMessage(

"🤖 ARKA AI:",

answer

);


},700);



}






function sendMessage(){


const input=document.getElementById("userInput");


let msg=input.value.trim();



if(msg==="") return;



addMessage(

"👤 شما:",

msg

);



input.value="";



botReply(msg);

    document
.getElementById("userInput")
.addEventListener("keypress",function(e){

if(e.key==="Enter"){

sendMessage();

}

});


}

}

}


}

//==============================
// پیام خوش آمد
//==============================

console.log("ARKA NIROO Version 1.0 Loaded Successfully");
