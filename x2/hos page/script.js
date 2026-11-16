// ======================================
// 1. MOBILE NAVIGATION MENU
// ======================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});


// ======================================
// 2. CLOSE MENU AFTER CLICKING A LINK
// ======================================

document.querySelectorAll(".nav-links a").forEach((link) => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
    });

});


// ======================================
// 3. SHOW AND HIDE SEARCH BOX
// ======================================

const searchButton = document.getElementById("searchButton");
const searchPanel = document.getElementById("searchPanel");

searchButton.addEventListener("click", () => {

    searchPanel.classList.toggle("show");

});


// ======================================
// 4. WEBSITE SEARCH FUNCTION
// ======================================

const searchSubmit = document.getElementById("searchSubmit");
const siteSearch = document.getElementById("siteSearch");

searchSubmit.addEventListener("click", () => {

    const query = siteSearch.value.trim().toLowerCase();

    if (!query) {
        alert("Please enter something to search for.");
        return;
    }

    const pageText = document.querySelector("main").innerText.toLowerCase();

    if (pageText.includes(query)) {

        const matchingElement = [
            ...document.querySelectorAll(
                "main h1, main h2, main p, main b, main li"
            )
        ].find((element) =>
            element.innerText.toLowerCase().includes(query)
        );

        if (matchingElement) {

            matchingElement.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

            matchingElement.classList.add("search-highlight");

            setTimeout(() => {
                matchingElement.classList.remove("search-highlight");
            }, 1800);

        }

    } else {

        alert("No matching information was found on this page.");

    }

});


// ======================================
// 5. HERO SLIDER DOTS
// ======================================

const dots = document.querySelectorAll(".dot");

let activeDot = 0;

function changeSlide(direction) {

    dots[activeDot].classList.remove("active");

    activeDot = (activeDot + direction + dots.length) % dots.length;

    dots[activeDot].classList.add("active");

}


// ======================================
// 6. PREVIOUS SLIDE BUTTON
// ======================================

document.getElementById("prevSlide").addEventListener("click", () => {

    changeSlide(-1);

});


// ======================================
// 7. NEXT SLIDE BUTTON
// ======================================

document.getElementById("nextSlide").addEventListener("click", () => {

    changeSlide(1);

});


// ======================================
// 8. CLICKING SLIDER DOTS
// ======================================

dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        dots[activeDot].classList.remove("active");

        activeDot = index;

        dots[activeDot].classList.add("active");

    });

});