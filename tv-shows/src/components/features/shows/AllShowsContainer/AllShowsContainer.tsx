'use client';

import useSWR from 'swr';
import { getManyShows } from '../../../../fetchers/show';
import { swrKeys } from '../../../../fetchers/swrKeys';
import { ErrorMessage } from '../../../shared/ErrorMessage/ErrorMessage';
import { Loader } from '../../../shared/Loader/Loader';
import { ShowsList } from '../ShowsList/ShowsList';

export function AllShowsContainer() {
	const { data, error, isLoading } = useSWR(swrKeys.shows, getManyShows);

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
