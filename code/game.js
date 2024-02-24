
let schuffledArr = generateCardsArray(cardsBase);

function schuffleCards() {

    for (let i = schuffledArr.length - 1; i > 0; i--) { //loop starting in reverse order
        const j = Math.floor(Math.random() * (i + 1)); //j is between 0 and i(i--), random generates between 0&1, floor rounds down
        [schuffledArr[i], schuffledArr[j]] = [schuffledArr[j], schuffledArr[i]]; //swapping 
    }
    return schuffledArr;
}

function generateTwelveCards() {

    let totalArr = schuffleCards();
    let twelveArr = []; 

    for (let i=0; i<12; i++) {

        if (!twelveArr[i]) {
            twelveArr.push(totalArr[i]); 
        }
    }

    twelveArr.forEach(item => {
        let index = schuffledArr.indexOf(item);
        if (index !== -1) {
            schuffledArr.splice(index, 1);
        }
    });
    return twelveArr;
}




function addCardsToContainer() {

    let cardsArr = generateTwelveCards();
    const container = document.getElementById("cards-board");
    container.innerHTML = "";

    cardsArr.forEach(card => {
        const cardElement = createCard(card);
        container.appendChild(cardElement);
        cardElement.addEventListener('click', function () {
        handleCardClick(cardElement);
        });
    });
}

function createThreeCards() {

    let totalArr = schuffleCards();
    let threeArr = []; 

    for (let i=0; i<3; i++) {
        if (!threeArr[i]) {
            threeArr.push(totalArr[i]); 
        }
    }
    
    threeArr.forEach(item => {
        let index = schuffledArr.indexOf(item);
        if (index !== -1) {
            schuffledArr.splice(index, 1);
        }
    });

    return threeArr;
}


function addThreeCardsToContainer() {

    let threeCardsArr = createThreeCards();
    const container = document.getElementById("cards-board");

    threeCardsArr.forEach(card => {
        const cardElement = createCard(card);
        container.appendChild(cardElement);
        cardElement.addEventListener('click', function () {
        handleCardClick(cardElement);
        });
    });
}


function isSet(cards) {
   
    let colorsArr = [];
    let numbersArr = [];
    let shapesArr = [];
    let fillingArr = [];

   
    cards.forEach((card) => {
        colorsArr.push(card.dataset.color);
        numbersArr.push(card.dataset.number);
        shapesArr.push(card.dataset.shape);
        fillingArr.push(card.dataset.filling);
    });

   
    return isValidSet(colorsArr, numbersArr, shapesArr, fillingArr);

}


function checkSetProperty(arr) {
  
    return new Set(arr).size === 1 || new Set(arr).size === arr.length;
}


function isValidSet(arr1, arr2, arr3, arr4) {
   
    return checkSetProperty(arr1) && 
           checkSetProperty(arr2) && 
           checkSetProperty(arr3) && 
           checkSetProperty(arr4);
}



let selectedCards = [];
let count = 0;

function handleCardClick(card) {

    const index = selectedCards.indexOf(card);
    if (index !== -1) {
        selectedCards.splice(index, 1);
        card.style.border = "";
        card.style.backgroundColor = "";
    } else {
        card.style.backgroundColor = "rgb(86, 151, 98)";
        selectedCards.push(card);
    }

    
    if (selectedCards.length === 3) {

        if (isSet(selectedCards)) {
            console.log("is SET");
            count++;
        } else {
            alert("Not a set");
        }
       
        selectedCards.forEach(card => {
            card.parentNode.removeChild(card); 
        });
        selectedCards = [];
        addThreeCardsToContainer();
    }

    let counter = document.getElementById("sets-found");
    counter.innerText = `Sets: ${count}`;

}


function startTiming() {
    let timerSeconds = 60; // Set the initial timer value in seconds
    let timerDisplay = document.getElementById('timer'); 
    let timerInterval = setInterval(function () {
        if (timerSeconds >= 0) {
            timerDisplay.textContent = `Seconds left: ${timerSeconds}`; 
            timerSeconds--; 
        } else {
            clearInterval(timerInterval); 
            alert(`Sets Found: ${count}`); 
        }
    }, 1000);
}









