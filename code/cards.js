
let cardsBase = [
    {
        color: "brown",
        number: 1,
        shape: "house",
        filling: "empty",
        img: "./images/house-bown-empty.svg",
    },
    {
        color: "brown",
        number: 1,
        shape: "house",
        filling: "full",
        img: "./images/house-brown-full.svg",
    },
    {
        color: "brown",
        number: 1,
        shape: "house",
        filling: "pattern",
        img: "./images/house-brown-pattern.svg",
    },
    {
        color: "red",
        number: 1,
        shape: "house",
        filling: "empty",
        img: "./images/house-red-empty.svg",
    },
    {
        color: "red",
        number: 1,
        shape: "house",
        filling: "full",
        img: "./images/house-red-full.svg",
    },
    {
        color: "red",
        number: 1,
        shape: "house",
        filling: "pattern",
        img: "./images/house-red-pattern.svg",
    },
    {
        color: "yellow",
        number: 1,
        shape: "house",
        filling: "empty",
        img: "./images/house-yellow-empty.svg",
    },
    {
        color: "yellow",
        number: 1,
        shape: "house",
        filling: "full",
        img: "./images/house-yellow-full.svg",
    },
    {
        color: "yellow",
        number: 1,
        shape: "house",
        filling: "pattern",
        img: "./images/house-yellow-pattern.svg",
    },
    {
        color: "brown",
        number: 1,
        shape: "tree",
        filling: "empty",
        img: "./images/tree-brown-empty.svg",
    },
    {
        color: "brown",
        number: 1,
        shape: "tree",
        filling: "full",
        img: "./images/tree-bown-full.svg",
    },
    {
        color: "brown",
        number: 1,
        shape: "tree",
        filling: "pattern",
        img: "./images/tree-brown-pattern.svg",
    },
    {
        color: "red",
        number: 1,
        shape: "tree",
        filling: "empty",
        img: "./images/tree-red-empty.svg",
    },
    {
        color: "red",
        number: 1,
        shape: "tree",
        filling: "full",
        img: "./images/tree-red-full.svg",
    },
    {
        color: "red",
        number: 1,
        shape: "tree",
        filling: "pattern",
        img: "./images/tree-red-pattern.svg",
    },
    {
        color: "yellow",
        number: 1,
        shape: "tree",
        filling: "empty",
        img: "./images/tree-yellow-empty.svg",
    },
    {
        color: "yellow",
        number: 1,
        shape: "tree",
        filling: "full",
        img: "./images/tree-yellow-full.svg",
    },
    {
        color: "yellow",
        number: 1,
        shape: "tree",
        filling: "pattern",
        img: "./images/tree-yellow-pattern.svg",
    },

    {
        color: "brown",
        number: 1,
        shape: "sun",
        filling: "empty",
        img: "./images/sun-brown-empty.svg",
    },
    {
        color: "brown",
        number: 1,
        shape: "sun",
        filling: "full",
        img: "./images/sun-brown-ful.svg",
    },
    {
        color: "brown",
        number: 1,
        shape: "sun",
        filling: "pattern",
        img: "./images/sun-brown-pattern.svg",
    },
    {
        color: "red",
        number: 1,
        shape: "sun",
        filling: "empty",
        img: "./images/sun-red-empty.svg",
    },
    {
        color: "red",
        number: 1,
        shape: "sun",
        filling: "full",
        img: "./images/sun-red-full.svg",
    },
    {
        color: "red",
        number: 1,
        shape: "sun",
        filling: "pattern",
        img: "./images/sun-red-pattern.svg",
    },
    {
        color: "yellow",
        number: 1,
        shape: "sun",
        filling: "empty",
        img: "./images/sun-yellow-empty.svg",
    },
    {
        color: "yellow",
        number: 1,
        shape: "sun",
        filling: "full",
        img: "./images/sun-yellow-full.svg",
    },
    {
        color: "yellow",
        number: 1,
        shape: "sun",
        filling: "pattern",
        img: "./images/sun-yellow-pattern.svg",
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

