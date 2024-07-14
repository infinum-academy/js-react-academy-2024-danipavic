'use client';

import useSWR from 'swr';
import { getManyShows } from '../../../../fetchers/show';
import { ErrorIndicator } from '../../../shared/ErrorIndicator/ErrorIndicator';
import { Loader } from '../../../shared/Loader/Loader';
import { ShowsList } from '../ShowsList/ShowsList';

export function AllShowsContainer() {
	const { data, error, isLoading } = useSWR('/api/shows', getManyShows);

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
