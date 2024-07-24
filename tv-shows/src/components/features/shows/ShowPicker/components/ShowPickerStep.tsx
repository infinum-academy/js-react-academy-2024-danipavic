'use client';

import { Flex } from '@chakra-ui/react';
import { useContext } from 'react';
import { ShowCard } from '../../../../shared/ShowCard/ShowCard';
import { ShowPickerContext } from './ShowPickerContextProvider';

export const ShowPickerStep = () => {
	const { activeStep, availableShows, setSelectedShows } = useContext(ShowPickerContext);

	return (
		<Flex flexDirection={{ base: 'column', md: 'row' }} align="center" justify="space-between" gap="8">
			{availableShows?.slice(activeStep * 4, (activeStep + 1) * 4).map((availableShow) => (
				<ShowCard key={availableShow.id} show={availableShow} />
			))}
		</Flex>
	);
};
