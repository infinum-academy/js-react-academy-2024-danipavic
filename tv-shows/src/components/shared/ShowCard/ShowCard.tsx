'use client';

import { Card, CardBody, Flex, Heading, Icon, Image, Text } from '@chakra-ui/react';
import { IReview } from '../../../typings/Review.type';
import NextLink from 'next/link';
import { IShow } from '../../../typings/Show.type';
import { MdOutlineStarPurple500 } from 'react-icons/md';

interface IShowCardProps {
	show: IShow;
	reviews?: Array<IReview>;
}

export const ShowCard = ({ show, reviews }: IShowCardProps) => {
	return (
		<Card as={NextLink} href={`/all-shows/${show.id}`} maxW="240px" h="340px" borderRadius="2xl" overflow="hidden">
			<Image
				src={show.imageUrl}
				alt="Show image"
				width="100%"
				height="69%"
				objectFit="cover"
				fallbackSrc="
          https://fakeimg.pl/1920x1080/fcfcfc/322659?text=Missing+show+cover"
			/>
			<CardBody color="purple.700">
				<Heading size="md">{show.title}</Heading>
				<Flex align="center">
					<Icon as={MdOutlineStarPurple500} />
					<Text fontSize="sm">
						{reviews?.length
							? `${Math.round(reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length)} / 5`
							: 'No reviews yet'}
					</Text>
				</Flex>
			</CardBody>
		</Card>
	);
};
