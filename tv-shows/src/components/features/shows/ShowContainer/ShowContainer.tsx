'use client';

import { Box } from '@chakra-ui/react';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { getOneShow } from '../../../../fetchers/show';
import { IReview } from '../../../../typings/Review.type';
import { loadFromLocalStorage, saveToLocalStorage } from '../../../../utils/localstorage-helpers';
import { Loader } from '../../../shared/Loader/Loader';
import { ShowDetails } from '../ShowDetails/ShowDetails';
import { ShowReviewSection } from '../ShowReviewSection/ShowReviewSection';

export default function ShowContainer() {
	const { id } = useParams<{ id: string }>();
	const { data, error, isLoading } = useSWR(`/api/shows/${id}`, () => getOneShow(id));
	const [reviews, setReviews] = useState<Array<IReview>>();

	useEffect(() => {
		setReviews(loadFromLocalStorage());
	}, []);

	useEffect(() => {
		if (!reviews) return;

		saveToLocalStorage(reviews);
	}, [reviews]);

	const onAddReview = (review: IReview) => {
		if (!reviews) return;

		setReviews([...reviews, review]);
	};

	const onRemoveReview = (review: IReview) => {
		if (!reviews) return;

		setReviews([...reviews.filter((currentReview) => currentReview.uuid !== review.uuid)]);
	};

	if (error) {
		return <p>Something went wrong, please retry.</p>;
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
