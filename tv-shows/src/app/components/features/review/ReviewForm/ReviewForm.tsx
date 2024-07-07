"use client";

import { Input, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { StyledButton } from "../../../core/Button/Button";
import { StarsRating } from "../../../shared/StarsRating/StarsRating";

export const ReviewForm = () => {
  const [selectedRating, setSelectedRating] = useState<number>(0);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e);
        }}
      >
        <Textarea backgroundColor="white" placeholder="Add a review" required />
        <Input value={selectedRating ?? 0} display="none" required />
        <StarsRating
          canInteract={true}
          rating={selectedRating}
          setSelectedRating={setSelectedRating}
        />
        <StyledButton type="submit" label="Post" />
      </form>
    </>
  );
};
