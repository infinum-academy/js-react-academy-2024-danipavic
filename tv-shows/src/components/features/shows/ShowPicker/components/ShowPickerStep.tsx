'use client';

import { Flex } from '@chakra-ui/react';
import { useContext } from 'react';
import { IShow } from '../../../../../typings/Show.type';
import { ShowCard } from '../../../../shared/ShowCard/ShowCard';
import { ShowPickerContext } from './ShowPickerContextProvider';

export const ShowPickerStep = () => {
	const { activeStep, availableShows, setSelectedShows, selectedShows } = useContext(ShowPickerContext);
	if (!availableShows) return null;

	const activeStepShows = availableShows.slice(activeStep * 4, (activeStep + 1) * 4);

	const toggleShowSelection = (show: IShow) => {
		const isSelected = selectedShows.some((selectedShow) => selectedShow.id === show.id);

		if (isSelected) {
			setSelectedShows(selectedShows.filter((selectedShow) => selectedShow.id !== show.id));
		} else {
			const filteredShows = selectedShows.filter(
				(selectedShow) => !activeStepShows.some((stepShow) => stepShow.id === selectedShow.id)
			);

			setSelectedShows([...filteredShows, show]);
		}
	};

	return (
		<Flex flexDirection={{ base: 'column', md: 'row' }} align="center" justify="space-between" gap="8">
			{activeStepShows.map((availableShow) => (
				<ShowCard
					border={selectedShows.some((selectedShow) => selectedShow.id === availableShow.id) ? '3px solid' : 'none'}
					borderColor="greenBase"
					onClick={() => toggleShowSelection(availableShow)}
					key={availableShow.id}
					show={availableShow}
				/>
			))}
		</Flex>
	);
};
