let firstCard = getRandomCard()
let secondCard = getRandomCard()
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
    //render out firstCard and secondCard (this can be smaller by putting the code in line 18 inside the loop)
    cardsEl.textContent = "Cards: "
    for( i = 0; i < cards.length; i ++){
        cardsEl.textContent += cards[i] + " "
    }

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

function getRandomCard(){
    //Add later: If random number = 1 -> 11 (Ace)
    //           If random number = 11, 12, 13 -> 10 (J,Q,K)
    return Math.floor(Math.random()*11 ) + 1
}

function newCard(){
    console.log("Drawing a new card from the deck")
    let card = getRandomCard()
    sumCard += card
    cards.push(card)
    renderGame()
}

//Still in the game
console.log(isAlive)

//CASH OUT!
console.log(hasBlackJack)