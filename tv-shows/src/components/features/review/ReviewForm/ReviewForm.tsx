'use client';

import { chakra, FormControl, FormErrorMessage, Input, Textarea } from '@chakra-ui/react';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { mutate } from 'swr';
import useSWRMutation from 'swr/mutation';
import { createReview, updateReview } from '../../../../fetchers/reviews';
import { swrKeys } from '../../../../fetchers/swrKeys';
import { IReview } from '../../../../typings/Review.type';
import { StyledButton } from '../../../core/StyledButton/StyledButton';
import { StarsRating } from '../../../shared/StarsRating/StarsRating';

interface IRatingFormInputs {
	comment: string;
	rating: number;
}

interface IReviewFormProps {
	review?: IReview;
	onSuccess?: () => void;
}

export const ReviewForm = ({ review, onSuccess }: IReviewFormProps) => {
	const reviewMutator = review ? updateReview : createReview;
	const reviewMutationKey = review ? `${swrKeys.reviews}/${review.id}` : swrKeys.reviews;

	const [selectedRating, setSelectedRating] = useState<number>(review?.rating ?? 0);
	const { id: showID } = useParams<{ id: string }>();
	const { trigger } = useSWRMutation(reviewMutationKey, reviewMutator, {
		onSuccess: () => {
			onSuccess && onSuccess();
			mutate(swrKeys.showReviews(showID));
		},
	});
	const {
		register,
		handleSubmit,
		setValue,
		setError,
		clearErrors,
		resetField,
		formState: { errors, isSubmitting },
	} = useForm<IRatingFormInputs>({ values: { comment: review?.comment ?? '', rating: review?.rating ?? 0 } });

	useEffect(() => {
		setValue('rating', selectedRating);
	}, [selectedRating, setValue]);

	const onReviewSubmit = (formData: IRatingFormInputs) => {
		const { comment, rating } = formData;

		if (!rating || !comment) {
			setError('rating', { type: 'custom', message: 'Please fill in all fields' });
			return;
		} else {
			clearErrors('rating');
		}

		resetField('comment');
		resetField('rating');

		trigger({
			comment,
			rating,
			show_id: showID,
		});

		if (!review) {
			setSelectedRating(0);
		}
	};

	return (
		<chakra.form onSubmit={handleSubmit(onReviewSubmit)} id={review ? 'editReviewForm' : 'createReviewForm'}>
			<FormControl isRequired={true} isDisabled={isSubmitting}>
				<Textarea borderRadius="2xl" backgroundColor="white" placeholder="Add a review" {...register('comment')} />
			</FormControl>
			<FormControl isRequired={true} isDisabled={isSubmitting} isInvalid={Boolean(errors)}>
				<Input value={selectedRating ?? 0} type="number" readOnly display="none" {...register('rating')} />
				<FormErrorMessage color="red.500">{errors.rating?.message}</FormErrorMessage>
			</FormControl>
			<StarsRating canInteract={!isSubmitting} rating={selectedRating} setSelectedRating={setSelectedRating} />
			{!review && (
				<StyledButton type="submit" isLoading={isSubmitting} loadingText="Submitting">
					Post
				</StyledButton>
			)}
		</chakra.form>
	);
};
