// desired password length
let length = 15
// characters used in generation
let characters = ["a","b","c", "A", "B", "C", 1, 2, 3, ".", "!", "*"]
// password output
let password = ""
// random number
rand = 0

// 4 output password buttons
let password1 = document.getElementById("first-pass")
let password2 = document.getElementById("second-pass")
let password3 = document.getElementById("third-pass")
let password4 = document.getElementById("fourth-pass")

// generating 4 passwords
function generatePasswords() {
    generate(password1)
    generate(password2)
    generate(password3)
    generate(password4)
}

// function to generate
function generate(passwordNumber) {
    // generating each character of password
    for (let i=0; i<length; i++) {
        rand = Math.floor(Math.random()*characters.length)
        password += characters[rand]
        passwordNumber.textContent = password
    }
    password = ""
}

