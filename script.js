// Function to animate the box
function animateBox(elementId, distance, color) {
  const box = document.getElementById(elementId);
  // Local scope variable
  let moved = 0;

  // Update box style dynamically
  moved += distance; 
  box.style.transform = `translateX(${moved}px)`;
  box.style.backgroundColor = color;

  // Return new position
  return moved;
}

// Global counter to track box movement
let boxPosition = 0;

document.getElementById("animateBoxBtn").addEventListener("click", () => {
  boxPosition = animateBox("box", 50, "#2ecc71");
});

//  Card Flip Function
function flipCard(cardId) {
  const card = document.getElementById(cardId).querySelector(".card");
  card.classList.toggle("flipped");
  return card.classList.contains("flipped");
}

document.getElementById("flipBtn").addEventListener("click", () => {
  const isFlipped = flipCard("cardContainer");
  console.log("Card flipped:", isFlipped);
});
