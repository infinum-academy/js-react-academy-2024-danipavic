'use client';

import { chakra, FormControl, FormErrorMessage, Input, Textarea } from '@chakra-ui/react';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { mutate } from 'swr';
import useSWRMutation from 'swr/mutation';
import { createReview } from '../../../../fetchers/reviews';
import { swrKeys } from '../../../../fetchers/swrKeys';
import { StyledButton } from '../../../core/StyledButton/StyledButton';
import { StarsRating } from '../../../shared/StarsRating/StarsRating';

interface IRatingFormInputs {
	comment: string;
	rating: number;
}

export const ReviewForm = () => {
	const [selectedRating, setSelectedRating] = useState<number>(0);
	const { id: showID } = useParams<{ id: string }>();
	const { trigger } = useSWRMutation(swrKeys.reviews, createReview, {
		onSuccess: () => {
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
	} = useForm<IRatingFormInputs>();

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

		setSelectedRating(0);
	};

	return (
		<>
			<chakra.form onSubmit={handleSubmit(onReviewSubmit)}>
				<FormControl isRequired={true} isDisabled={isSubmitting}>
					<Textarea borderRadius="2xl" backgroundColor="white" placeholder="Add a review" {...register('comment')} />
				</FormControl>
				<FormControl isRequired={true} isDisabled={isSubmitting} isInvalid={Boolean(errors)}>
					<Input value={selectedRating ?? 0} type="number" readOnly display="none" {...register('rating')} />
					<FormErrorMessage color="red.500">{errors.rating?.message}</FormErrorMessage>
				</FormControl>
				<StarsRating canInteract={!isSubmitting} rating={selectedRating} setSelectedRating={setSelectedRating} />
				<StyledButton type="submit" isLoading={isSubmitting} loadingText="Submitting">
					Post
				</StyledButton>
			</chakra.form>
		</>
	);
};
