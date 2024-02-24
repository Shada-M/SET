const threeCardsButton = document.getElementById('three-cards');

threeCardsButton.addEventListener('click', function () {

    let cards = addThreeCardsToContainer();
    cards.classList.add(".card");
});


const newGameButton = document.getElementById('new-game');
const threeCardsDiv = document.getElementById('three-cards');
const setsDiv = document.getElementById('sets-found');
const timerDiv = document.getElementById('timer');

newGameButton.addEventListener('click', function () {

    addCardsToContainer();
    startTiming();
    threeCardsDiv.style.display = "none";
    timerDiv.style.display = "block";
    setsDiv.style.display = "block"; 
    schuffledArr = generateCardsArray(cardsBase);
  
});
