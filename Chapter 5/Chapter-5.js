// Select all button elements on the page
const buttons = document.querySelectorAll("button");

// Loop through each button
buttons.forEach(button => {

    // Add click event listener to each button
    button.addEventListener("click", () => {

        // Get the audio file name from data attribute
        const soundFile = button.getAttribute("data-sound");

        // Create a new audio object
        const audio = new Audio(`audio/${soundFile}`);

        // Play the selected audio file
        audio.play();
    });

});