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

const tripForm = document.querySelector("#trip-form")
const tripsSection= document.querySelector("#trips")
const emptyTripState = tripsSection.querySelector(".empty-state")

const tripsCount = document.querySelector(
    ".statistics-card .statistics-card__value"
)

let trips = JSON.parse(localStorage.getItem("dablam-trips")) || []

function displayTrips(){
    document.querySelectorAll(".trip-entry").forEach(entry => {
        entry.remove()
    })


    emptyTripState.style.display = trips.length === 0 ? "block": "none"

    trips.forEach(trip => {
        const tripEntry = document.createElement("div")
        tripEntry.classList.add("trip-entry")

        const tripName = document.createElement("h4")
        tripName.textContent = trip.name

        const destination = document.createElement("p")
        destination.textContent = trip.destination

        const dates = document.createElement("small")
        dates.textContent = `${trip.startDate} -> ${trip.endDate}`

        tripEntry.append(tripName, destination,dates)

        tripsSection.appendChild(tripEntry)
    })

    tripsCount.textContent = String(trips.length).padStart(2,"0")
}

tripForm.addEventListener("submit", event =>{
    event.preventDefault()
    const name = document.querySelector("#trip-name").value.trim()
    const destination = document.querySelector("#trip-destination").value.trim()
    const startDate = document.querySelector("#trip-start").value
    const endDate = document.querySelector("#trip-end").value


    if(endDate<startDate){
        alert("Your return date cannot be before your starting date!")
        return;
    }

    const newTrip = {
        name,
        destination,
        startDate,
        endDate
    }

    trips.push(newTrip)
    localStorage.setItem("dablam-trips", JSON.stringify(trips))
    displayTrips()
    tripForm.reset()
    tripDialog.close()
})

closeTripButton.addEventListener("click", () =>{
    tripDialog.close()
})

displayTrips()