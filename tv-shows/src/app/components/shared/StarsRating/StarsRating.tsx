"use client";

import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";

interface IStarsRatingProps {
  rating?: number;
  disabled?: boolean;
}

export const StarsRating = ({
  rating,
  disabled = false,
}: IStarsRatingProps) => {
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);

  return (
    <Flex gap="2">
      {Array.from({ length: 5 }, (_, index) => (
        <Box
          color={
            (disabled && rating && rating > index) ||
            (!disabled && hoveredRating && hoveredRating > index)
              ? "yellow.400"
              : "white"
          }
          key={index}
          onClick={() => {}}
          onMouseEnter={() => setHoveredRating(index + 1)}
          onMouseLeave={() => setHoveredRating(null)}
        >
          &#9733;
        </Box>
      ))}
    </Flex>
  );
};
