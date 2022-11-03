import {boats} from "./boats.js";

// Functions

const insertBoat = (boatCards, cardSample, currentBoat) => {
    const newCard = cardSample.cloneNode(true);
    newCard.classList.remove('hide')
    const cardImg = newCard.querySelector('img').src = currentBoat.pictures;
    const cardTitle = newCard.querySelector('h3').textContent = currentBoat.name;
    const cardLocation = newCard.querySelector('.card-location > p').textContent = currentBoat.location;
    const cardGuestsAmount = newCard.querySelector('.card-infos .guests').textContent = currentBoat.guestsAmount;
    const cardBedsAmount = newCard.querySelector('.card-infos .beds').textContent = currentBoat.bedsAmount;
    const cardBoatSize = newCard.querySelector('.card-infos .measurement').textContent = `${currentBoat.measurement}m`;
    const cardPrice = newCard.querySelector('.card .card-price > p').textContent = `$${currentBoat.pricePerDay}/day`

    boatCards.append(newCard);
}

window.addEventListener('load', (e) => {
    const boatsCards = document.querySelector('.boats-cards');
    const cardSample = document.querySelector('.card');

    boats.forEach((boat) => {
        insertBoat(boatsCards, cardSample, boat);
    })

})




