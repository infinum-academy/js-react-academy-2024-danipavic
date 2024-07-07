"use client";

import { Input, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { IReview } from "../../../../typings/Review.type";
import { saveToLocalStorage } from "../../../../utils/localstorage-helpers";
import { StyledButton } from "../../../core/Button/Button";
import { StarsRating } from "../../../shared/StarsRating/StarsRating";

interface IReviewFormProps {
  reviews: Array<IReview>;
  onAddReview: (review: IReview) => void;
}

export const ReviewForm = ({ onAddReview, reviews }: IReviewFormProps) => {
  const [selectedRating, setSelectedRating] = useState<number>(0);

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          const target = event.target as HTMLFormElement;

          const commentInput = target.elements.namedItem(
            "comment"
          ) as HTMLInputElement;
          const ratingInput = target.elements.namedItem(
            "rating"
          ) as HTMLInputElement;

          if (!parseInt(ratingInput.value)) return;

          const newReview: IReview = {
            comment: commentInput.value,
            rating: parseInt(ratingInput.value),
            uuid: window.crypto.randomUUID(),
            reviewerAvatarURL: "https://i.pravatar.cc/150?img=68",
            reviewerEmail: "John Doe",
          };

          commentInput.value = "";
          ratingInput.value = "";

          onAddReview(newReview);
          saveToLocalStorage([...reviews, newReview]);

          setSelectedRating(0);
        }}
      >
        <Textarea
          borderRadius="2xl"
          backgroundColor="white"
          placeholder="Add a review"
          required
          name="comment"
        />

        <Input
          value={selectedRating ?? 0}
          readOnly
          name="rating"
          display="none"
        />
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
