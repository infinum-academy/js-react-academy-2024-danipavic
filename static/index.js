const REVIEWS_LOCAL_STORAGE_KEY = "reviews";
let reviews = [];

function handleFormSubmit(event, reviews, reviewsContainer) {
  const { description, rating } = event.target.elements;
  const newReview = {
    description: description.value,
    rating: rating.value,
    id: window.crypto.randomUUID(),
  };

  description.value = "";
  rating.value = "";

  reviews.push(newReview);

  saveReviewsToLocalStorage(reviews);
  calculateAverageRating(reviews);
  renderReview(newReview, reviews, reviewsContainer);
  clearSelectedStars();
}

function createReviewElement(review, reviews) {
  const reviewElement = document.createElement("div");

  reviewElement.classList.add("review-card");
  reviewElement.innerHTML = `
            <p class="review-description">${review.description}</p>
            <p class="review-rating">${review.rating}/5</p>
            <button class="button">Remove</button>
        `;

  reviewElement.querySelector("button").addEventListener("click", () => {
    removeReviewElement(reviews, review.id, reviewElement);
  });

  return reviewElement;
}

function removeReviewElement(reviews, reviewId, reviewElement) {
  reviewElement.remove();
  const reviewIndex = reviews.findIndex((review) => review.id === reviewId);
  reviews.splice(reviewIndex, 1);

  saveReviewsToLocalStorage(reviews);
  calculateAverageRating(reviews);
}

function initReviews(reviews, reviewsContainer) {
  if (!reviews.length) return;

  reviews.forEach((review) => {
    reviewsContainer.appendChild(createReviewElement(review, reviews));
  });
}

function renderReview(review, reviews, reviewsContainer) {
  reviewsContainer.appendChild(createReviewElement(review, reviews));
}

function saveReviewsToLocalStorage(reviews) {
  localStorage.setItem(REVIEWS_LOCAL_STORAGE_KEY, JSON.stringify(reviews));
}

function getReviewsFromLocalStorage() {
  const reviews = localStorage.getItem(REVIEWS_LOCAL_STORAGE_KEY);

  return reviews ? JSON.parse(reviews) : [];
}

function calculateAverageRating(reviews) {
  const averageRatingElement = document.querySelector(
    ".show-details__average-rating"
  );

  if (!reviews.length) {
    averageRatingElement.textContent = "No reviews yet";

    return;
  }

  averageRatingElement.textContent =
    reviews.reduce((acc, review) => {
      return acc + parseInt(review.rating);
    }, 0) / reviews.length;
}

function renderRatingStars(ratingForm) {
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
  const reviews = getReviewsFromLocalStorage();

  initReviews(reviews, reviewsContainer);
  renderRatingStars(ratingForm);
  calculateAverageRating(reviews);

  ratingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    handleFormSubmit(event, reviews, reviewsContainer);
  });
}

init();
