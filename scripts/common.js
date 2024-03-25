document.addEventListener('DOMContentLoaded', function () {
    var menuToggle = document.querySelector('.menu-toggle');
    var nav = document.querySelector('nav');

    function toggleNav() {
        console.log('Hamburger icon clicked!');
        nav.classList.toggle('active');
        menuToggle.classList.toggle('active');
    }

    function closeNav() {
        console.log('Tapped outside the menu');
        nav.classList.remove('active');
        menuToggle.classList.remove('active');
    }

    menuToggle.addEventListener('click', toggleNav);

    // Close the menu when clicking outside
    document.addEventListener('click', function (event) {
        var isClickInside = menuToggle.contains(event.target) || nav.contains(event.target);

        if (!isClickInside) {
            closeNav();
        }
    });
});

//```// Shrink the NAV on scroll
//document.addEventListener("DOMContentLoaded", (function() {
//    var e = document.querySelector("header"),
//        t = document.querySelector(".iconlogo");
//    window.addEventListener("scroll", (function() {
//        window.scrollY > 0 ? (e.classList.add("nav-shrink"), t.style.height = "50px", t.style.width = "auto") : (e.classList.remove("nav-shrink"), t.style.height = "100px", t.style.transition = "height 0.3s ease-in-out")
//    }))
//}));
//```

//Dropdown function
//$(document).ready(function () {
//    var servicesDropdown = $('.dropdown');
//    var lastClickTime = 0;

//    servicesDropdown.on('click', function (e) {
//        var currentTime = new Date().getTime();
//        var timeDiff = currentTime - lastClickTime;

//        if (window.innerWidth <= 768) {
// Mobile view: Single click toggles dropdown
//            if (timeDiff < 10000) {
//                console.log('Mobile View - Double Click - Navigating to services.html');
//                window.location.href = 'services.html'; // Navigate to services page on double click
//            } else {
//                console.log('Mobile View - Single Click - Toggling dropdown');
//                servicesDropdown.toggleClass('active');
//            }
//        } else {
//            // Desktop view: Single click navigates to services.html, hover toggles dropdown
//            if (timeDiff = 300) {
//                console.log('Desktop View - Single Click - Navigating to services.html');
//                window.location.href = 'services.html'; // Navigate to services page on single click
//            } else {
//                console.log('Desktop View - Hover - Toggling dropdown');
//                servicesDropdown.toggleClass('active');
//            }
//        }

//        lastClickTime = currentTime;
//    });

//    $(document).on('click', function (e) {
//        if (!$(e.target).closest('.dropdown').length) {
//            servicesDropdown.removeClass('active');
//        }
//    });
//});
