// declare conversion factors and html elements for input and outputs
let metersToFeetFactor = 3.28084
let litresToGallonsFactor = 0.219969
let kilosToPoundsFactor = 2.20462
let metersFeetOutput = document.getElementById("meters-feet")
let litresGallonsOutput = document.getElementById("litres-gallons")
let kilosPoundsOutput = document.getElementById("kilos-pounds")
let input = parseFloat(document.getElementById("input-text").value)

// initial calculations for example input
updateOutputs()

// listen for change to input
document.getElementById("input-text").addEventListener("input", updateOutputs)

// update all unit pair outputs for new input
function updateOutputs() {
    // update to new input
    input = parseFloat(document.getElementById("input-text").value)
    
    // meters & feet conversions
    calculations("meters", "feet", metersToFeetFactor, metersFeetOutput)

    // litres & gallons conversions
    calculations("litres", "gallons", litresToGallonsFactor, litresGallonsOutput)
    
    // kilos & pounds conversions
    calculations("kilograms", "pounds", kilosToPoundsFactor, kilosPoundsOutput)
}

// perform calculations for specific unit pair and update html text
function calculations(firstUnit, secondUnit, factor, output) {
    // left side conversion
    let firstConversion = input*factor
    // round to 3dp
    let firstConversionRounded = Math.round(firstConversion * 1000) / 1000
    
    // right side conversion
    let secondConversion = input/factor
    // round to 3dp
    let secondConversionRounded = Math.round(secondConversion * 1000) / 1000
    
    // update text output
    output.textContent = input + " " + firstUnit + " = " + firstConversionRounded + " " + secondUnit + " | " + input + " " + secondUnit + " = " + secondConversionRounded + " " + firstUnit
}

