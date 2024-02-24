
let cardsBase = [
    {
        color: "brown",
        number: 1,
        shape: "house",
        filling: "empty",
        img: "../house-bown-empty.svg",
    },
    {
        color: "brown",
        number: 1,
        shape: "house",
        filling: "full",
        img: "../house-brown-full.svg",
    },
    {
        color: "brown",
        number: 1,
        shape: "house",
        filling: "pattern",
        img: "../house-brown-pattern.svg",
    },
    {
        color: "red",
        number: 1,
        shape: "house",
        filling: "empty",
        img: "../house-red-empty.svg",
    },
    {
        color: "red",
        number: 1,
        shape: "house",
        filling: "full",
        img: "../house-red-full.svg",
    },
    {
        color: "red",
        number: 1,
        shape: "house",
        filling: "pattern",
        img: "../house-red-pattern.svg",
    },
    {
        color: "yellow",
        number: 1,
        shape: "house",
        filling: "empty",
        img: "../house-yellow-empty.svg",
    },
    {
        color: "yellow",
        number: 1,
        shape: "house",
        filling: "full",
        img: "../house-yellow-full.svg",
    },
    {
        color: "yellow",
        number: 1,
        shape: "house",
        filling: "pattern",
        img: "../house-yellow-pattern.svg",
    },
    {
        color: "brown",
        number: 1,
        shape: "tree",
        filling: "empty",
        img: "../tree-brown-empty.svg",
    },
    {
        color: "brown",
        number: 1,
        shape: "tree",
        filling: "full",
        img: "../tree-bown-full.svg",
    },
    {
        color: "brown",
        number: 1,
        shape: "tree",
        filling: "pattern",
        img: "../tree-brown-pattern.svg",
    },
    {
        color: "red",
        number: 1,
        shape: "tree",
        filling: "empty",
        img: "../tree-red-empty.svg",
    },
    {
        color: "red",
        number: 1,
        shape: "tree",
        filling: "full",
        img: "../tree-red-full.svg",
    },
    {
        color: "red",
        number: 1,
        shape: "tree",
        filling: "pattern",
        img: "../tree-red-pattern.svg",
    },
    {
        color: "yellow",
        number: 1,
        shape: "tree",
        filling: "empty",
        img: "../tree-yellow-empty.svg",
    },
    {
        color: "yellow",
        number: 1,
        shape: "tree",
        filling: "full",
        img: "../tree-yellow-full.svg",
    },
    {
        color: "yellow",
        number: 1,
        shape: "tree",
        filling: "pattern",
        img: "../tree-yellow-pattern.svg",
    },

    {
        color: "brown",
        number: 1,
        shape: "sun",
        filling: "empty",
        img: "../sun-brown-empty.svg",
    },
    {
        color: "brown",
        number: 1,
        shape: "sun",
        filling: "full",
        img: "../sun-brown-ful.svg",
    },
    {
        color: "brown",
        number: 1,
        shape: "sun",
        filling: "pattern",
        img: "../sun-brown-pattern.svg",
    },
    {
        color: "red",
        number: 1,
        shape: "sun",
        filling: "empty",
        img: "../sun-red-empty.svg",
    },
    {
        color: "red",
        number: 1,
        shape: "sun",
        filling: "full",
        img: "../sun-red-full.svg",
    },
    {
        color: "red",
        number: 1,
        shape: "sun",
        filling: "pattern",
        img: "../sun-red-pattern.svg",
    },
    {
        color: "yellow",
        number: 1,
        shape: "sun",
        filling: "empty",
        img: "../sun-yellow-empty.svg",
    },
    {
        color: "yellow",
        number: 1,
        shape: "sun",
        filling: "full",
        img: "../sun-yellow-full.svg",
    },
    {
        color: "yellow",
        number: 1,
        shape: "sun",
        filling: "pattern",
        img: "../sun-yellow-pattern.svg",
    }

]


class Card {

    constructor(color, number, shape, filling, img) {
        this.color = color;
        this.number = number;
        this.shape = shape;
        this.filling = filling;
        this.img = img;
    }
}

function generateCardsArray(cardsBase) {

    let totalArr = [];

    for (var cardProp of cardsBase) {
        const { color, number, shape, filling, img } = cardProp;
        const singleCard = new Card(color, number, shape, filling, img);
        totalArr.push(singleCard);

        const doubleCard = new Card(color, number * 2, shape, filling, img);
        totalArr.push(doubleCard);

        const tripleCard = new Card(color, number * 3, shape, filling, img);
        totalArr.push(tripleCard);
    }

    return totalArr;
}

function createCard(card) {

    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.dataset.color = card.color;
        cardElement.dataset.number = card.number;
        cardElement.dataset.shape = card.shape;
        cardElement.dataset.filling = card.filling;

    for (let i = 0; i < card.number; i++) {

        const imgElement = document.createElement("img");
        imgElement.src = `${card.img}`;
        imgElement.style.width = "auto";
        imgElement.style.height = "100%";

        cardElement.appendChild(imgElement);
    }
    return cardElement;
}

