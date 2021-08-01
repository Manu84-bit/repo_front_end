let num1
let num2 
var num1Text
var num2Text
let resultText


resultText = document.getElementById("result-txt")

function sum(){
    num1Text = parseFloat(document.getElementById("num1-txt").value)
    num2Text = parseFloat(document.getElementById("num2-txt").value)
    resultText.textContent = "Result: "    
    resultText.textContent += num1Text + num2Text
}

function substract(){
    num1Text = parseFloat(document.getElementById("num1-txt").value)
    num2Text = parseFloat(document.getElementById("num2-txt").value)
    resultText.textContent = "Result: "    
    resultText.textContent += num1Text - num2Text
}

function multiply(){
    num1Text = parseFloat(document.getElementById("num1-txt").value)
    num2Text = parseFloat(document.getElementById("num2-txt").value)
    resultText.textContent = "Result: "    
    resultText.textContent += num1Text * num2Text
}

function divide(){
    num1Text = parseFloat(document.getElementById("num1-txt").value)
    num2Text = parseFloat(document.getElementById("num2-txt").value)
    resultText.textContent = "Result: "    
    resultText.textContent += num1Text / num2Text
}