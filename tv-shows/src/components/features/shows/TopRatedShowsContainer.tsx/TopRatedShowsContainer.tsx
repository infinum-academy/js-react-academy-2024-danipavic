'use client';

import useSWR from 'swr';
import { getManyTopRatedShows } from '../../../../fetchers/show';
import { ErrorMessage } from '../../../shared/ErrorMessage/ErrorMessage';
import { Loader } from '../../../shared/Loader/Loader';
import { ShowsList } from '../ShowsList/ShowsList';

export function TopRatedShowsContainer() {
	const { data, error, isLoading } = useSWR('/api/shows/top-rated', getManyTopRatedShows);

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
