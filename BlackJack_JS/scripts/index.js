let sum
let hasBlackjack = false
let isAlive = true
let message = ""
let messageP = document.querySelector("#message-p") // same function as getElement by ID, but uses the css selector
let sumP = document.getElementById("sum-p")
let cardsP = document.getElementById("cards-p")
let NewCardButton = document.getElementById("newCard-btn")
let playerEl = document.getElementById("player-el")
let cards = []; //to asign points to the game
let nextIndex;




// Creation of the deck that represents the cards with suits and ranks

let suits = ['S','H','C','D']
let ranks = [1,2,3,4,5,6,7,8,9,10,11,12,13]

let deck = []

for (let i = 0; i < suits.length; i++){
    for (let j = 0; j < ranks.length; j++) {
        let card = [suits[i], ranks[j]];
        deck.push(card);

    }
}




NewCardButton.style.display = "none"

function startGame() {
    nextIndex = 2
    //this function has to shuffle the array with the total card deck. The card deck is a 
    //bidimensional array of the form  deck = [[suit,rank], ...] , where the [suit, rank] element is used to call an
    //image that represents a particular card and that has to be recovered from the img folder.  
    //"rank" is the value assigned to the particular card recovered that has to be added to the sum variable once the 11,12 and 13 values are 
    //converted to 10.

    shuffleArray(deck)
  
    sumP.textContent = "Sum: "
    cardsP.textContent ="Cards: "
    cardsP.textContent += " " + deck[0] + " - " + deck[1]

    // change values if ranks are J, Q or K to be equals to 10
    let card1 = deck[0][1]
    let card2 = deck[1][1]
    if (card1 > 10) {
        card1 = 10
    }

    if (card2 > 10) {
        card2 = 10
    }

   
    //advice if ace are present

    // if (card1 === 1) {
    //     card1 = parseInt(prompt("Insert a possible value for your ace (1 or 11): "), 10)
    // }

    // if (card2 === 1) {
    //     card2 = parseInt(prompt("Insert a possible value for your ace (1 or 11): "),10)
    // }

    sum = card1 + card2


    sumP.textContent += " " + sum
    calculateResult(sum)


    //FIRTS VERSION WITHOUT THE DECK ARRAY

    // for (let count = 0; count < 11; count++) {
    //     cards[count] = randomInt(1,11)
    // }
    // sumP.textContent = "Sum: "
    // cardsP.textContent ="Cards: "
    // sum = cards[0] + cards[1]

    // cardsP.textContent += " " + cards[0] + " - " + cards[1]
    // sumP.textContent += " " + sum
    
    // //playerEl.textContent = player.name + " you have " + player.credits + " credits"

    // calculateResult(sum)

}


function newCard() {

    let newCard = deck[nextIndex][1]
    if (newCard > 10) {
        newCard = 10
    }

    sum += newCard;
    cardsP.textContent += " - " + deck[nextIndex];
    sumP.textContent = "Sum: " + sum;
    nextIndex ++
    calculateResult(sum)

    //First version without deck array
    // let anotherCard = cards[nextCard]
    // sum += anotherCard
    // cardsP.textContent += " - " + anotherCard
    // sumP.textContent = "Sum: " + sum
    // nextCard +=1
    // calculateResult(sum)
}




function calculateResult(sum) {
    if (sum < 21){
        message = "Do you want another card?"
        messageP.textContent = message
        NewCardButton.style.display = "inline"
    } else if (sum === 21) {  //in JS the strcit equal sign is marked with three equal signs "===", two equal signs "==" ignore the data type.
        hasBlackjack = true
        message = "Wohoo! You got a Blackjack!"
        messageP.textContent = message
        NewCardButton.style.display = "none"
    } else {
        message = "Sorry, you lose."
        messageP.textContent = message
        isAlive = false
        NewCardButton.style.display = "none"
    }

}

function randomInt(min, max) { // In JS it is not neccesary to specify the data type of the return value.
    return Math.round(Math.random()*(max - min) + min)  // Math.random() gives a number between 0 inclusive and 1 exclusive.
}                                                     // Math.round gives the integer part of a float number.


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) { // loop que va del mayor índice del array hasta el primero (o sea, 0).
        let j = Math.floor(Math.random() * (i + 1)); // j es un índice al azar entre 0 y el mayor índice en la primera corrida, luego el indice anteiror al mayor y así sucesivamente.
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
   
    return array;
}

