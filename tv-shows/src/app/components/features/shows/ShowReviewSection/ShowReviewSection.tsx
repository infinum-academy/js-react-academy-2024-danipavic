"use client";

import { IReview } from "../../../../typings/Review.type";
import { ReviewForm } from "../../review/ReviewForm/ReviewForm";
import { ReviewList } from "../../review/ReviewList/ReviewList";

interface IShowReviewSectionProps {
  reviews: Array<IReview>;
  onAddReview: (review: IReview) => void;
}

export const ShowReviewSection = ({
  reviews,
  onAddReview,
}: IShowReviewSectionProps) => {
  return (
    <>
      <ReviewForm onAddReview={onAddReview} reviews={reviews} />
      <ReviewList reviews={reviews} />
    </>
  );
};
