"use client";

import { Button } from "@chakra-ui/react";

interface IStyledButtonProps {
  label: string;
  type?: "button" | "submit";
  onRemoveReview?: () => void;
}

export const StyledButton = ({
  label,
  type = "button",
  onRemoveReview,
}: IStyledButtonProps) => (
  <Button
    borderRadius="3xl"
    mb={4}
    variant="solid"
    onClick={onRemoveReview}
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
