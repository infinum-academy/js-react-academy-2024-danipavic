'use client';

import { Flex, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { ShowCard } from '../../../../shared/ShowCard/ShowCard';
import { ShowPickerContext } from './ShowPickerContextProvider';

export const ShowPickerResultStep = () => {
	const { selectedShows } = useContext(ShowPickerContext);

	return selectedShows.length ? (
		<>
			<Text color="white" mb="4">
				Here are your chosen TV Shows:
			</Text>
			<Flex wrap="wrap" flexDirection={{ base: 'column', md: 'row' }} align="center" justify="space-between" gap="8">
				{selectedShows.map((selectedShow) => (
					<ShowCard key={selectedShow.id} show={selectedShow} />
				))}
			</Flex>
		</>
	) : (
		<Text color="white">Looks like you haven't selected any show. Show picker is sad, please start over.</Text>
	);
};
