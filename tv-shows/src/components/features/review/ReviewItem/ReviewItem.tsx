'use client';

import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Flex, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import useSWR, { mutate } from 'swr';
import useSWRMutation from 'swr/mutation';
import { deleteReview } from '../../../../fetchers/reviews';
import { swrKeys } from '../../../../fetchers/swrKeys';
import { IReview } from '../../../../typings/Review.type';
import { StarsRating } from '../../../shared/StarsRating/StarsRating';
import { EditReviewModal } from '../EditReviewModal/EditReviewModal';

interface IReviewItemProps {
	review: IReview;
}

export const ReviewItem = ({ review }: IReviewItemProps) => {
	const [userID, setUserID] = useState<string>();
	const { data } = useSWR(swrKeys.user);

	const { trigger } = useSWRMutation(`${swrKeys.reviews}/${review.id}`, deleteReview, {
		onSuccess: () => {
			mutate(swrKeys.showReviews(review.show_id));
		},
	});

	useEffect(() => {
		setUserID(data?.user.email ?? '');
	}, [setUserID, data]);

	return (
		<Card bgColor="purpleDark" color="white" mb={4}>
			<CardHeader>
				<Flex gap={4} flexDirection={{ base: 'column', md: 'row' }} align={{ base: 'flex-start', md: 'center' }}>
					<Avatar size={{ base: 'xs', md: 'md' }} src={review.user.image_url} />
					<Text wordBreak="break-word" data-testid="review-email" fontSize="sm">
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
			<CardFooter py="0" gap="4">
				{userID === review.user.email && (
					<>
						<EditReviewModal review={review} />
						<Button variant="primary" onClick={() => trigger()} data-testid="remove-review-button">
							Remove
						</Button>
					</>
				)}
			</CardFooter>
		</Card>
	);
};
