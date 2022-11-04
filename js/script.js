import {boats} from "./boats.js";
import { testimonials } from "./testimonials.js";

// Functions

//Shuffle a list
const shuffleList = (list) => {
    const [...shuffledList] = list;

    shuffledList.sort(() => {
        return Math.random() - 0.5;
    });

    return shuffledList;
}

//Add boat to carousel
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

//Add testimonial to carousel
const insertTestimonial = (testimonialContainer, cardSample, currentTestimonial) => {
    const newCard = cardSample.cloneNode(true);
    newCard.classList.remove('hide');
    const cardImg = newCard.querySelector('img').src = currentTestimonial.picture;
    const cardName = newCard.querySelector('[data-name]').textContent = `${currentTestimonial.name}, ${currentTestimonial.age}`;
    const cardMessage = newCard.querySelector('p:not([data-name]').textContent = currentTestimonial.message;

    testimonialContainer.append(newCard);
}

// events

//Shuffle Boats
const shuffledBoats = shuffleList(boats);
const carouselBoats = shuffledBoats.slice(0, 10);

//Shuffle Testimonials
const shuffledTestmonials = shuffleList(testimonials);

//When page loads
window.addEventListener('load', (e) => {
    const boatsCards = document.querySelector('.boats-cards');
    const cardSample = document.querySelector('.card');

    carouselBoats.forEach((boat) => {
        insertBoat(boatsCards, cardSample, boat);
    })

    const testimonialCards = document.querySelector('.testimonials-cards');
    const testCardSample = document.querySelector('.testimonials-cards .card');

    shuffledTestmonials.forEach((testimonial) => {
        insertTestimonial(testimonialCards, testCardSample, testimonial);
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




