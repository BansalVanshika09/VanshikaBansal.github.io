document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;

    // Load dark mode preference from local storage
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
    }

    darkModeToggle.addEventListener("click", function() {
        body.classList.toggle("dark-mode");
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.setItem("darkMode", "disabled");
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Dynamic background images for sections
    const sections = document.querySelectorAll("section");
    const images = ["bg1.jpg", "bg2.jpg", "bg3.jpg", "bg4.jpg"];
    sections.forEach((section, index) => {
        section.style.background = `url('images/${images[index % images.length]}') center/cover no-repeat`;
        section.style.color = "white";
        section.style.padding = "100px 20px";
    });

    // Fade-in animations for elements on scroll
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll(".project, .service, .skill-category").forEach(element => {
        element.classList.add("hidden");
        observer.observe(element);
    });

    // Image Carousel Functionality
    const carousel = document.querySelector(".carousel-images");
    const imagesList = document.querySelectorAll(".carousel-images img");
    const prevBtn = document.querySelector(".carousel-btn.left");
    const nextBtn = document.querySelector(".carousel-btn.right");

    let index = 0;

    function updateCarousel() {
        carousel.style.transform = `translateX(${-index * 100}%)`;
    }

    nextBtn.addEventListener("click", function() {
        index = (index + 1) % imagesList.length;
        updateCarousel();
    });

    prevBtn.addEventListener("click", function() {
        index = (index - 1 + imagesList.length) % imagesList.length;
        updateCarousel();
    });

    // Auto-slide every 3 seconds
    setInterval(() => {
        index = (index + 1) % imagesList.length;
        updateCarousel();
    }, 3000);
});
