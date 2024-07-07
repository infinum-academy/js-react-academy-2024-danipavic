"use client";

import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";

interface IStarsRatingProps {
  canInteract: boolean;
  rating: number;
  setSelectedRating?: (rating: number) => void;
}

function getStarsColor(
  canInteract: boolean,
  rating: number,
  hoveredRating: number | null,
  index: number
) {
  return (canInteract &&
    rating &&
    ((hoveredRating !== null && hoveredRating > index) ||
      (!hoveredRating && rating > index))) ||
    (!canInteract && rating > index)
    ? "yellow.400"
    : "white";
}

export const StarsRating = ({
  rating,
  canInteract = false,
  setSelectedRating,
}: IStarsRatingProps) => {
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);

  return (
    <Flex gap="2" my={4}>
      {Array.from({ length: 5 }, (_, index) => (
        <Box
          key={index}
          color={getStarsColor(canInteract, rating, hoveredRating, index)}
          fontSize="2xl"
          cursor={canInteract ? "pointer" : "default"}
          onClick={() => {
            if (canInteract && setSelectedRating) {
              setSelectedRating(index + 1);
            }
          }}
          onMouseEnter={() => setHoveredRating(index + 1)}
          onMouseLeave={() => {
            if (rating) {
              setHoveredRating(rating);
            } else {
              setHoveredRating(null);
            }
          }}
        >
          &#9733;
        </Box>
      ))}
    </Flex>
  );
};
