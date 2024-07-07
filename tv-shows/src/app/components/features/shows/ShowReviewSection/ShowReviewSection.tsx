"use client";

import { useState, useEffect } from "react";
import { IReview } from "../../../../typings/Review.type";
import { ReviewForm } from "../../review/ReviewForm/ReviewForm";
import { ReviewList } from "../../review/ReviewList/ReviewList";
import { REVIEWS_LOCAL_STORAGE_KEY } from "../../../../constants";

const reviews: Array<IReview> = [
  {
    reviewerEmail: "dani.pavic@infinum.com",
    reviewerAvatarURL: "https://bit.ly/dan-abramov",
    comment: "This show is amazing!",
    rating: 10,
  },
  {
    reviewerEmail: "dani.pavic@infinum.com",
    reviewerAvatarURL: "https://bit.ly/dan-abramov",
    comment: "This show is amazing!",
    rating: 10,
  },
  {
    reviewerEmail: "dani.pavic@infinum.com",
    reviewerAvatarURL: "https://bit.ly/dan-abramov",
    comment: "This show is amazing!",
    rating: 10,
  },
];

export const ShowReviewSection = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const loadedList = loadFromLocalStorage();
    setReviews(loadedList);
  }, []);

  const saveToLocalStorage = (reviews: Array<IReview>) => {
    localStorage.setItem(REVIEWS_LOCAL_STORAGE_KEY, JSON.stringify(reviews));
  };

  const loadFromLocalStorage = () => {
    const reviews = localStorage.getItem(REVIEWS_LOCAL_STORAGE_KEY);

    if (!reviews) {
      return [];
    }
    return JSON.parse(reviews);
  };

  return (
    <>
      <ReviewForm />
      <ReviewList reviews={reviews} />
    </>
  );
};
