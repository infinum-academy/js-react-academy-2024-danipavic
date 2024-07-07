"use client";

import { IReview } from "../../../../typings/Review.type";
import { saveToLocalStorage } from "../../../../utils/localstorage-helpers";
import { ReviewItem } from "../ReviewItem/ReviewItem";

interface IReviewListProps {
  reviews: Array<IReview>;
  onRemoveReview: (review: IReview) => void;
}

export const ReviewList = ({ reviews, onRemoveReview }: IReviewListProps) => {
  const removeItem = (review: IReview, uuid: string) => {
    onRemoveReview(review);
    saveToLocalStorage(reviews.filter((review) => review.uuid !== uuid));
  };

  return (
    <>
      {reviews.map((review, index) => (
        <ReviewItem
          key={index}
          {...review}
          onRemoveReview={removeItem.bind(this, review, review.uuid)}
        />
      ))}
    </>
  );
};
