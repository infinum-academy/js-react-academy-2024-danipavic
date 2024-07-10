'use client';

import { Box, Flex } from '@chakra-ui/react';
import { useState } from 'react';

interface IStarsRatingProps {
	canInteract: boolean;
	rating: number;
	setSelectedRating?: (rating: number) => void;
}

function getStarsColor(canInteract: boolean, rating: number, hoveredRating: number | null, index: number) {
	if (canInteract) {
		if (hoveredRating !== null) {
			return hoveredRating > index ? 'yellow.400' : 'white';
		}
		return rating > index ? 'yellow.400' : 'white';
	}
	return rating > index ? 'yellow.400' : 'white';
}

export const StarsRating = ({ rating, canInteract = false, setSelectedRating }: IStarsRatingProps) => {
	const [hoveredRating, setHoveredRating] = useState<number | null>(null);

	return (
		<Flex gap="2" my={4} data-testid="stars-rating">
			{Array.from({ length: 5 }, (_, index) => (
				<Box
					key={index}
					color={getStarsColor(canInteract, rating, hoveredRating, index)}
					fontSize="2xl"
					cursor={canInteract ? 'pointer' : 'default'}
					onClick={() => {
						if (canInteract && setSelectedRating) {
							setSelectedRating(index + 1);
						}
					}}
					onMouseEnter={() => {
						if (canInteract) {
							setHoveredRating(index + 1);
						}
					}}
					onMouseLeave={() => {
						if (canInteract) {
							setHoveredRating(null);
						}
					}}
				>
					&#9733;
				</Box>
			))}
		</Flex>
	);
};
