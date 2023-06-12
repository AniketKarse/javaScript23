
let cards = []
let hasBlackJack = false
let isAlive = false
let sum = 0
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function getRandomCard() {
    let randomNumber = Math.floor(Math.random()*13) + 1
    if (randomNumber === 1) {
        return 11
    }else if(randomNumber > 10) {
        return 10
    }else {
        return randomNumber
    }
}

function startGame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    isAlive = true
    hasBlackJack = false
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
        
    }
    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = "Do you want to draw a new card? " 
    }else if(sum === 21) {
        message = "You've got Blackjack! "
        hasBlackJack = true
    }else {
        message = "You're out of the game! "
        isAlive = false
    }
    
    messageEl.textContent = message
}
isAlive = false
function newCard() {
    if(isAlive && !hasBlackJack){
        console.log("Drawing New card from the deck")
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}

let player = {
    name: "Knowy",
    chips: 333
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + " : ₹ " + player.chips 


