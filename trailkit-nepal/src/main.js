const currentDateElement = document.querySelector("#current-date")
const today = new Date()
if(currentDateElement){
    currentDateElement.textContent = today.toLocaleDateString("en-np",{
        weekday: "long",
        day: "numeric",
        month: "long"
    });
}


const tripDialog = document.querySelector("#trip-dialog")
const planButton = document.querySelector("#plan-first-trek-button")
const createTripButton = document.querySelector("#create-first-trip-button");
const closeTripButton = document.querySelector("#close-trip-form");

planButton.addEventListener("click", () =>{
    tripDialog.showModal()
})

createTripButton.addEventListener("click", () =>{
    tripDialog.showModal()
})

