"use client";

import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Text,
} from "@chakra-ui/react";
import { IReview } from "../../../../typings/Review.type";
import { StyledButton } from "../../../core/Button/Button";

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
        <StyledButton />
      </CardFooter>
    </Card>
  );
};
