let firstCard = Math.floor(Math.random() * 13) + 1;
let secondCard = Math.floor(Math.random() * 13) + 1;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let new_cards = [];

let msg = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("cards-el");

function startGame(){
    if (sum<21){
        msg = "Press 'New Card' to draw a new card! 🃏"
        
    } else if (sum === 21){
        msg = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true;
    } else {
        msg = "You're out of the game! 😭"
        isAlive = false;
    }

    messageEl.textContent = msg;
    sumEl.textContent = "Sum: " + sum;
    cardEl.textContent = "Cards: " + firstCard + ", " + secondCard + ",  " + new_cards;
}

function newCard(){
    if (isAlive === true && hasBlackJack === false){
        let card = Math.floor(Math.random() * 13) + 1;
        new_cards.push(card);
        sum += card;
        if (sum<21){
            msg = "Press 'New Card' to draw a new card! 🃏"

        } else if (sum === 21){
            msg = "Wohoo! You've got Blackjack! 🥳"
            hasBlackJack = true;
        } else {
            msg = "You're out of the game! 😭"
            isAlive = false;
        }

        messageEl.textContent = msg;
       
        sumEl.textContent = "Sum: " + sum;
       
        cardEl.textContent = "Cards: " + firstCard + ", " + secondCard + ", " + new_cards;
    }    
}
