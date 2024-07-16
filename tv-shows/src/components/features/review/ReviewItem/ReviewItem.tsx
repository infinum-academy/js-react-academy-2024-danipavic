'use client';

import { Avatar, Card, CardBody, CardFooter, CardHeader, Flex, Text } from '@chakra-ui/react';
import { IReview } from '../../../../typings/Review.type';
import { StyledButton } from '../../../core/StyledButton/StyledButton';
import { StarsRating } from '../../../shared/StarsRating/StarsRating';

interface IReviewItemProps {
	review: IReview;
	onRemoveReview: (uuid: string) => void;
}

export const ReviewItem = ({ review, onRemoveReview }: IReviewItemProps) => {
	return (
		<Card bgColor="purple.700" color="white" borderRadius="2xl" overflow="hidden" mb={4}>
			<CardHeader>
				<Flex gap={2} align="center">
					<Avatar src={review.user.image_url} />
					<Text data-testid="review-email" fontSize="sm">
						{review.user.email}
					</Text>
				</Flex>
			</CardHeader>
			<CardBody py="0">
				<Text data-testid="review-comment" fontSize="sm">
					{review.comment ?? ' User did not leave a comment.'}
				</Text>
				<StarsRating rating={review.rating} canInteract={false} />
			</CardBody>
			<CardFooter py={0}>
				<StyledButton onClick={() => onRemoveReview(review.id)}>Remove</StyledButton>
			</CardFooter>
		</Card>
	);
};
