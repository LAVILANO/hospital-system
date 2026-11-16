
// Wait until the page is loaded
document.addEventListener("DOMContentLoaded", function () {

    // Select all navigation links
    const navLinks = document.querySelectorAll(".nav-link");

    // Highlight the selected navigation link
    navLinks.forEach(function(link) {

        link.addEventListener("click", function() {

            navLinks.forEach(function(item) {
                item.classList.remove("active");
            });

            this.classList.add("active");

        });

    });

    // Display a welcome message in the browser console
    console.log("Ministry of Health website loaded successfully!");

});
