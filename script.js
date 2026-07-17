/* ===================================
ARKA NIROO
SCRIPT - PART 1
=================================== */

/* ==========================
MOBILE MENU
========================== */

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

if (menuToggle && menu) {

    menuToggle.addEventListener("click", () => {

        menu.classList.toggle("active");

        if (menu.classList.contains("active")) {
            menuToggle.innerHTML = "✕";
        } else {
            menuToggle.innerHTML = "☰";
        }

    });

}


/* ==========================
CLOSE MENU AFTER CLICK
========================== */

const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

        if (menuToggle) {
            menuToggle.innerHTML = "☰";
        }

    });

});


/* ==========================
SMOOTH SCROLL
========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            window.scrollTo({

                top: target.offsetTop - 90,

                behavior: "smooth"

            });

        }

    });

});


/* ==========================
HEADER EFFECT
========================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 60) {

        header.style.background =
            "rgba(7,21,33,.98)";

        header.style.boxShadow =
            "0 10px 35px rgba(0,0,0,.35)";

        header.style.padding = "0";

    } else {

        header.style.background =
            "rgba(7,21,33,.90)";

        header.style.boxShadow =
            "none";

    }

});


/* ==========================
SCROLL PROGRESS BAR
========================== */

const progressBar = document.createElement("div");

progressBar.className = "scroll-progress";

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {

    const totalHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        (window.scrollY / totalHeight) * 100;

    progressBar.style.width = progress + "%";

});


/* ==========================
PROGRESS BAR STYLE
========================== */

const progressStyle = document.createElement("style");

progressStyle.innerHTML = `

.scroll-progress{

    position:fixed;

    top:0;

    right:0;

    width:0;

    height:4px;

    background:#00d9ff;

    z-index:999999;

    box-shadow:0 0 20px #00d9ff;

}

`;

document.head.appendChild(progressStyle);


/* ==========================
ACTIVE MENU LINK
========================== */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (

            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight

        ) {

            current = section.getAttribute("id");

        }

    });

    menuLinks.forEach(link => {

        link.classList.remove("active-link");

        if (

            link.getAttribute("href") ===
            `#${current}`

        ) {

            link.classList.add("active-link");

        }

    });

});


/* ==========================
ACTIVE LINK STYLE
========================== */

const activeStyle = document.createElement("style");

activeStyle.innerHTML = `

.active-link{

    color:#00d9ff !important;

}

.active-link::after{

    width:100% !important;

}

`;

document.head.appendChild(activeStyle);
/* ===================================
ARKA NIROO
SCRIPT - PART 2
=================================== */

/* ==========================
SCROLL ANIMATION
========================== */

const animatedItems = document.querySelectorAll(

    ".vision-card,\
    .card,\
    .innovation-card,\
    .lab-card,\
    .project-card,\
    .future-card,\
    .stat,\
    .contact-card,\
    .equipment-card,\
    .certificate-card"

);

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {

        threshold: 0.15

    }

);

animatedItems.forEach(item => {

    item.classList.add("hidden-item");

    observer.observe(item);

});


/* ==========================
ANIMATION STYLE
========================== */

const animationStyle = document.createElement("style");

animationStyle.innerHTML = `

.hidden-item{

    opacity:0;

    transform:translateY(60px);

    transition:

        opacity .8s ease,

        transform .8s ease;

}

.show{

    opacity:1;

    transform:translateY(0);

}

`;

document.head.appendChild(animationStyle);


/* ==========================
STATISTICS COUNTER
========================== */

const counters = document.querySelectorAll(".stat h3");

let counterStarted = false;

function startCounters() {

    if (counterStarted) return;

    const statsSection = document.querySelector(".statistics");

    if (!statsSection) return;

    const position = statsSection.getBoundingClientRect().top;

    if (position < window.innerHeight - 100) {

        counterStarted = true;

        counters.forEach(counter => {

            const text = counter.innerText;

            const target = parseInt(text);

            if (isNaN(target)) return;

            let value = 0;

            const speed = target / 70;

            const update = () => {

                value += speed;

                if (value < target) {

                    counter.innerText =
                        Math.floor(value);

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = text;

                }

            };

            update();

        });

    }

}

window.addEventListener("scroll", startCounters);


/* ==========================
FLOATING ICONS
========================== */

