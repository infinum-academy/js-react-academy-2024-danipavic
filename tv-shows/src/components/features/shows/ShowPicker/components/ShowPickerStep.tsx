'use client';

import { Flex } from '@chakra-ui/react';
import { useContext } from 'react';
import { ShowCard } from '../../../../shared/ShowCard/ShowCard';
import { ShowPickerContext } from './ShowPickerContextProvider';

export const ShowPickerStep = () => {
	const { activeStep, availableShows, setSelectedShows, selectedShows } = useContext(ShowPickerContext);
	if (!availableShows) return null;

	return (
		<Flex flexDirection={{ base: 'column', md: 'row' }} align="center" justify="space-between" gap="8">
			{availableShows.slice(activeStep * 4, (activeStep + 1) * 4).map((availableShow) => (
				<ShowCard
					onClick={() => setSelectedShows([...selectedShows, availableShow])}
					key={availableShow.id}
					show={availableShow}
				/>
			))}
		</Flex>
	);
};
