let baseline = document.getElementById("baseline");
let savings = document.getElementById("savings");
let investment = document.getElementById("investment");
let selfSatiation = document.getElementById("self-satiation");
let message = document.getElementById("message");
let amount = document.getElementById("amount");
const myBtn = document.getElementById("myBtn");

myBtn.addEventListener("click", event => {
    
    let amt = amount.value;
    let bLine = amt/2;
    let save = amt * 0.25;
    let invest = amt * 0.15;
    let selfS = amt * 0.1;

    if(amt < 10){
        message.textContent = `Enter $10 or higher`;
        message.style.background = "tomato";
    }

    else {
        message.style.background = "hsla(48, 100%, 51%, 0.76)";
        message.textContent = `Entered amount: $${amt}`;
    
        baseline.textContent = `Baseline: $${bLine.toFixed(2)}`;
        savings.textContent =  `Saving: $${save.toFixed(2)}`;
        investment.textContent = `Investment: $${invest.toFixed(2)}`;
        selfSatiation.textContent = `Self-Satiation: $${selfS.toFixed(2)}`;
    }

    });