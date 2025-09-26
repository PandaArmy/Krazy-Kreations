// Basic cart functionality (example)
let cart = [];

function addToCart(product = { name: "Product Name 1", price: 19.99 }) {
    cart.push(product);
    alert(`${product.name} has been added to your cart!`);
}

// Navigation active link (optional enhancement)
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });

    // Contact form submission (prevent default and show message)
    const contactForm = document.querySelector(".contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            alert("Thank you for contacting us! We'll get back to you soon.");
            contactForm.reset();
        });
    }
});