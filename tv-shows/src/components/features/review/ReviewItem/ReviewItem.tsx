'use client';

import { Avatar, Card, CardBody, CardFooter, CardHeader, Flex, Text } from '@chakra-ui/react';
import { mutate } from 'swr';
import useSWRMutation from 'swr/mutation';
import { deleteReview } from '../../../../fetchers/reviews';
import { swrKeys } from '../../../../fetchers/swrKeys';
import { IReview } from '../../../../typings/Review.type';
import { StyledButton } from '../../../core/StyledButton/StyledButton';
import { StarsRating } from '../../../shared/StarsRating/StarsRating';

interface IReviewItemProps {
	review: IReview;
}

export const ReviewItem = ({ review }: IReviewItemProps) => {
	const { trigger } = useSWRMutation(`${swrKeys.reviews}/${review.id}`, deleteReview, {
		onSuccess: () => {
			mutate(swrKeys.showReviews(review.show_id));
		},
	});

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
				<StyledButton onClick={() => trigger()}>Remove</StyledButton>
			</CardFooter>
		</Card>
	);
};
