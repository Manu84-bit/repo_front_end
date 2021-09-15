// chrome://extensions/
let myLeads = []

// JSON methos to parse an convert to string objects like arrays
// myLeads = `["manu84.com"]`
// myLeads = JSON.parse(myLeads)
// myLeads.push("manuAmado.com")

// myLeads = JSON.stringify(myLeads)
// console.log(myLeads)
// leadsFromLS = JSON.parse(localStorage.getItem("myLeads"))  localStorage is a property that stores data persistently across sessions


const inputField = document.getElementById("input-el") //const is used to avoid reasigned the value, it is a constant.
const saveBtn = document.getElementById("input-btn")
const leadsUl = document.getElementById("leadsUl")


saveBtn.addEventListener("click", function (){  // this way is not necessary to add onclick attribute in the HTML
    console.log("Button listened")  //addEventlistner is a method that has as parameters a event and a function.
    myLeads.push (inputField.value) //value is the variable that store the text introduced in the input filed.
    inputField.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
})



function renderLeads(){
    let listItems = ""
    for (let i=0; i < myLeads.length; i++) {
        //innerHTML allows to add html elements inside others
        // listItems+= "<li><a href='http://"+ myLeads[i]+"' target= '_blank'</a>" + myLeads[i] +"</li>"
        // with templete Strings or litterals `` (command: 'alt gr + }' ) it is possible to embbed the varibles in
        // ${} string an write html styled code.
        listItems+= `<li>
                       <a href='http://${myLeads[i]}' target='_blank'>${myLeads[i]}</a>
                    </li>`

    }
        leadsUl.innerHTML = listItems  //DOM manipultation has a cost, so it is better to asign inner items outside a loop
    
}
