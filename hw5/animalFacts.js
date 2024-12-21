// animalFacts.js
document.addEventListener("DOMContentLoaded", () => {
    const factCard = document.getElementById('animal-facts');
    const facts = [
        "Octopuses have three hearts.",
        "Seahorses are the only animals where the male gives birth.",
        "Jellyfish are mostly water.",
        "Chameleons can change their skin color.",
        "The Komodo dragon has venomous bites.",
        "Crocodiles have the strongest bite of any animal in the world.",
        "Ants can lift up to 50 times their own body weight.",
        "Bees can recognize human faces.",
        "Dragonflies have extraordinary flight capabilities.",
        "Butterflies taste with their feet."
    ];

    function random_rgba() {
        var o = Math.round, r = Math.random, s = 255;
        return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
    }

    let index = 0;
    // to update facts and background
    function update() {
        factCard.textContent = facts[index]; // Update the fact
        factCard.style.backgroundColor = random_rgba(); // change the background
        index = (index + 1) % facts.length; // move to next, loop back
    }

    update();

    // starts every 2 seconds
    setInterval(update, 2000);
});
