'use client';

import { Box } from '@chakra-ui/react';
import { useParams } from 'next/navigation';
import useSWR from 'swr';
import { getManyReviews } from '../../../../fetchers/reviews';
import { getOneShow } from '../../../../fetchers/show';
import { swrKeys } from '../../../../fetchers/swrKeys';
import { ErrorMessage } from '../../../shared/ErrorMessage/ErrorMessage';
import { Loader } from '../../../shared/Loader/Loader';
import { ShowDetails } from '../ShowDetails/ShowDetails';
import { ShowReviewSection } from '../ShowReviewSection/ShowReviewSection';

export default function ShowContainer() {
	const { id: showID } = useParams<{ id: string }>();
	const { data, error, isLoading } = useSWR(`${swrKeys.show(showID)}`, (key: string) =>
		getOneShow(key).then(({ show }) => show)
	);
	const { data: reviews } = useSWR(swrKeys.showReviews(showID), (key: string) =>
		getManyReviews(key).then(({ reviews }) => reviews)
	);

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
				<ShowReviewSection reviews={reviews} />
			</Box>
		);
	}
}
