const nav = document.querySelector(".navbar");
document.querySelector("#hamburger-menu").onclick = () => {
    nav.classList.toggle("active");
}

const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
    if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
        nav.classList.remove("active");
    }
});
