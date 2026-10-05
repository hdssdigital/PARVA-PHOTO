// =========================
// PARVA PHOTO - JavaScript
// =========================


// =========================
// 1. منوی موبایل
// =========================

const menuBtn = document.getElementById("menu-btn");
const mainMenu = document.getElementById("main-menu");

if (menuBtn && mainMenu) {

    menuBtn.addEventListener("click", function () {
        mainMenu.classList.toggle("open");
    });

    const menuLinks = mainMenu.querySelectorAll("a");

    menuLinks.forEach(function (link) {

        link.addEventListener("click", function () {
            mainMenu.classList.remove("open");
        });

    });

}


// =========================
// 2. دکمه برگشت به بالا
// =========================

const backToTop = document.querySelector(".back-to-top");

if (backToTop) {

    backToTop.style.display = "none";

    window.addEventListener("scroll", function () {

        if (window.scrollY > 400) {
            backToTop.style.display = "flex";
        } else {
            backToTop.style.display = "none";
        }

    });

}


// =========================
// 3. افکت کارت محصولات
// =========================

const products = document.querySelectorAll(".product");

products.forEach(function (product) {

    product.addEventListener("mouseenter", function () {
        product.style.transform = "translateY(-12px)";
    });

    product.addEventListener("mouseleave", function () {
        product.style.transform = "";
    });

});


// =========================
// 4. لینک‌های اینستاگرام
// =========================

const instagramLinks = document.querySelectorAll(
    'a[href="https://instagram.com/parva_photo0"]'
);

instagramLinks.forEach(function (link) {

    link.addEventListener("click", function () {
        console.log("Instagram PARVA PHOTO opened");
    });

});


// =========================
// 5. انیمیشن بخش‌های سایت
// =========================

const sections = document.querySelectorAll(
    ".products, .about, .info, .shipping, .contact, .instagram-final"
);

function showSections() {

    sections.forEach(function (section) {

        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            section.classList.add("show");
        }

    });

}

window.addEventListener("scroll", showSections);

showSections();


// =========================
// 6. پیام هنگام سفارش محصول
// =========================

const orderButtons = document.querySelectorAll(".order-button");

orderButtons.forEach(function (button) {

    button.addEventListener("click", function (event) {

        const product = button.closest(".product");
        const productName = product.querySelector("h3");

        if (productName) {

            const confirmed = confirm(
                "برای سفارش «" +
                productName.textContent.trim() +
                "» وارد صفحه اینستاگرام PARVA PHOTO می‌شوید."
            );

            if (!confirmed) {
                event.preventDefault();
            }

        }

    });

});


// =========================
// 7. تغییر عنوان صفحه هنگام اسکرول
// =========================

const pageSections = [
    {
        id: "products",
        title: "محصولات | PARVA PHOTO"
    },
    {
        id: "about",
        title: "درباره ما | PARVA PHOTO"
    },
    {
        id: "contact",
        title: "ارتباط با ما | PARVA PHOTO"
    }
];

window.addEventListener("scroll", function () {

    let currentTitle = "PARVA PHOTO";

    pageSections.forEach(function (section) {

        const element = document.getElementById(section.id);

        if (element) {

            const position = element.getBoundingClientRect().top;

            if (position <= 150) {
                currentTitle = section.title;
            }

        }

    });

    document.title = currentTitle;

});
// =========================
// 10. جستجوی محصولات
// =========================

const searchInput = document.getElementById("product-search");
const noResults = document.getElementById("no-results");

if (searchInput) {

    searchInput.addEventListener("input", function () {

        const searchText = searchInput.value.trim().toLowerCase();

        const products = document.querySelectorAll(".product");

        let foundProduct = false;

        products.forEach(function (product) {

            const productText = product.textContent.toLowerCase();

            if (productText.includes(searchText)) {

                product.style.display = "";
                foundProduct = true;

            } else {

                product.style.display = "none";

            }

        });

        if (noResults) {

            if (searchText !== "" && !foundProduct) {
                noResults.style.display = "block";
            } else {
                noResults.style.display = "none";
            }

        }

    });

}
// =========================
// 11. پیام خوش‌آمدگویی
// =========================

window.addEventListener("load", function () {

    console.log("به سایت PARVA PHOTO خوش آمدید!");

});