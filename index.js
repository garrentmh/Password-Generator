const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1EL = document.getElementById("password1-el")
let password2EL = document.getElementById("password2-el")
let firstTime = false
let pw1 = ""
let pw2 = ""

function firstTimePasswordGenerator() {
    firstTime = true
    pw1 = ""
    pw2 = ""
    passwordGenerator()    
}

function passwordGenerator() {
 
   
    for (let i = 0; i < 15; i ++) {
        let index = Math.floor(Math.random()*characters.length)
        pw1 += characters[index]
    }
    
    password1EL.textContent = pw1
    
     for (let i = 0; i < 15; i ++) {
        let index = Math.floor(Math.random()*characters.length)
        pw2 += characters[index]
    }    
    
    password2EL.textContent = pw2
}


