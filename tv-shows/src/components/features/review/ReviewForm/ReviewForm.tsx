'use client';

import { chakra, FormControl, FormErrorMessage, Input, Textarea } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { set, useForm } from 'react-hook-form';
import { AUTH_LOCAL_STORAGE_KEY } from '../../../../constants';
import { IReview } from '../../../../typings/Review.type';
import { ILocalStorageAuth, loadFromLocalStorage } from '../../../../utils/localstorage-helpers';
import { StyledButton } from '../../../core/StyledButton/StyledButton';
import { StarsRating } from '../../../shared/StarsRating/StarsRating';

interface IReviewFormProps {
	onAddReview: (review: IReview) => void;
}

interface IRatingFormInputs {
	comment: string;
	rating: number;
}

export const ReviewForm = ({ onAddReview }: IReviewFormProps) => {
	const [selectedRating, setSelectedRating] = useState<number>(0);
	const [isFormDisabled, setIsFormDisabled] = useState(false);
	const userData = loadFromLocalStorage<ILocalStorageAuth>(AUTH_LOCAL_STORAGE_KEY);

	const {
		register,
		handleSubmit,
		setValue,
		setError,
		clearErrors,
		resetField,
		formState: { errors },
	} = useForm<IRatingFormInputs>();

	useEffect(() => {
		setValue('rating', selectedRating);
	}, [selectedRating, setValue]);

	const onReviewSubmit = (formData: IRatingFormInputs) => {
		setIsFormDisabled(true);
		const { comment, rating } = formData;

		if (!rating || !comment) {
			setError('rating', { type: 'custom', message: 'Please fill in all fields' });
			setIsFormDisabled(false);
			return;
		} else {
			clearErrors('rating');
		}

		const newReview: IReview = {
			comment,
			rating,
			uuid: window.crypto.randomUUID(),
			reviewerAvatarURL: 'https://i.pravatar.cc/150?img=68',
			reviewerEmail: userData?.Uid || '',
		};

		resetField('comment');
		resetField('rating');

		onAddReview(newReview);

		setSelectedRating(0);
		setIsFormDisabled(false);
	};

	return (
		<>
			<chakra.form onSubmit={handleSubmit(onReviewSubmit)}>
				<FormControl isRequired={true} isDisabled={isFormDisabled}>
					<Textarea borderRadius="2xl" backgroundColor="white" placeholder="Add a review" {...register('comment')} />
				</FormControl>
				<FormControl isRequired={true} isDisabled={isFormDisabled} isInvalid={Boolean(errors)}>
					<Input value={selectedRating ?? 0} type="number" readOnly display="none" {...register('rating')} />
					<FormErrorMessage color="red.500">{errors.rating?.message}</FormErrorMessage>
				</FormControl>
				<StarsRating canInteract={!isFormDisabled} rating={selectedRating} setSelectedRating={setSelectedRating} />
				<StyledButton type="submit">Post</StyledButton>
			</chakra.form>
		</>
	);
};
