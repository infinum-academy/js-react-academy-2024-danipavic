import { REVIEWS_LOCAL_STORAGE_KEY } from "../constants";
import { IReview } from "../typings/Review.type";

export const saveToLocalStorage = (reviews: Array<IReview>) => {
  localStorage.setItem(REVIEWS_LOCAL_STORAGE_KEY, JSON.stringify(reviews));
};

export const loadFromLocalStorage = () => {
  const reviews = localStorage.getItem(REVIEWS_LOCAL_STORAGE_KEY);

  if (!reviews) {
    return [];
  }
  return JSON.parse(reviews);
};
