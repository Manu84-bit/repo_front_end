let suits = ['S','H','C','D']
let ranks = [1,2,3,4,5,6,7,8,9,10,11,12,13]

let deck = []

for (let i = 0; i < suits.length; i++){
    for (let j = 0; j < ranks.length; j++) {
        let card = [suits[i], ranks[j]];
        deck.push(card);

    }
}


console.log(suits)
console.log(ranks)
console.log(deck)
console.log (deck[0][1] + " " + deck[1][1])



function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) { // loop que va del mayor índice del array hasta el primero (o sea, 0).
        let j = Math.floor(Math.random() * (i + 1)); // j es un índice al azar entre 0 y el mayor índice en la primera corrida, luego el indice anteiror al mayor y así sucesivamente.
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
   
    return array;
}


console.log(shuffleArray(deck))

let card1 = deck[0][1]
let card2 = deck[1][1]

if (card1 > 10) {
    card1 = 10
}

if (card2 > 10) {
    card2 = 10
}

console.log (card1 + " " + card2)