// textImageToggle.js
document.addEventListener("DOMContentLoaded", () => {
    const toggleCard = document.getElementById('text-image-toggle');
    const text = "Polar bears have black skin under their white fur.";
    const imageUrl = "https://i.redd.it/mjfolpjbhpad1.jpeg";

    // function to handle mouseover
    function handleMouseOver() {
        toggleCard.style.backgroundImage = `url(${imageUrl})`;
        toggleCard.style.backgroundSize = "cover";
        toggleCard.style.backgroundPosition = "center";
        toggleCard.textContent = ""; // clear text on hovering over card.
    }

    // Function to handle mouseleave
    function handleMouseLeave() {
        toggleCard.style.backgroundImage = "none"; //removes image
        toggleCard.textContent = text; // brings text back
    }

    // card initialized with text
    toggleCard.textContent = text;

    // event listeners for mouseover and mouseleave
    toggleCard.addEventListener("mouseover", handleMouseOver);
    toggleCard.addEventListener("mouseleave", handleMouseLeave);
});

