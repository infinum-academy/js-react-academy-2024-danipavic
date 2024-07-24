'use client';

import { useContext } from 'react';
import { ErrorMessage } from '../../../../shared/ErrorMessage/ErrorMessage';
import { ShowPickerContext } from './ShowPickerContextProvider';
import { ShowPickerResultStep } from './ShowPickerResultStep';
import { ShowPickerStep } from './ShowPickerStep';

export const ShowPickerStepper = () => {
	const { activeStep, availableShows } = useContext(ShowPickerContext);

	if (!availableShows) {
		return <ErrorMessage />;
	}

	if (availableShows) {
		return activeStep < availableShows.length ? <ShowPickerStep /> : <ShowPickerResultStep />;
	}
};
