'use client';

import { Input, Text, Textarea } from '@chakra-ui/react';
import { useState } from 'react';
import { IReview } from '../../../../typings/Review.type';
import { StyledButton } from '../../../core/StyledButton/StyledButton';
import { StarsRating } from '../../../shared/StarsRating/StarsRating';

interface IReviewFormProps {
	onAddReview: (review: IReview) => void;
}

export const ReviewForm = ({ onAddReview }: IReviewFormProps) => {
	const [selectedRating, setSelectedRating] = useState<number>(0);
	const [error, setError] = useState<string | null>(null);

	return (
		<>
			<form
				onSubmit={(event) => {
					event.preventDefault();

					const target = event.target as HTMLFormElement;

					const commentInput = target.elements.namedItem('comment') as HTMLInputElement;
					const ratingInput = target.elements.namedItem('rating') as HTMLInputElement;

					if (!parseInt(ratingInput.value) || !commentInput.value) {
						setError('Please fill in all fields');

						return;
					} else {
						setError(null);
					}

					const newReview: IReview = {
						comment: commentInput.value,
						rating: parseInt(ratingInput.value),
						uuid: window.crypto.randomUUID(),
						reviewerAvatarURL: 'https://i.pravatar.cc/150?img=68',
						reviewerEmail: 'dani.pavic@infinum.com',
					};

					commentInput.value = '';
					ratingInput.value = '';

					onAddReview(newReview);

					setSelectedRating(0);
				}}
			>
				<Textarea borderRadius="2xl" backgroundColor="white" placeholder="Add a review" name="comment" />
				<Input value={selectedRating ?? 0} readOnly name="rating" display="none" />
				{error && (
					<Text mt="4" color="red.500">
						{error}
					</Text>
				)}
				<StarsRating canInteract={true} rating={selectedRating} setSelectedRating={setSelectedRating} />
				<StyledButton type="submit">Post</StyledButton>
			</form>
		</>
	);
};
