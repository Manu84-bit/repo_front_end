let sum
let hasBlackjack = false
let isAlive = true
let message = ""
let messageP = document.querySelector("#message-p") // same function as getElement by ID, but uses the css selector
let sumP = document.getElementById("sum-p")
let cardsP = document.getElementById("cards-p")
let NewCardButton = document.getElementById("newCard-btn")
let cards = []
let nextCard = 2


NewCardButton.style.display = "none"

function startGame() {
    for (let count = 0; count < 11; count++) {
        cards[count] = randomNat(1,11)
    }
    sumP.textContent = "Sum: "
    cardsP.textContent ="Cards: "

    // cards[0] = randomNat(1,11)
    // cards[1] = randomNat(1,11)
    sum = cards[0] + cards[1]

    cardsP.textContent += " " + cards[0] + " - " + cards[1]
    sumP.textContent += " " + sum
    
   calculateResult(sum)

}

function newCard() {
    let anotherCard = cards[nextCard]
    sum += anotherCard
    cardsP.textContent += " - " + anotherCard
    sumP.textContent = "Sum: " + sum
    calculateResult(sum)
    nextCard +=1
}

function calculateResult(sum) {
    if (sum < 21){
        message = "Do you want another card?"
        messageP.textContent = message
        NewCardButton.style.display = "inline"
    } else if (sum === 21) {  //in JS the strcit equal sign is marked with three ""="", just two equal signs, "==", ignores the data type.
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
    return Math.round(Math.random()*(max- min) + min)  // Math.random() gives a number between 0 inclusive and 1 exclusive.
}                                                     // Math.round gives the integer part of a float number.


function randomNat(min, max) {
    let x = randomInt (min,max)
    if (x < 0) {
       return x *-1
   } else 
       return x
    
}




