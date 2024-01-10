// Get the "No" button element
const noButton = document.getElementById("no-button");

// Add a mouseover event listener to move the "No" button randomly
noButton.addEventListener("mouseover", () => {
  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * window.innerHeight);

  // Restrict the "No" button's movement within the bounds of the screen
  const buttonWidth = noButton.offsetWidth;
  const buttonHeight = noButton.offsetHeight;
  const maxX = window.innerWidth - buttonWidth;
  const maxY = window.innerHeight - buttonHeight;
  const adjustedX = x < maxX ? x : maxX;
  const adjustedY = y < maxY ? y : maxY;

  // Apply the new position to the button
  noButton.style.position = "absolute";
  noButton.style.left = `${adjustedX}px`;
  noButton.style.top = `${adjustedY}px`;
});

// Get the "Yes" button element
const yesButton = document.getElementById("yes-button");

// Add a click event listener to create confetti
yesButton.addEventListener("click", () => {
  
var confettiElement = document.getElementById('confetti-canvas');
var confettiSettings = { target: confettiElement, max: 729, size: 1, animate: true, props: ['circle', 'square', 'triangle', 'line'], colors: [[165,104,246],[230,61,135],[0,199,228],[253,214,126]], clock: 25, rotate: true,start_from_edge: true, respawn: true };

yesButton.style.display = "none";
noButton.style.display = "none";

var gif = document.getElementById("gif");
var header = document.getElementById("main");
header.style.display = "none";
gif.style.display = "none";

//change the style of the confetti canvas
confettiElement.style.position = "absolute";
confettiElement.style.top = "0";
confettiElement.style.left = "0";
confettiElement.style.width = "100%";
confettiElement.style.height = "100%";
confettiElement.style.zIndex = "1000";


var confetti = new ConfettiGenerator(confettiSettings);

confetti.render();

 // Create a container to hold both the text and the image
let container = document.createElement("div");
container.style.position = "relative"; // Set container's position to relative
container.style.textAlign = "center"; // Center align the content
document.body.appendChild(container); // Append container to the body

// Create the paragraph element (text)
let p = document.createElement("p");
p.innerText = "Stii,  asta este o metafora asupra relatiei noastre.   \nCum din niste bucati fara noima noi vom construi o floare frumoasa, asa vom construi si din neajunsurile si supararile noastre o relatie perfecta";
p.style.fontSize = "2rem";
p.style.fontWeight = "bold";
container.appendChild(p); // Append text to the container

// Create the image element (gif)
let img = document.createElement("img");
img.src = "looney.gif"; // Set the image source
img.style.width = "auto"; // Adjust width as needed
img.style.height = "auto"; // Maintain aspect ratio
img.style.position = "relative"; // Set image's position to relative
img.style.display = "block"; // Make the image a block element
img.style.margin = "0 auto"; // Center the image horizontally
img.style.paddingBottom = "200px";
container.appendChild(img); // Append image to the container
});
