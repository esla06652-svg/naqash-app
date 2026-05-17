let selectedService = "";

let historyStack = [];

const services = [
"نقاش محترف",
"شغل على المحارة",
"دهان قديم",
"رطوبة",
"أخشاب",
"أستر",
"لاكيه",
"دوكو",
"ديكور",
"ورق حائط",
"إيبوكسي",
"حجر مايكا",
"بديل رخام",
"بديل خشب",
"واجهات",
"مرمات محارة",
"دهانات بتينة",
"دهانات مطابخ",
"دهانات صالون دهبي",
"عزل أسطح"
];

window.onload = function () {

let container = document.getElementById("services");  

if (container) {  

    services.forEach(service => {  

        let div = document.createElement("div");  

        div.className = "serviceBox";  

        div.innerText = service;  

        div.onclick = () => openWelcome(service);  

        container.appendChild(div);  
    });  
}  

goHome();  

   

let ordersBtn = document.querySelector(".bottomNav div:nth-child(4)");  

if (ordersBtn) {  

    let pressTimer;  

    ordersBtn.addEventListener("touchstart", function () {  

        pressTimer = setTimeout(function () {  

            let btn = document.getElementById("clearOrdersBtn");  

            if (btn) {  

                btn.classList.toggle("hidden");  
            }  

        }, 1200);  

    });  

    ordersBtn.addEventListener("touchend", function () {  

        clearTimeout(pressTimer);  

    });  
}  

let slides = document.querySelectorAll(".slide");  

let index = 0;  

function showSlide() {  

    slides.forEach((slide) => {  

        slide.classList.remove("active");  

    });  

    index++;  

    if (index >= slides.length) {  

        index = 0;  

    }  

    slides[index].classList.add("active");  
}  

if (slides.length > 0) {  

    slides[0].classList.add("active");  

    setInterval(showSlide, 3000);  
}

};

function savePage(pageId) {

if (historyStack[historyStack.length - 1] !== pageId) {  

    historyStack.push(pageId);  
}

}

function toggleMenu() {

let menu = document.getElementById("menuList");  

if (menu) {  

    menu.style.display =  
        menu.style.display === "block" ? "none" : "block";  
}

}

function closeMenu() {

let menu = document.getElementById("menuList");  

if (menu) {  

    menu.style.display = "none";  
}

}

document.addEventListener("click", function (e) {

let menu = document.getElementById("menuList");  

let icon = document.querySelector(".menuIcon");  

if (  
    menu &&  
    icon &&  
    !menu.contains(e.target) &&  
    !icon.contains(e.target)  
) {  

    menu.style.display = "none";  
}

});

function hideAll() {

let sections = [  
    "home",  
    "services",  
    "cleaning",  
    "offers",  
    "orders",  
    "complaints",  
    "about",  
    "privacy",  
    "welcome",  
    "formPage",  
    "contactBox"  
];  

sections.forEach(id => {  

    let element = document.getElementById(id);  

    if (element) {  

        element.style.display = "none";  

        element.classList.add("hidden");  
    }  
});  

let backBtn = document.getElementById("backBtn");  

if (backBtn) {  

    backBtn.classList.add("hidden");  
}

}
function showPage(pageId, displayType = "block") {

hideAll();

savePage(pageId);

let el = document.getElementById(pageId);

if (el) {

    el.classList.remove("hidden");

    el.style.display = displayType;
}

let featuresBox = document.querySelector(".featuresBox");

if (featuresBox) {

    if (
        pageId === "orders" ||
        pageId === "formPage"
    ) {

        featuresBox.style.display = "none";

    } else {

        featuresBox.style.display = "block";
    }
}

if (pageId !== "home") {

    let backBtn = document.getElementById("backBtn");

    if (backBtn) {

        backBtn.classList.remove("hidden");
    }
}

}

function showServices() {

showPage("services", "grid");

}

function showCleaning() {

showPage("cleaning");

}

function showOffers() {

showPage("offers", "grid");

}

function showOrders() {

showPage("orders");

}

function showAbout() {

showPage("about");

}

function showComplaints() {

showPage("complaints");

}

function showPrivacy() {

showPage("privacy");

}

function openWelcome(service) {

selectedService = service;  

showPage("welcome");

}

function showForm() {

showPage("formPage");

}

function contactUs() {

showPage("contactBox");

}

function goHome() {

historyStack = [];  

showPage("home");

}

function goBack() {

if (historyStack.length > 1) {  

    historyStack.pop();  

    let previousPage = historyStack[historyStack.length - 1];  

    let displayType = "block";  

    if (  
        previousPage === "services" ||  
        previousPage === "offers"  
    ) {  

        displayType = "grid";  
    }  

    hideAll();  

    let el = document.getElementById(previousPage);  

    if (el) {  

        el.classList.remove("hidden");  

        el.style.display = displayType;  
    }  

    if (previousPage !== "home") {  

        let backBtn = document.getElementById("backBtn");  

        if (backBtn) {  

            backBtn.classList.remove("hidden");  
        }  
    }  

} else {  

    goHome();  
}

}

