// chrome://extensions/


let myLeads = []

// JSON methods to parse an convert to string objects like arrays
// myLeads = `["manu84.com"]`
// myLeads = JSON.parse(myLeads)
// myLeads.push("manuAmado.com")

// myLeads = JSON.stringify(myLeads)
// console.log(myLeads)

const inputField = document.getElementById("input-el") //const is used to avoid reasigned the value, it is a constant.
const saveBtn = document.getElementById("input-btn")
const tabBtn = document.getElementById("tab-btn")
const deleteBtn = document.getElementById("delete-btn")
const leadsUl = document.getElementById("leadsUl")
const leadsFromLocalStore = JSON.parse(localStorage.getItem("myLeads"))  //localStorage is a property that stores data persistently across sessions


if(leadsFromLocalStore){
    myLeads = leadsFromLocalStore
    renderLeads(myLeads)
}


saveBtn.addEventListener("click", saveLeads) // this way is not necessary to add onclick attribute in the HTML button
tabBtn.addEventListener("click", saveTab)
deleteBtn.addEventListener("dblclick", deleteLeads)


function renderLeads(jsonArr){
    let listItems = ""
    for (let i=0; i < jsonArr.length; i++) {
        //innerHTML allows to add html elements inside others
        // listItems+= "<li><a href='http://"+ myLeads[i]+"' target= '_blank'</a>" + myLeads[i] +"</li>"
        // with templete Strings or litterals `` (command: 'alt gr + }' ) it is possible to embbed the varibles in
        // ${} string an write html styled code.
        listItems+= `<li>
                       <a href='http://${jsonArr[i]}' target='_blank'>${jsonArr[i]}</a>
                    </li>`
    }
        leadsUl.innerHTML = listItems  //DOM manipultation has a cost, so it is better to asign inner items outside a loop    
}

function saveLeads() {
    myLeads.push (inputField.value) //value is the variable that store the text introduced in the input filed.
    inputField.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads(myLeads)
}

function saveTab() {
    chrome.tabs.query({active:true, currentWindow:true}, function(tabs){ // query to get the current tab url
    myLeads.push(tabs[0].url) 
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads(myLeads)
   })

}


function deleteLeads() {
    localStorage.clear()
    myLeads =[]
    renderLeads(myLeads)
}