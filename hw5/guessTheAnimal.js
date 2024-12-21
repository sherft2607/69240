// guessTheAnimal.js
document.addEventListener("DOMContentLoaded", () => {
    const guessCard = document.getElementById('guess-animal');
    const question = "Which animal is the largest mammal in the world?";
    const answer = "The Blue Whale";

    let showingAnswer = false;

    // questions set as initial text
    guessCard.textContent = question;

    // show answer
    function toggleAnswer() {
        showingAnswer = !showingAnswer; // invert
        guessCard.textContent = showingAnswer ? answer : question; // show the new text
    }

    // add the click functionality
    guessCard.addEventListener("click", toggleAnswer);
});
