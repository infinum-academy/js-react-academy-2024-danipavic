'use client';

import { IReview } from '../../../../typings/Review.type';
import { ReviewItem } from '../ReviewItem/ReviewItem';

interface IReviewListProps {
	reviews?: Array<IReview>;
}

export const ReviewList = ({ reviews }: IReviewListProps) => {
	return (
		<>
			{reviews?.map((review, index) => (
				<ReviewItem key={index} review={review} />
			))}
		</>
	);
};
