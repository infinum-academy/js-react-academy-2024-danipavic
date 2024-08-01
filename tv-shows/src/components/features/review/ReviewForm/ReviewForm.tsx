'use client';

import { Button, chakra, FormControl, FormErrorMessage, Input, Textarea } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { IReview } from '../../../../typings/Review.type';
import { StarsRating } from '../../../shared/StarsRating/StarsRating';

export interface IRatingFormInputs {
	comment: string;
	rating: number;
}

interface IReviewFormProps {
	saveForm: (data: IRatingFormInputs) => void;
	review?: IReview;
}

export const ReviewForm = ({ review, saveForm }: IReviewFormProps) => {
	const [selectedRating, setSelectedRating] = useState<number>(review?.rating ?? 0);

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

		saveForm(formData);

		if (!review) {
			setSelectedRating(0);
		}
	};

	return (
		<chakra.form onSubmit={handleSubmit(onReviewSubmit)} id={review ? 'editReviewForm' : 'createReviewForm'}>
			<FormControl isRequired={true} isDisabled={isSubmitting}>
				<Textarea
					borderRadius="containerRadius"
					backgroundColor="white"
					placeholder="Add a review"
					{...register('comment')}
				/>
			</FormControl>
			<FormControl isRequired={true} isDisabled={isSubmitting} isInvalid={Boolean(errors)}>
				<Input value={selectedRating ?? 0} type="number" readOnly display="none" {...register('rating')} />
				<FormErrorMessage color="pinkBase">{errors.rating?.message}</FormErrorMessage>
			</FormControl>
			<StarsRating canInteract={!isSubmitting} rating={selectedRating} setSelectedRating={setSelectedRating} />
			{!review && (
				<Button type="submit" variant="primary" isLoading={isSubmitting} loadingText="Submitting">
					Post
				</Button>
			)}
		</chakra.form>
	);
};
