'use client';

import { Progress } from '@chakra-ui/react';
import { useContext } from 'react';
import { ShowPickerContext } from './ShowPickerContextProvider';

export const ShowPickerProgress = () => {
	const { activeStep, availableShows, isResultsStep } = useContext(ShowPickerContext);

	if (!availableShows) {
		return null;
	}

	return (
		!isResultsStep && (
			<Progress value={Math.min((activeStep / (Math.ceil(availableShows.length / 4) - 1)) * 100, 100)} />
		)
	);
};
