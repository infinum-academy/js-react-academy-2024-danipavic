'use client';

import { Heading } from '@chakra-ui/react';
import { IReview } from '../../../../typings/Review.type';
import { ReviewForm } from '../../review/ReviewForm/ReviewForm';
import { ReviewList } from '../../review/ReviewList/ReviewList';

interface IShowReviewSectionProps {
	reviews?: Array<IReview>;
}

export const ShowReviewSection = ({ reviews }: IShowReviewSectionProps) => {
	return (
		<>
			<Heading color="white" size="lg" mb={4}>
				Reviews
			</Heading>
			<ReviewForm />
			<ReviewList reviews={reviews} />
		</>
	);
};
