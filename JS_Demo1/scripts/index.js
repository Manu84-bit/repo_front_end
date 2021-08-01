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


let skills = ["easy-lerner", "curious", "creative", "open-minded", "growth-minded", "natural born problem solver"]




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