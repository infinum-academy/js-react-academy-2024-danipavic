'use client';

import useSWR from 'swr';
import { getManyShows } from '../../../../fetchers/show';
import { Loader } from '../../../shared/Loader/Loader';
import { ShowsList } from '../ShowsList/ShowsList';

export function AllShowsContainer() {
	const { data, error, isLoading } = useSWR('/api/shows', getManyShows);

	if (error) {
		return <p>Something went wrong, please retry.</p>;
	}

	if (isLoading || !data) {
		return <Loader />;
	}

	if (data) {
		return <ShowsList shows={data.shows} />;
	}
}
