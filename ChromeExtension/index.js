

let myLead = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el") 

const deleteBtn = document.getElementById("delete-el")
 
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLead"))

const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage) {
    myLead = leadsFromLocalStorage
    render(myLead)
}

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {

        // listItems += "<li><a target='_blank' href='" + myLead[i]+"'>" + myLead[i] + "</a></li>"

        listItems += `
            <li>
                <a target = '_blank' href = '${leads[i]}'>
                    ${leads[i]}
                    </a>
            </li>
        `

    }

    ulEl.innerHTML =  listItems 
}

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLead = []
    render(myLead)

  })

inputBtn.addEventListener("click", function() {
    myLead.push(inputEl.value)
    // console.log(myLead)
    inputEl.value = ""
    localStorage.setItem("myLead",JSON.stringify(myLead))

    render(myLead) 

    console.log(localStorage.getItem("myLead"))
})

tabBtn.addEventListener("click", function() {
    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLead.push(tabs[0].url)
        localStorage.setItem("myLead",JSON.stringify(myLead))
        render(myLead)
    })
    
})



//practice
