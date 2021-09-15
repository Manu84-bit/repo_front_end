

// -----  some practice before doing a counter -----

//document.getElementById("count-el").innerText = 6

// let age,dogAgeRatio, dogAge

// age = 38
// dogAgeRatio = 7
// dogAge = age * dogAgeRatio

// console.log("My dog Age is " + dogAge)

// let bonusPoints = 50
// console.log(bonusPoints)
// bonusPoints = bonusPoints + bonusPoints
// console.log(bonusPoints)
// bonusPoints = bonusPoints/4
// console.log(bonusPoints)
// bonusPoints = bonusPoints*2 + 20
// console.log(bonusPoints)

// let lap1, lap2, lap3 

// lap1 = 30
// lap2 = 60 
// lap3 = 90

// function sumLaps(x,y,z){
//     let sum = x + y + z
//     console.log(sum)
// }

// sumLaps(lap1, lap2, lap3)

// document.getElementById("title").innerText = "My dog age is"
// document.getElementById("count-el").innerText = dogAge

// function call38() {
//     let age = 38
//     console.log("You have " + age + " fucking years.")
// }

// call38()

// let name = "Manu"
// let greeting = "Hi, "
// let myGreeting = greeting + name

// console.log(myGreeting)


// let firstname, lastname, fullname
// firstname = "Manu"
// lastname = "Amado"
// fullname = firstname + " " + lastname
// console.log(fullname)


// let myPoints = 3

// function addThree() {
//     myPoints += 3
// }

// function removeOne() {
//     myPoints -= 1
// }


// addThree()
// addThree()
// addThree()
// removeOne()
// removeOne()
// console.log(myPoints)


// let skills = ["easy-lerner", "curious", "creative", "open-minded", "growth-minded", "natural born problem solver"]

// console.log(skills.length)

// let myself = ["Manuel", 38, true]
// myself.push("Tequila")
// myself.pop()

// let messageEl = document.getElementById("message-el")
// let words = ["Manu", "is", "a", "brilliant", "and", "attractive", "fella"]

// for (let count = 0; count < words.length; count++) {
//     messageEl.textContent += words[count] + " "
// }

// let dice = Math.round(Math.random()*(6 - 1) + 1)

// console.log(dice)

//The following is the way to create an Object in JS:

let player = {
    name: "Manu",
    credits: 145
}

// There are two ways to call the object's attributes: the dot notation and
//the square brackets notation:

// console.log(player.name + " " + player.credits)
// console.log(player["name"] + " " + player["credits"])



// let castle_listing = {
//     message:"Live in my castle",
//     price: 190,
//     isAvailable: true,
//     images: ["img/castle.png", "img/bedroom.png"],
//     sayBye: function() {    //methods are defined as functions inside object attributes.
//         console.log("Auf wiedersehen")
//     }

// }

// console.log(castle_listing.message)
// console.log(castle_listing.price)
// castle_listing.sayBye()


// let person = {
//     name: "Manu",
//     age: 37,
//     contry: "Colombia",
//     logData: function() {
//         console.log(person.name + " is " + person.age + " years old and lives in " + person.contry)
//     }
// }

// person.logData()

// large_countries = ["China", "India", "USA", "Rusia", "Pakistan"]

// for (let i= 0; i < large_countries.length; i++) {  //for loops are defined as java's for loops.
//     console.log(large_countries[i])
// }



// large_countries = ["Tuvulu", "India", "Monaco", "Rusia", "Pakistan"]

// large_countries.shift()
// large_countries.push("China")
// large_countries.push("USA")
// large_countries.splice(1,1) 
// splice removes item by index, begins with firts number and removes the next second number items.
// console.log(large_countries)


//Random number

// let hands =["rock", "paper", "scissor"]

// function getHand() {
//     let randomNumber = Math.round(Math.random()*3)

//     for (let i = 0; i < hands.length; i++) {
//         if(randomNumber === i) {
//             console.log(hands[i])
//         }
//     }
// }

// getHand()

// ---------- End of Practice ---------------






// counter variable and function

let count = 0
let countEl = document.getElementById("count-el")
let messageEl = document.getElementById("message-el")


function increment () {
    count += 1
    countEl.innerText = count  //innerText takes into account styling and other hidden features of the text

}

function reset () {
    count = 0
    let message = "Previous entries: "
    countEl.textContent = count
    messageEl.textContent = message
}

function save (){
    messageEl.textContent += " " + count + " - "

}
 

// innerHTML attribute allows to create HTML elements inside others
const divEl = document.getElementById("div-el")
// divEl.innerHTML = "<button id='buy-btn' onclick='buy()'>" + "Buy!" +  "</button>"

// function buy () {
//     divEl.innerHTML += "<p> Thank you for buying! </p>"
// }



// An alernative form to create HTML elements is by using createElement method and append the new element to a parent
const btnEl = document.createElement("button")
btnEl.id = "buy-btn"
btnEl.textContent = "BUY!"
divEl.append(btnEl)

let sender = "Manu"
let recipient = "Pi"

// String templates allow for formatting text and include variables with the ${} syntax
// let message = `Hey, ${recipient},
// Have a nice day!
// Cheers, 
// ${sender}`

// console.log(message)

let value = [0]
if(value) {
    console.log("truthy")
} else {
    console.log("falsy")
}