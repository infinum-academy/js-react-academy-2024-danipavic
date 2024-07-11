"use client";

import { IReview } from "../../../../typings/Review.type";
import { ReviewItem } from "../ReviewItem/ReviewItem";

interface IReviewListProps {
  reviews?: Array<IReview>;
  onRemoveReview: (review: IReview) => void;
}

export const ReviewList = ({ reviews, onRemoveReview }: IReviewListProps) => {
  return (
    <>
      {reviews?.map((review, index) => (
        <ReviewItem key={index} {...review} onRemoveReview={onRemoveReview} />
      ))}
    </>
  );
};
