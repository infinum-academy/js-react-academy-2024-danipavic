import { useParams } from 'next/navigation';
import { mutate } from 'swr';
import useSWRMutation from 'swr/mutation';
import { updateReview } from '../../../../fetchers/reviews';
import { swrKeys } from '../../../../fetchers/swrKeys';
import { IReview } from '../../../../typings/Review.type';
import { IRatingFormInputs, ReviewForm } from '../ReviewForm/ReviewForm';

interface IEditReviewContainerProps {
	review: IReview;
	onSuccess: () => void;
}

export const EditReviewContainer = ({ review, onSuccess }: IEditReviewContainerProps) => {
	const { id: showID } = useParams<{ id: string }>();
	const { trigger } = useSWRMutation(`${swrKeys.reviews}/${review.id}`, updateReview, {
		onSuccess: () => {
			onSuccess();
			mutate(swrKeys.showReviews(showID));
		},
	});

	const saveForm = (formData: IRatingFormInputs) => {
		const { comment, rating } = formData;

		trigger({
			comment,
			rating,
			show_id: showID,
		});
	};

	return <ReviewForm review={review} saveForm={saveForm} />;
};
