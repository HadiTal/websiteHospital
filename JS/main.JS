/*--------First slider---------------- */
const wrapper = document.querySelector(".wraper");

const indicators = [...document.querySelectorAll(".indicators button")];

console.log(indicators);

let currentTestimonial = 0; // Default 0

indicators.forEach((iteam, i) => {
    iteam.addEventListener("click", () => {
        indicators[currentTestimonial].classList.remove("active");
        wrapper.style.marginLeft = `-${100 * i}%`;
        iteam.classList.add("active");
        currentTestimonial = i;
    });
});



/*--------End slider----------------- */

/*--------First menu nav bar---------------- */

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

// Initialize and add the map
function initMap() {
    // Your location
    const loc = { lat: 34.583988, lng: 50.910225 };
    // Centered map on location
    const map = new google.maps.Map(document.querySelector(".map"), {
        zoom: 14,
        center: loc,
    });
    // The marker, positioned at location
    const marker = new google.maps.Marker({ position: loc, map: map });
}

/*--------End menu nav bar---------------- */

$(document).ready(function() {
    $(".box-doctrors").mouseenter(function() {
        $(this).children(".container-social-media").css({ top: "70%" });
        $(this).children(".container-social-media").css({ opacity: "1" });
        $(this)
            .children(".container-social-media")
            .css({ "background-color": "#ffff" });
    });

    $(".box-doctrors").mouseleave(function() {
        $(this).children(".container-social-media").css({ opacity: "0" });
        $(this).children(".container-social-media").css({ "z-index": "0" });
        $(this)
            .children(".container-social-media")
            .css({ "background-color": "transparent" });
        $(this).children(".container-social-media").css({ top: "100%" });
    });

    $(window).scroll(function() {
        var too = $(window).scrollTop();

        if (too > 0) {
            $(".navbar").css({ opacity: "0" });
        } else {
            $(".navbar").css({ opacity: "1" });
        }
    });
});