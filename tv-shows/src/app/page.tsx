"use client";

import { Box } from "@chakra-ui/react";
import { ReviewItem } from "./components/features/review/ReviewItem";
import { ShowDetails } from "./components/features/shows/ShowDetails/ShowDetails";
import { IReview } from "./typings/Review.type";
import { IShow } from "./typings/Show.type";

const mockShow: IShow = {
  title: "Breaking Bad",
  description: "A high school chemistry teacher turned meth kingpin",
  averageRating: 9.5,
  imageUrl: "/assets/show-hero.jpg",
};

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

export default function Home() {
  return (
    <Box>
      <ShowDetails show={mockShow} />
      {reviews.map((review, index) => (
        <ReviewItem key={index} {...review} />
      ))}
    </Box>
  );
}
