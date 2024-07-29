import { useParams } from 'next/navigation';
import { mutate } from 'swr';
import useSWRMutation from 'swr/mutation';
import { createReview } from '../../../../fetchers/reviews';
import { swrKeys } from '../../../../fetchers/swrKeys';
import { IRatingFormInputs, ReviewForm } from '../ReviewForm/ReviewForm';

export const CreateReviewContainer = () => {
	const { id: showID } = useParams<{ id: string }>();
	const { trigger } = useSWRMutation(swrKeys.reviews, createReview, {
		onSuccess: () => {
			mutate(swrKeys.showReviews(showID));
		},
	});

	const saveForm = async (formData: IRatingFormInputs) => {
		const { comment, rating } = formData;

		await trigger({
			comment,
			rating,
			show_id: showID,
		});
	};

	return <ReviewForm saveForm={saveForm} />;
};
