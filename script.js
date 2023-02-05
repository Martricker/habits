// Assigning elements to constants
const form = document.querySelector("#form-habits")
const habits = new NLWSetup(form)
const button = document.querySelector("header button")

// Using events and relating to a function
button.addEventListener("click", add)
form.addEventListener("change", save)

// Add new day
function add (){
    const today = new Date().toLocaleDateString("pt-br").slice(0,-5)
    const dayExists = habits.dayExists(today)

    // If the day exists
    if (dayExists){
        alert("❌ Day already registered!")
        return
    }
    // If the day doesn't exists, create it
    habits.addDay(today)
        alert("✔ Successfully added")
}

// Save datas to local storage
function save (){
    localStorage.setItem("daysChkd", JSON.stringify(habits.data))
}

// Return data saved in localstorage in object format
// Adjusted for the first time to return an empty object {} and not giving an error in the console
const saved = JSON.parse(localStorage.getItem("daysChkd")) || {}
habits.setData(saved)
habits.load()