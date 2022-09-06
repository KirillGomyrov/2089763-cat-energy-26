let navMain = document.querySelector(".main-header");
let navToggle = document.querySelector(".main-header__toggle");

navMain.classList.remove("navigation--nojs");

navToggle.addEventListener("click", function() {
    if (navMain.classList.contains("main-header__toggle--closed")) {
        navMain.classList.remove("main-header__toggle--closed");
        navMain.classList.add("main-header__toggle--opened");
    } else {
        navMain.classList.add("main-header__toggle--closed");
        navMain.classList.remove("main-header__toggle--opened");
    }
});