const icons = document.querySelectorAll(

    ".icon,\
    .service-icon,\
    .innovation-icon,\
    .project-icon"

);

icons.forEach(icon => {

    icon.addEventListener("mouseenter", () => {

        icon.style.transform =

            "scale(1.15) rotate(10deg)";

    });

    icon.addEventListener("mouseleave", () => {

        icon.style.transform =

            "scale(1) rotate(0deg)";

    });

});


/* ==========================
PARALLAX HERO
========================== */

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    if (!hero) return;

    const offset = window.scrollY * 0.4;

    hero.style.backgroundPosition =

        `center ${offset}px`;

});


/* ==========================
BACK TO TOP BUTTON
========================== */

const backButton = document.createElement("button");

backButton.className = "back-top";

backButton.innerHTML = "↑";

document.body.appendChild(backButton);


/* ==========================
SHOW / HIDE BUTTON
========================== */

window.addEventListener("scroll", () => {

    if (window.scrollY > 700) {

        backButton.classList.add("show-top");

    } else {

        backButton.classList.remove("show-top");

    }

});


/* ==========================
CLICK EVENT
========================== */

backButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ==========================
BUTTON STYLE
========================== */

const backStyle = document.createElement("style");

backStyle.innerHTML = `

.back-top{

    position:fixed;

    bottom:30px;

    right:30px;

    width:58px;

    height:58px;

    border:none;

    border-radius:50%;

    background:#00d9ff;

    color:#001018;

    font-size:26px;

    cursor:pointer;

    opacity:0;

    visibility:hidden;

    transform:translateY(20px);

    transition:.35s;

    z-index:9999;

    box-shadow:

        0 0 25px rgba(0,217,255,.4);

}

.show-top{

    opacity:1;

    visibility:visible;

    transform:translateY(0);

}

.back-top:hover{

    transform:translateY(-6px);

    box-shadow:

        0 0 35px rgba(0,217,255,.8);

}

@media(max-width:700px){

    .back-top{

        width:50px;

        height:50px;

        font-size:22px;

        bottom:20px;

        right:20px;

    }

}

`;

document.head.appendChild(backStyle);


/* ==========================
PAGE LOADER EFFECT
========================== */

window.addEventListener("load", () => {

    document.body.classList.add("page-loaded");

});

const loaderStyle = document.createElement("style");

loaderStyle.innerHTML = `

body{

    opacity:0;

    transition:opacity .7s ease;

}

body.page-loaded{

    opacity:1;

}

`;

document.head.appendChild(loaderStyle);
/* ===================================
ARKA AI CHATBOT
SCRIPT - PART 3
=================================== */

const chatButton = document.getElementById("chatButton");
const chatBox = document.getElementById("chatBox");
const closeChat = document.getElementById("closeChat");

const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");
const chatBody = document.getElementById("chatBody");


/* ==========================
OPEN / CLOSE CHAT
========================== */

if (chatButton) {

    chatButton.addEventListener("click", () => {

        chatBox.classList.toggle("active");

    });

}

if (closeChat) {

    closeChat.addEventListener("click", () => {

        chatBox.classList.remove("active");

    });

}


/* ==========================
SCROLL TO LAST MESSAGE
========================== */

function scrollChat() {

    chatBody.scrollTop = chatBody.scrollHeight;

}


/* ==========================
CREATE MESSAGE
========================== */

function createMessage(text, type) {

    const message = document.createElement("div");

    message.className = `message ${type}`;

    message.innerHTML = text;

    chatBody.appendChild(message);

    scrollChat();

}


/* ==========================
BOT ANSWERS
========================== */

