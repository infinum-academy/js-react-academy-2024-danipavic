"use client";

import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { IShow } from "../../../../typings/Show.type";

interface IShowProps {
  show: IShow;
}

export const ShowDetails = ({ show }: IShowProps) => {
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
          {show.averageRating}
        </Text>
      </CardBody>
    </Card>
  );
};
