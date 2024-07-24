'use client';

import { Flex } from '@chakra-ui/react';
import { useContext } from 'react';
import { ShowCard } from '../../../../shared/ShowCard/ShowCard';
import { ShowPickerContext } from './ShowPickerContextProvider';

export const ShowPickerResultStep = () => {
	const { selectedShows } = useContext(ShowPickerContext);

	return (
		<Flex flexDirection={{ base: 'column', md: 'row' }} align="center" justify="space-between" gap="8">
			{selectedShows.map((selectedShow) => (
				<ShowCard pointerEvents="none" key={selectedShow.id} show={selectedShow} />
			))}
		</Flex>
	);
};
