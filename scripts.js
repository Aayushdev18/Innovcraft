let cartCount = 0; 
console.log(cartCount); 

document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", () => {
        cartCount++; 

        const cartIcon = document.querySelector(".fa-shopping-bag");
        if (!cartIcon) {
            console.error("Cart icon not found!");
            return;
        }

        let bubble = document.querySelector(".cart-bubble");
        if (!bubble) {
            bubble = document.createElement("div");
            bubble.className = "cart-bubble";
            cartIcon.parentNode.appendChild(bubble);
        }

    
        bubble.textContent = cartCount;

        alert("Your item has been added to the cart!");
    });
});

const subscribeButton = document.querySelector(".input-btn button");
if (subscribeButton) {
    subscribeButton.addEventListener("click", () => {
        const emailInput = document.querySelector(".input-btn input");
        if (!emailInput) {
            console.error("Email input not found!");
            return;
        }

        const emailValue = emailInput.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(emailValue)) {
            alert("Please enter a valid email address.");
        } else {
            alert("Subscribed successfully!");
        }
    });
} else {
    console.error("Subscribe button not found!");
}

document.querySelectorAll(".footer-links a").forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault(); 
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" }); 
        } else {
            console.error(`Target element with ID "${targetId}" not found!`);
        }
    });
});
