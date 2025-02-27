
    window.onscroll = function() {
        var navbar = document.getElementById("navbar");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            navbar.classList.add("shrink");
        } else {
            navbar.classList.remove("shrink");
        }
    };

    document.addEventListener("DOMContentLoaded", function () {
        let slideIndex = 0;
        const slides = document.querySelectorAll(".slide");
    
        function showSlide(index) {
            slides.forEach(slide => slide.style.display = "none");
            slides[index].style.display = "block";
        }
    
        showSlide(slideIndex);
    
        window.changeSlide = function (n) {
            slideIndex = (slideIndex + n + slides.length) % slides.length;
            showSlide(slideIndex);
        };
    });
    