function sendComplaint() {

let text = document.getElementById("complaintText");  

if (!text || text.value.trim() === "") {  

    alert("اكتب الشكوى أو الاقتراح");  

    return;  
}  

emailjs.send(  
    "service_94l7und",  
    "template_zoftj6d",  
    {  
        service: "شكوى أو اقتراح",  
        name: "رسالة جديدة",  
        phone: "غير موجود",  
        location: "غير موجود",  
        message: text.value  
    }  
)  

.then(function () {  

    let successBox = document.createElement("div");  

    successBox.style.position = "fixed";  
    successBox.style.top = "50%";  
    successBox.style.left = "50%";  
    successBox.style.transform = "translate(-50%, -50%)";  
    successBox.style.background = "#1e1e1e";  
    successBox.style.color = "#fff";  
    successBox.style.padding = "20px";  
    successBox.style.borderRadius = "15px";  
    successBox.style.zIndex = "9999";  
    successBox.style.textAlign = "center";  
    successBox.style.fontSize = "20px";  

    successBox.innerHTML = `  
        <div style="font-size:50px;margin-bottom:10px;">✅</div>  
        <div>تم إرسال الرسالة بنجاح</div>  
    `;  

    document.body.appendChild(successBox);  

    setTimeout(() => {  

        successBox.remove();  

    }, 2500);  

    text.value = "";  

    goHome();  

})  

.catch(function(error) {  

    alert("حدث خطأ أثناء الإرسال");  

    console.log(error);  

});

}

function sendOrder() {

let name = document.getElementById("name");  

let phone = document.getElementById("phone");  

let message = document.getElementById("message");  

let location = document.getElementById("location");  

if (!name || !phone || !location) {  

    alert("بعض الحقول غير موجودة");  

    return;  
}  

let sendBtn = document.getElementById("sendBtn");  

if (  
    name.value.trim() === "" ||  
    phone.value.trim() === "" ||  
    location.value.trim() === ""  
) {  

    alert("من فضلك اكتب الاسم ورقم التليفون والعنوان");  
    return;
}

let phoneValue = phone.value.trim();

if(!/^(01[0-9]{9}|٠١[٠-٩]{9})$/.test(phoneValue)){
let errorBox = document.createElement("div");

errorBox.style.position = "fixed";
errorBox.style.top = "50%";
errorBox.style.left = "50%";
errorBox.style.transform = "translate(-50%, -50%)";
errorBox.style.background = "#1e1e1e";
errorBox.style.color = "#fff";
errorBox.style.padding = "20px";
errorBox.style.borderRadius = "15px";
errorBox.style.zIndex = "9999";
errorBox.style.textAlign = "center";
errorBox.style.fontSize = "20px";
errorBox.style.width = "80%";
errorBox.style.maxWidth = "320px";
errorBox.style.boxShadow = "0 0 20px rgba(255,0,0,0.5)";

errorBox.innerHTML = `
<div style="font-size:50px;margin-bottom:10px;">❌</div>
<div>اكتب رقم هاتف مصري صحيح</div>
`;

document.body.appendChild(errorBox);

setTimeout(() => {

errorBox.remove();

}, 2500);
return;
}



if (sendBtn) {  

    sendBtn.disabled = true;  

    sendBtn.innerText = "جاري الإرسال...";  
}  

let order = {  

    service: selectedService,  

    name: name.value,  

    phone: phone.value,  

    location: location.value,  

    message: message ? message.value : "",  

    date: Date.now()  
};  

let orders =  
    JSON.parse(localStorage.getItem("orders") || "[]");  

orders.push(order);  

localStorage.setItem("orders", JSON.stringify(orders));  

emailjs.send(  
    "service_94l7und",  
    "template_zoftj6d",  
    {  
        service: selectedService,  
        name: name.value,  
        phone: phone.value,  
        location: location.value,  
        message: message ? message.value : ""  
    }  
)  

.then(function () {  

    let successBox = document.createElement("div");  

    successBox.style.position = "fixed";  
    successBox.style.top = "50%";  
    successBox.style.left = "50%";  
    successBox.style.transform = "translate(-50%, -50%)";  
    successBox.style.background = "#1e1e1e";  
    successBox.style.color = "#fff";  
    successBox.style.padding = "20px";  
    successBox.style.borderRadius = "15px";  
    successBox.style.zIndex = "9999";  
    successBox.style.textAlign = "center";  
    successBox.style.fontSize = "20px";  
    successBox.style.width = "80%";  
    successBox.style.maxWidth = "320px";  
    successBox.style.boxShadow = "0 0 20px rgba(0,0,0,0.5)";  

    successBox.innerHTML = `  
        <div style="font-size:50px;margin-bottom:10px;">✅</div>  
        <div>تم إرسال الطلب بنجاح</div>  
    `;  

    document.body.appendChild(successBox);  

    setTimeout(() => {  

        successBox.remove();  

    }, 2500);  

    name.value = "";  

    phone.value = "";  

    if (message) {  

        message.value = "";  
    }  

    location.value = "";  

    if (sendBtn) {  

        sendBtn.disabled = false;  

        sendBtn.innerText = "إرسال الطلب";  
    }  

    goHome();  

})  

.catch(function (error) {  

    alert("حدث خطأ أثناء الإرسال");  

    console.log(error);  

    if (sendBtn) {  

        sendBtn.disabled = false;  

        sendBtn.innerText = "إرسال الطلب";  
    }  
});

}

