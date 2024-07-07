"use client";

import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Text,
} from "@chakra-ui/react";
import { IReview } from "../../../typings/Review.type";

interface IReviewItemProps extends IReview {}

export const ReviewItem = ({
  reviewerAvatarURL,
  reviewerEmail,
  comment,
  rating,
}: IReviewItemProps) => {
  return (
    <Card
      bgColor="purple.700"
      color="white"
      borderRadius="2xl"
      overflow="hidden"
      mb={4}
    >
      <CardHeader>
        <Flex gap={2} align="center">
          <Avatar src={reviewerAvatarURL} />
          <Text fontSize="sm">{reviewerEmail}</Text>
        </Flex>
      </CardHeader>
      <CardBody py="0">
        <Text fontSize="sm">{comment ?? " User did not leave a comment."}</Text>
        <Text fontSize="sm">{rating}/5</Text>
      </CardBody>
      <CardFooter>
        <Button
          borderRadius="3xl"
          variant="solid"
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
          Remove
        </Button>
      </CardFooter>
    </Card>
  );
};
