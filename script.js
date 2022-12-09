let firstCard = 10
let secondCard = 11
let sumCard = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let messageEl = document.getElementById('message-el')
let btnStartGame = document.getElementById('startGame()')

function startGame(){
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

//Still in the game
console.log(isAlive)

//CASH OUT!
console.log(hasBlackJack)