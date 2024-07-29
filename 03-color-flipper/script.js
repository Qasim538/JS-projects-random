// Get the button and the element to display the current color by their IDs
const btn = document.getElementById("new-colour-button");
const curColorEl = document.getElementById("current-colour");

// Array of all possible hexadecimal values
const hexValues = [
  "0", "1", "2", "3", "4", "5", "6", "7",
  "8", "9", "A", "B", "C", "D", "E", "F"
];

// Function to generate a random hexadecimal character
function hexValue() {
  // Generate a random index position within the range of hexValues array
  const randomIndexPosition = Math.floor(Math.random() * hexValues.length);
  // Get the hexadecimal value at the random index
  const randomHexValue = hexValues[randomIndexPosition];
  // Return the random hexadecimal value
  return randomHexValue;
}

// Function to generate a random hexadecimal string of a given length
function randomHexString(stringLength) {
  let hexString = ""; // Initialize an empty string to store the hex string
  // Loop for the length of the string required (6 for a hex color code)
  for (let i = 0; i < stringLength; i++) {
    // Append a random hexadecimal character to the string
    hexString += hexValue();
  }
  // Return the full hexadecimal string
  return hexString;
}

// Add an event listener to the button to handle click events
btn.addEventListener("click", () => {
  // Generate a random hex color string and prepend a '#' to form a valid CSS color
  const randomHex = "#" + randomHexString(6);
  console.log(randomHex); // Log the generated hex color to the console
  
  // Set the background color of the document body to the new random hex color
  document.body.style.setProperty('background-color', randomHex);
  // Update the text content of the curColorEl element to display the new hex color
  curColorEl.textContent = randomHex;
});
