document.addEventListener("DOMContentLoaded", function() {
    const navList = document.getElementById("nav-list");
    const navLeft = document.getElementById("nav-left");
    const navRight = document.getElementById("nav-right");

    navLeft.addEventListener("click", function() {
        navList.scrollBy({
            left: -200,
            behavior: 'smooth'
        });
    });

    navRight.addEventListener("click", function() {
        navList.scrollBy({
            left: 200,
            behavior: 'smooth'
        });
    });
});
