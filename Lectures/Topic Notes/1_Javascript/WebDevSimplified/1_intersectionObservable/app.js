/**
 * Applications -
 * a)lazy load images
 * b)Implement infinite scroll
 * c)scroll based animations
 */

/**
 * Code for animating API
 */

const cardContainer = document.querySelectorAll("card-container");

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(
  (entries) => {
    for (let entry of entries) {
      entry.target.classList.toggle("show", entry.isIntersecting);
    }
  },
  { threshold: 1 }
);

for (let card of cards) observer.observe(card);

/**
 * Code for LazyLoading
 */

const lastCardObserver = new IntersectionObserver(
  (entries) => {
    const lastCard = entries[0];
    if (!lastCard.isIntersecting) return;
    lastCardObserver.unobserve(lastCard);
    lastCardObserver.observe(document.querySelector(".card:last-child"));
  },
  { rootMargin: "100px" }
);

lastCardObserver.observe(document.querySelector(".card:last-child"));

function loadNewCards() {
  for (let i = 0; i < 10; i++) {
    const card = document.createElement("div");
    card.textContent = "New Card";
    card.classList.add("card");
    observer.observe(card);
    cardContainer.append(card);
  }
}
