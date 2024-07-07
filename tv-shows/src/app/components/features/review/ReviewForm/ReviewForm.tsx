"use client";

import { Input } from "@chakra-ui/react";
import { StyledButton } from "../../../core/Button/Button";
import { StarsRating } from "../../../shared/StarsRating/StarsRating";

export const ReviewForm = () => {
  return (
    <>
      <form>
        <Input placeholder="Email" />
        <StarsRating disabled={true} rating={3} />
        <StyledButton label="Post" />
      </form>
    </>
  );
};
