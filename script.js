// Card object with 'value' and 'suit' properties
function Card(value, suit) {
  this.value = value;
  this.suit = suit;
}

// Create an array to represent all unique cards in a deck
const deck = [];
const suits = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

for (const suit of suits) {
  for (const value of values) {
    deck.push(new Card(value, suit));
  }
}

let hand = [];

function getRandomCardIndex() {
  return Math.floor(Math.random() * deck.length);
}

function dealHand() {
  // Clear the currently-displayed hand
  document.getElementById('hand').innerHTML = '';

  // Draw 5 unique cards
  hand = [];
  while (hand.length < 5) {
    const index = getRandomCardIndex();
    const card = deck[index];
    if (!hand.includes(card)) {
      hand.push(card);
    }
  }

  // Display the selected cards on the page
  const handContainer = document.getElementById('hand');
  hand.forEach((card) => {
    const cardName = card.value === '10' ? '10' : card.value[0]; // Handling 10 differently
    const cardElement = document.createElement('p');
    cardElement.textContent = `${cardName} of ${card.suit}`;
    handContainer.appendChild(cardElement);
  });
}