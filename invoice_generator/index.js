// 3 different service buttons
let button1 = document.getElementById("item-left")
let button2 = document.getElementById("item-center")
let button3 = document.getElementById("item-right")

// send invoice (reset) button
let resetButton = document.getElementById("send")

// total cost and tracker of total value
let totalCostValue = 0
let totalCost = document.getElementById("total-amount")

// holder for line items
let lineItems = document.getElementById("items-holder")

// services (output for innerHTML of line items, ID for remove buttons)
let services = [
    {
        item: "MOT",
        cost: 50,
        selected: false,
        output: "",
        ID: "0"
    },
    
    {
        item: "Full Service",
        cost: 200,
        selected: false,
        output: "",
        ID: "1"
    },
    
    {
        item: "Wash",
        cost: 20,
        selected: false,
        output: "",
        ID: "2"
    }
]

// 3 service button listeners
button1.addEventListener("click", function() {
    addService(services[0],"0")
})

button2.addEventListener("click", function() {
    addService(services[1],"1")
})

button3.addEventListener("click", function() {
    addService(services[2],"2")
})

// reset button listener
resetButton.addEventListener("click", function() {
    reset()
})

// function to add a service cost
// parameter service to select from services array
// parameter removeID to provide innerHTML with what to remove    
function addService(service, removeID) {
    // check to see if service not already added
    if (service.selected === false) {
        // change service tracker to added
        service.selected = true
        // update and display total cost
        totalCostValue += service.cost
        totalCost.textContent = `£${totalCostValue}`
        // add line item - with corresponding remove button
        service.output = `
            <p id="items">
                ${service.item}
                    <button id="remove" onclick="removeService(services[${removeID}])">Remove</button>
                <span style="float:right;">
                    <span style="color: #918E9B;">
                        £
                    </span>
                    ${service.cost}
                </span>
            </p>
        `
        lineItems.innerHTML = services[0].output + services[1].output + services[2].output
    }
    
}

// reset page
function reset() {
    totalCostValue = 0
    totalCost.textContent = `£0`
    for (let i=0; i<services.length; i++) {
        services[i].selected = false
        services[i].output = ""
    }
    lineItems.innerHTML = ""
}

// function to remove service
function removeService(service) {
    service.selected = false
    service.output = ""
    lineItems.innerHTML = services[0].output + services[1].output + services[2].output
    totalCostValue -= service.cost
    totalCost.textContent = `£${totalCostValue}`
}