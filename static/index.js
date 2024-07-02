const REVIEWS_LOCAL_STORAGE_KEY = "reviews";
let reviews = getReviewsFromLocalStorage();

function handleFormSubmit(event) {
  event.preventDefault();

  const { description, rating } = event.target.elements;
  const newReview = {
    description: description.value,
    rating: rating.value,
    id: window.crypto.randomUUID(),
  };

  description.value = "";
  rating.value = "";
  reviews.push(newReview);

  saveReviewsToLocalStorage();
  calculateAverageRating();
  renderReview(newReview);
  clearSelectedStars();
}

function createReviewElement(review) {
  const reviewElement = document.createElement("div");

  reviewElement.classList.add("review-card");
  reviewElement.innerHTML = `
    <p class="review-description">${review.description}</p>
    <p class="review-rating">${review.rating}/5</p>
    <button class="button">Remove</button>
  `;

  reviewElement.querySelector("button").addEventListener("click", () => {
    removeReviewElement(review.id, reviewElement);
  });

  return reviewElement;
}

function removeReviewElement(reviewId, reviewElement) {
  reviewElement.remove();
  reviews = reviews.filter((review) => review.id !== reviewId);

  saveReviewsToLocalStorage();
  calculateAverageRating();
}

function renderReview(review) {
  const reviewsContainer = document.querySelector(".reviews");

  reviewsContainer.appendChild(createReviewElement(review));
}

function saveReviewsToLocalStorage() {
  localStorage.setItem(REVIEWS_LOCAL_STORAGE_KEY, JSON.stringify(reviews));
}

function getReviewsFromLocalStorage() {
  const storedReviews = localStorage.getItem(REVIEWS_LOCAL_STORAGE_KEY);

  return storedReviews ? JSON.parse(storedReviews) : [];
}

function calculateAverageRating() {
  const averageRatingElement = document.querySelector(
    ".show-details__average-rating"
  );

  if (reviews.length === 0) {
    averageRatingElement.textContent = "No reviews yet";
    return;
  }

  const averageRating =
    reviews.reduce((acc, review) => acc + parseInt(review.rating), 0) /
    reviews.length;

  averageRatingElement.textContent = averageRating.toFixed(1);
}

function renderRatingStars() {
  const ratingForm = document.querySelector(".review-form");
  const ratingStarsContainer = document.querySelector(".review-form__stars");

  for (let i = 1; i <= 5; i++) {
    const star = document.createElement("span");

    star.classList.add("star");
    star.innerHTML = "&#9733";

    star.addEventListener("click", () => {
      ratingForm.elements.rating.value = i;
      toggleSelectedStars(i);
    });

    ratingStarsContainer.appendChild(star);
  }
}

function toggleSelectedStars(clickedStarIndex) {
  document.querySelectorAll(".star").forEach((star, index) => {
    star.classList.toggle("selected", clickedStarIndex > index);
  });
}

function clearSelectedStars() {
  document.querySelectorAll(".selected").forEach((star) => {
    star.classList.remove("selected");
  });
}

function init() {
  const ratingForm = document.querySelector(".review-form");
  const reviewsContainer = document.querySelector(".reviews");

  reviews.forEach((review) =>
    reviewsContainer.appendChild(createReviewElement(review))
  );
  renderRatingStars();
  calculateAverageRating();

  ratingForm.addEventListener("submit", handleFormSubmit);
}

init();