function sendContactMessage() {

let message = document.getElementById("contactMessage");  

if (!message || message.value.trim() === "") {  

    alert("اكتب رسالتك");  

    return;  
}  

emailjs.send(  
    "service_94l7und",  
    "template_zoftj6d",  
    {  
        service: "تواصل معنا",  
        name: "رسالة جديدة",  
        phone: "غير موجود",  
        location: "غير موجود",  
        message: message.value  
    }  
)  

.then(function () {  

    let successBox = document.createElement("div");  

    successBox.style.position = "fixed";  
    successBox.style.top = "50%";  
    successBox.style.left = "50%";  
    successBox.style.transform = "translate(-50%, -50%)";  
    successBox.style.background = "#1e1e1e";  
    successBox.style.color = "#fff";  
    successBox.style.padding = "20px";  
    successBox.style.borderRadius = "15px";  
    successBox.style.zIndex = "9999";  
    successBox.style.textAlign = "center";  
    successBox.style.fontSize = "20px";  

    successBox.innerHTML = `  
        <div style="font-size:50px;margin-bottom:10px;">✅</div>  
        <div>تم إرسال الرسالة بنجاح</div>  
    `;  

    document.body.appendChild(successBox);  

    setTimeout(() => {  

        successBox.remove();  

    }, 2500);  

    message.value = "";  

    goHome();  

})  

.catch(function(error) {  

    alert("حدث خطأ أثناء الإرسال");  

    console.log(error);  

});

}

function showCurrentOrders() {

let container = document.getElementById("currentOrders");  

let old = document.getElementById("oldOrders");  

if (!container || !old) return;  

old.classList.add("hidden");  

container.classList.remove("hidden");  

let orders =  
    JSON.parse(localStorage.getItem("orders") || "[]");  

container.innerHTML = "";  

let now = Date.now();  

orders.forEach(order => {  

    let diff =  
        (now - order.date) / (1000 * 60 * 60 * 24);  

    if (diff < 10) {  

        let div = document.createElement("div");  

        div.className = "orderBox";  

        div.innerHTML = `  
        الخدمة: ${order.service}<br>  
        الاسم: ${order.name}<br>  
        العنوان: ${order.location}  
        `;  

        container.appendChild(div);  
    }  
});  

if (container.innerHTML === "") {  

    container.innerHTML =  
        "لا يوجد طلبات تحت التنفيذ";  
}

}

function showOldOrders() {

let container = document.getElementById("oldOrders");  

let current = document.getElementById("currentOrders");  

if (!container || !current) return;  

current.classList.add("hidden");  

container.classList.remove("hidden");  

let orders =  
    JSON.parse(localStorage.getItem("orders") || "[]");  

container.innerHTML = "";  

let now = Date.now();  

orders.forEach(order => {  

    let diff =  
        (now - order.date) / (1000 * 60 * 60 * 24);  

    if (diff >= 10) {  

        let div = document.createElement("div");  

        div.className = "orderBox";  

        div.innerHTML = `  
        الخدمة: ${order.service}<br>  
        الاسم: ${order.name}<br>  
        العنوان: ${order.location}  
        `;  

        container.appendChild(div);  
    }  
});  

if (container.innerHTML === "") {  

    container.innerHTML =  
        "لا يوجد طلبات سابقة";  
}

}

function clearOrders() {

if (confirm("هل تريد مسح كل الطلبات؟")) {  

    localStorage.removeItem("orders");  

    alert("تم مسح كل الطلبات");  

    showOrders();  
}

}


window.addEventListener("offline", function () {

hideAll();

let page = document.getElementById("offlinePage");

if(page){

page.classList.remove("hidden");

page.style.display = "block";

}

});

window.addEventListener("online", function () {

goHome();

});


window.addEventListener("load", function () {
  setTimeout(function () {
    const splash = document.getElementById("splash");

    if (splash) {
      splash.style.opacity = "0";

      setTimeout(function () {
        splash.style.display = "none";
      }, 500);
    }

  }, 3000);
});


