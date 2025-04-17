function shuffle (deck) {
  for (let i = deck.length - 1; i > 0; i--) { 
    let j = Math.floor(Math.random() * (i + 1)); 
       [deck[i], deck[j]] = [deck[j], deck[i]]; 
    } 
}