function botAnswer(text) {

    const msg = text.toLowerCase();

    let answer = "";

    if (

        msg.includes("سلام") ||
        msg.includes("hello") ||
        msg.includes("hi")

    ) {

        answer = `
        سلام 👋<br><br>
        به ARKA AI خوش آمدید.
        چطور می‌توانم کمکتان کنم؟
        `;

    }

    else if (

        msg.includes("خط گرم") ||
        msg.includes("hotline")

    ) {

        answer = `
        ⚡ عملیات خط گرم به معنای تعمیر و نگهداری
        شبکه برق بدون خاموشی است.

        <br><br>

        خدمات آرکا نیرو:

        <br>• تعمیر خطوط
        <br>• تعویض تجهیزات
        <br>• کاهش خاموشی
        <br>• افزایش پایداری شبکه
        `;

    }

    else if (

        msg.includes("خدمات")

    ) {

        answer = `
        🏗 خدمات اصلی آرکا نیرو:

        <br><br>

        • عملیات خط گرم

        <br>

        • اجرای شبکه فشار متوسط

        <br>

        • احداث پست برق

        <br>

        • انرژی خورشیدی

        <br>

        • تعمیر و نگهداری

        <br>

        • هوش مصنوعی و GIS
        `;

    }

    else if (

        msg.includes("تجهیزات")

    ) {

        answer = `
        🛠 تجهیزات آرکا نیرو:

        <br><br>

        • بالابرهای تخصصی

        <br>

        • ابزار خط گرم

        <br>

        • تجهیزات ایمنی

        <br>

        • تجهیزات تست و اندازه‌گیری

        <br>

        • ناوگان عملیاتی
        `;

    }

    else if (

        msg.includes("پروژه")

    ) {

        answer = `
        📋 آرکا نیرو در زمینه‌های زیر فعال است:

        <br><br>

        • خطوط فشار متوسط

        <br>

        • شبکه توزیع

        <br>

        • پست برق

        <br>

        • شبکه هوشمند

        <br>

        • سیستم‌های دیجیتال
        `;

    }

    else if (

        msg.includes("قیمت") ||
        msg.includes("هزینه")

    ) {

        answer = `
        💰 برای برآورد هزینه پروژه لطفاً اطلاعات زیر را ارسال کنید:

        <br><br>

        • نوع پروژه

        <br>

        • محل اجرا

        <br>

        • حجم عملیات

        <br>

        • زمان اجرا
        `;

    }

    else if (

        msg.includes("همکاری") ||
        msg.includes("استخدام")

    ) {

        answer = `
        🤝 برای همکاری با آرکا نیرو رزومه و اطلاعات تماس خود را ارسال کنید.

        <br><br>

        حوزه‌ها:

        <br>

        • مهندسی برق

        <br>

        • برنامه‌نویسی

        <br>

        • هوش مصنوعی

        <br>

        • مدیریت پروژه
        `;

    }

    else {

        answer = `
        🤖 سوال شما دریافت شد.

        <br><br>

        من می‌توانم درباره این موضوعات کمک کنم:

        <br>

        • خدمات مهندسی برق

        <br>

        • خط گرم

        <br>

        • تجهیزات

        <br>

        • پروژه‌ها

        <br>

        • همکاری و قیمت‌گذاری
        `;

    }

    setTimeout(() => {

        createMessage(answer, "bot-message");

    }, 600);

}


/* ==========================
SEND MESSAGE
========================== */

function sendMessage() {

    const text = userInput.value.trim();

    if (text === "") return;

    createMessage(text, "user-message");

    userInput.value = "";

    botAnswer(text);

}


/* ==========================
BUTTON CLICK
========================== */

if (sendBtn) {

    sendBtn.addEventListener(

        "click",

        sendMessage

    );

}


/* ==========================
ENTER KEY
========================== */

if (userInput) {

    userInput.addEventListener(

        "keydown",

        function (e) {

            if (e.key === "Enter") {

                sendMessage();

            }

        }

    );

}


/* ==========================
QUICK BUTTONS
========================== */

window.quick = function (text) {

    userInput.value = text;

    sendMessage();

};


/* ==========================
WELCOME MESSAGE
========================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        createMessage(

            `
            👋 سلام.

            <br><br>

            به سامانه هوشمند ARKA AI خوش آمدید.

            <br><br>

            آماده پاسخ‌گویی درباره:

            <br>

            ⚡ برق قدرت

            <br>

            🛰 شبکه هوشمند

            <br>

            🤖 هوش مصنوعی

            <br>

            📊 مدیریت پروژه
            `,

            "bot-message"
            async function loadGallery() {

    const response = await fetch("gallery.json");

    const data = await response.json();

    const container = document.getElementById("gallery");

    container.innerHTML = "";

    data.albums.forEach(album => {

        container.innerHTML += `

        <div class="album" onclick="openAlbum('${album.folder}')">

            <img src="assets/images/gallery/${album.folder}/${album.cover}" alt="${album.title}">

            <h3>${album.title}</h3>

            <span>${album.images.length} تصویر</span>

        </div>

        `;

    });

}

loadGallery();

        );

    }, 1200);

});
