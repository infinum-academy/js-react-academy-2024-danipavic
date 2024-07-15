'use client';

import { Box } from '@chakra-ui/react';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { REVIEWS_LOCAL_STORAGE_KEY } from '../../../../constants';
import { getOneShow } from '../../../../fetchers/show';
import { IReview } from '../../../../typings/Review.type';
import {
	ILocalStorageShowsReviews,
	loadFromLocalStorage,
	saveToLocalStorage,
} from '../../../../utils/localstorage-helpers';
import { ErrorMessage } from '../../../shared/ErrorMessage/ErrorMessage';
import { Loader } from '../../../shared/Loader/Loader';
import { ShowDetails } from '../ShowDetails/ShowDetails';
import { ShowReviewSection } from '../ShowReviewSection/ShowReviewSection';

export default function ShowContainer() {
	const { id: showID } = useParams<{ id: string }>();
	const { data, error, isLoading } = useSWR(`/api/shows/${showID}`, () => getOneShow(showID).then(({ show }) => show));
	const [reviews, setReviews] = useState<Array<IReview>>();

	useEffect(() => {
		setReviews(loadFromLocalStorage<ILocalStorageShowsReviews>(REVIEWS_LOCAL_STORAGE_KEY)?.reviews?.[showID] ?? []);
	}, [showID]);

	useEffect(() => {
		if (!reviews) return;

		saveToLocalStorage<ILocalStorageShowsReviews>(REVIEWS_LOCAL_STORAGE_KEY, {
			reviews: {
				...loadFromLocalStorage<ILocalStorageShowsReviews>(REVIEWS_LOCAL_STORAGE_KEY)?.reviews,
				[showID]: reviews,
			},
		});
	}, [reviews, showID]);

	const onAddReview = (review: IReview) => {
		if (!reviews) return;

		setReviews([...reviews, review]);
	};

	const onRemoveReview = (uuid: string) => {
		if (!reviews) return;

		setReviews([...reviews.filter((currentReview) => currentReview.uuid !== uuid)]);
	};

	if (error) {
		return <ErrorMessage />;
	}

	if (isLoading || !data) {
		return <Loader />;
	}

	if (data) {
		return (
			<Box maxW="70%" mx="auto">
				<ShowDetails show={data} reviews={reviews} />
				<ShowReviewSection reviews={reviews} onAddReview={onAddReview} onRemoveReview={onRemoveReview} />
			</Box>
		);
	}
}
