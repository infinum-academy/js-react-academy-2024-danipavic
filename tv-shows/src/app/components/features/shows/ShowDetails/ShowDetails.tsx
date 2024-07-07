"use client";

import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { IReview } from "../../../../typings/Review.type";
import { IShow } from "../../../../typings/Show.type";

interface IShowProps {
  show: IShow;
  reviews: Array<IReview>;
}

export const ShowDetails = ({ show, reviews }: IShowProps) => {
  return (
    <Card borderRadius="2xl" overflow="hidden" mb={4}>
      <Image
        src={show.imageUrl}
        alt="Show image"
        fallbackSrc="
          https://fakeimg.pl/1920x1080/fcfcfc/322659?text=Missing+show+cover"
      />
      <CardBody color="purple.700">
        <Heading size="md">{show.title}</Heading>
        <Text pt="2" fontSize="sm">
          {show.description}
        </Text>
        <Text pt="2" fontSize="sm">
          {reviews.reduce((acc, review) => acc + review.rating, 0) /
            reviews.length || "No reviews yet"}
        </Text>
      </CardBody>
    </Card>
  );
};
