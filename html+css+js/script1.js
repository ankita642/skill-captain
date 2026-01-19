// Select the element
const btn = document.getElementById("myButton");
const demoParagraph = document.getElementById("demo");

// Define the function to run when the event occurs
function handleButtonClick() {
    demoParagraph.innerHTML = "Button clicked at " + Date();
}

// Attach the event listener to the element
btn.addEventListener("click", handleButtonClick);
const userButton = document.getElementById('triggerButton');
const autoButton = document.getElementById('autoClickButton');
const log = document.getElementById('log');

// 1. Attach a listener to the main button (this will run for both user and programmatic clicks)
userButton.addEventListener('click', function() {
    log.innerHTML += '<br>Button was clicked!';
});

// 2. Attach a listener to the second button to trigger the first one
autoButton.addEventListener('click', function() {
    log.innerHTML += '<br>Auto-click button clicked, triggering the first button...';
    // Use the native DOM click() method to simulate a user click
    userButton.click(); 
});