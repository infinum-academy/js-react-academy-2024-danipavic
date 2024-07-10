'use client';

import { Flex, Spinner } from '@chakra-ui/react';
import useSWR from 'swr';
import { getManyShows } from '../../../../fetchers/show';
import { ShowsList } from '../ShowsList/ShowsList';

export function AllShowsContainer() {
	const { data, error, isLoading } = useSWR('/api/shows', getManyShows);

	if (isLoading) {
		return (
			<Flex align="center" justify="center" height="100%">
				<Spinner size="xl" color="white" />;
			</Flex>
		);
	}

	if (error) {
		return <p>Something went wrong, please retry.</p>;
	}

	if (data) {
		return <ShowsList shows={data.shows} />;
	}
}
