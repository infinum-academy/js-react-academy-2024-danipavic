"use client";

import { ShowDetails } from "./components/features/shows/ShowDetails/ShowDetails";
import { ShowReviewSection } from "./components/features/shows/ShowReviewSection/ShowReviewSection";
import { IShow } from "./typings/Show.type";

const mockShow: IShow = {
  title: "Breaking Bad",
  description: "A high school chemistry teacher turned meth kingpin",
  averageRating: 9.5,
  imageUrl: "/assets/show-hero.jpg",
};

export default function Home() {
  return (
    <>
      <ShowDetails show={mockShow} />
      <ShowReviewSection />
    </>
  );
}
