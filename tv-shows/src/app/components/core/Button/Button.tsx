"use client";

import { Button } from "@chakra-ui/react";
import { IReview } from "../../../typings/Review.type";

interface IStyledButtonProps {
  label: string;
  type?: "button" | "submit";
  review: IReview;
  onRemoveReview?: (review: IReview) => void;
}

export const StyledButton = ({
  label,
  type = "button",
  review,
  onRemoveReview,
}: IStyledButtonProps) => (
  <Button
    borderRadius="3xl"
    mb={4}
    variant="solid"
    onClick={onRemoveReview?.bind(this, review)}
    type={type}
    sx={{
      bg: "white",
      color: "black",
      border: "1px solid white",
      _hover: {
        bg: "purple.700",
        border: "1px solid white",
        color: "white",
      },
    }}
  >
    {label}
  </Button>
);
