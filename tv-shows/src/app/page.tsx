"use client";

import { Box } from "@chakra-ui/react";
import { ShowDetails } from "./components/features/shows/ShowDetails/ShowDetails";
import { IShow } from "./typings/Show.type";

const mockShow: IShow = {
  title: "Breaking Bad",
  description: "A high school chemistry teacher turned meth kingpin",
  averageRating: 9.5,
  imageUrl: "/assets/show-hero.jpg",
};

export default function Home() {
  return (
    <Box>
      <ShowDetails show={mockShow} />
    </Box>
  );
}
