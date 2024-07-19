'use client';

import useSWR from 'swr';
import { getManyTopRatedShows } from '../../../../fetchers/show';
import { ErrorMessage } from '../../../shared/ErrorMessage/ErrorMessage';
import { Loader } from '../../../shared/Loader/Loader';
import { ShowsList } from '../ShowsList/ShowsList';
import { swrKeys } from '../../../../fetchers/swrKeys';

export function TopRatedShowsContainer() {
	const { data, error, isLoading } = useSWR(swrKeys.topRated, getManyTopRatedShows);

	if (error) {
		return <ErrorMessage />;
	}

	if (isLoading || !data) {
		return <Loader />;
	}

	if (data) {
		return <ShowsList shows={data.shows} />;
	}
}
