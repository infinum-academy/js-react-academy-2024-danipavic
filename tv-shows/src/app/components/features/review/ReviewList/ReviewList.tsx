"use client";

import { IReview } from "../../../../typings/Review.type";
import { ReviewItem } from "../ReviewItem/ReviewItem";

export const ReviewList = ({ reviews }: { reviews: Array<IReview> }) => {
  return (
    <>
      {reviews.map((review, index) => (
        <ReviewItem key={index} {...review} />
      ))}
    </>
  );
};
