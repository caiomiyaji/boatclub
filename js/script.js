import {boats} from "./boats.js";

const [...shuffleBoats] = boats;

shuffleBoats.sort(() => {
    return Math.random() - 0.5
});

const carouselBoats = shuffleBoats.slice(0, 10);

// Functions

//Add boat to carousel
const insertBoat = (boatCards, cardSample, currentBoat) => {
    const newCard = cardSample.cloneNode(true);
    newCard.classList.remove('hide')
    newCard.classList.add('visible-card')
    const cardImg = newCard.querySelector('img').src = currentBoat.pictures;
    const cardTitle = newCard.querySelector('h3').textContent = currentBoat.name;
    const cardLocation = newCard.querySelector('.card-location > p').textContent = currentBoat.location;
    const cardGuestsAmount = newCard.querySelector('.card-infos .guests').textContent = currentBoat.guestsAmount;
    const cardBedsAmount = newCard.querySelector('.card-infos .beds').textContent = currentBoat.bedsAmount;
    const cardBoatSize = newCard.querySelector('.card-infos .measurement').textContent = `${currentBoat.measurement}m`;
    const cardPrice = newCard.querySelector('.card .card-price > p').textContent = `$${currentBoat.pricePerDay}/day`

    boatCards.append(newCard);
}

//Move the carousel
const moveCarousel = (currentButton, container, containerWidth) => {
    const nextButton = currentButton.classList.contains('right-button');

    if(nextButton){
        container.scrollTo({
            top: 0,
            left: container.scrollLeft + containerWidth,
            behavior: "smooth"
        })
    }else{
        container.scrollTo({
            top: 0,
            left: container.scrollLeft - containerWidth,
            behavior: "smooth"
        })
    }
}


// events

//When page loads
window.addEventListener('load', (e) => {
    const boatsCards = document.querySelector('.boats-cards');
    const cardSample = document.querySelector('.card');

    carouselBoats.forEach((boat) => {
        insertBoat(boatsCards, cardSample, boat);
    })

})

//Carousel Next-Prev
const carouselButtons = document.querySelectorAll('.cards-buttons button');

carouselButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const boatContainer = document.querySelector('.boats-cards');
        const containerRect = boatContainer.getBoundingClientRect();
        const containerWidth = containerRect.width;

        moveCarousel(button, boatContainer, containerWidth,)
    })
})




