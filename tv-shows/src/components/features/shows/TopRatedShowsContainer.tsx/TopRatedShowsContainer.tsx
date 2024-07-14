'use client';

import useSWR from 'swr';
import { getManyTopRatedShows } from '../../../../fetchers/show';
import { ErrorIndicator } from '../../../shared/ErrorIndicator/ErrorIndicator';
import { Loader } from '../../../shared/Loader/Loader';
import { ShowsList } from '../ShowsList/ShowsList';

export function TopRatedShowsContainer() {
	const { data, error, isLoading } = useSWR('/api/shows/top-rated', getManyTopRatedShows);

	if (error) {
		return <ErrorIndicator />;
	}

	if (isLoading || !data) {
		return <Loader />;
	}

	if (data) {
		return <ShowsList shows={data.shows} />;
	}
}
