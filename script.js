let firstCard = 10
let secondCard = 4
let cards = [firstCard, secondCard]

let sumCard = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let messageEl = document.getElementById('message-el')
let sumEl = document.querySelector('#sum-el')
let cardsEl = document.querySelector('#cards-el')

function startGame(){
    renderGame()
}

function renderGame(){
    //render out firstCard and secondCard
    cardsEl.textContent = "Cards: " + cards[0] + " - " + cards[1]
    //render out All the cards we have
    sumEl.textContent = "Sum: " + sumCard

    
    if (sumCard === 21){
        messageEl.textContent = "Wow! You've' got a Blackjack!"
        hasBlackJack = true
    }else if (sumCard > 21){
        messageEl.textContent = "You're out of the game!"
        isAlive = false
    }else{
        messageEl.textContent = "Do you want to draw a new card?"
    }
}

function newCard(){
    console.log("Drawing a new card from the deck")
    let card = 7
    sumCard += card

    renderGame()
}

//Still in the game
console.log(isAlive)

//CASH OUT!
console.log(hasBlackJack)