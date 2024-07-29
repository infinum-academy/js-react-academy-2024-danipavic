'use client';

import { Flex, Show, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { ShowCard } from '../../../../shared/ShowCard/ShowCard';
import { ShowMobileCard } from '../../../../shared/ShowMobileCard/ShowMobileCard';
import { ShowPickerContext } from './ShowPickerContextProvider';

export const ShowPickerResultStep = () => {
	const { selectedShows } = useContext(ShowPickerContext);

	return selectedShows.length ? (
		<>
			<Text color="white" mb="4">
				Here are your chosen TV Shows:
			</Text>
			<Flex wrap="wrap" flexDirection={{ base: 'column', md: 'row' }} align="center" justify="space-between" gap="4">
				{selectedShows.map((selectedShow) => (
					<>
						<Show above="lg">
							<ShowCard key={selectedShow.id} show={selectedShow} />
						</Show>
						<Show below="lg">
							<ShowMobileCard key={selectedShow.id} show={selectedShow} />
						</Show>
					</>
				))}
			</Flex>
		</>
	) : (
		<Text color="white">Looks like you haven't selected any show. Show picker is sad, please start over.</Text>
	);
};
