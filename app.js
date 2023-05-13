// access toggle button and navigation
var nav = document.querySelector(".primary-navigation");
var navToggle = document.querySelector(".mobile-nav-toggle");
// listen for clicks on the toggle button

navToggle.addEventListener('click', () => {
    const visibility = nav.getAttribute("data-visible");
    //if clicked and open, close it
    if(visibility === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        //if clicked and closed, open it
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);

    }
});
