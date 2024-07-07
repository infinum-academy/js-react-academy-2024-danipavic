"use client";

import { useEffect, useState } from "react";
import { IReview } from "../../../../typings/Review.type";
import { IShow } from "../../../../typings/Show.type";
import { loadFromLocalStorage } from "../../../../utils/localstorage-helpers";
import { ShowDetails } from "../ShowDetails/ShowDetails";
import { ShowReviewSection } from "../ShowReviewSection/ShowReviewSection";

const mockShow: IShow = {
  title: "Breaking Bad",
  description: "A high school chemistry teacher turned meth kingpin",
  imageUrl: "/assets/show-hero.jpg",
};

export default function ShowContainer() {
  const [reviews, setReviews] = useState<Array<IReview>>([]);

  useEffect(() => {
    setReviews(loadFromLocalStorage());
  }, []);

  const onAddReview = (review: IReview) => {
    setReviews((reviews: Array<IReview>) => [...reviews, review]);
  };

  return (
    <>
      <ShowDetails show={mockShow} reviews={reviews} />
      <ShowReviewSection reviews={reviews} onAddReview={onAddReview} />
    </>
  );
}
