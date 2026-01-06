const newCardBtn = document.getElementById("new-card");
const newGameBtn = document.getElementById("new-game");
const startGameBtn = document.getElementById("start-game-btn");

const cardsDisplay = document.getElementById("cards");
const msgText = document.getElementById("msg");
const sumDisplay = document.getElementById("sum");
const initMsg = document.getElementById("init-msg");

// let firstCard = 11;
// let secondCard = 10;
// let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = false


function randonNumGenerator() {
    let min = 2;
    let max = 11;
    const minNum = Math.ceil(min);
    const maxNum = Math.floor(max);
    return Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
};

function cardId(randNum) {
    // cardNumValue = randonNumGenerator()
    let msg;
    
    msg = randNum;

    return msg
}

const startGame = startGameBtn.addEventListener("click", (e) => {
    initMsg.textContent = "Pick a card"
    newCardBtn.classList.remove("hidden")
    newGameBtn.classList.add("hidden")

    isAlive = true
    startGameBtn.classList.add("hidden")
})


cardsList = []
cardsDisplay.textContent = "cards: "
sumDisplay.textContent = "Sum: "

count = 0
let sum = 0;
sumDisplay.textContent += sum

const clicknewCardBtn = newCardBtn.addEventListener("click", (e) => {
    if (!isAlive || hasBlackJack) return
        const cardValue = randonNumGenerator()
        // const cardValue = cardId(randNum)
        cardsList.push(cardValue)

        cardsDisplay.textContent += `${cardsList[count]} | `;

        sum += cardValue
        sumDisplay.textContent = `Sum: ${sum}`

        if (sum < 21) {
            msgText.textContent = "You're doing well keep going 🙂"
        } else if (sum > 21) {
            isAlive = false
            msgText.textContent = "Oh no! You have lost the game! 😭"
            newCardBtn.classList.add("hidden")
            newGameBtn.classList.remove("hidden")
        } else {
            hasBlackJack = true
            msgText.textContent = "HORRAY! YOU'VE GOT BLACKJACK🥳"
            newCardBtn.classList.add("hidden")
            newGameBtn.classList.remove("hidden")
        }
        count+= 1
})



const clickNewGameBtn = newGameBtn.addEventListener("click", (e) => {
    cardsDisplay.textContent = "cards: "
    sum = 0
    sumDisplay.textContent = `Sum: ${sum}`
    msgText.textContent = ""
    hasBlackJack = false;

    newCardBtn.classList.add("hidden")
    newGameBtn.classList.add("hidden")
    startGameBtn.classList.remove("hidden")
    initMsg.textContent = "Want to play a round?"
    console.clear()
})