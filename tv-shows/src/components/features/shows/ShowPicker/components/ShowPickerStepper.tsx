'use client';

import { ShowPickerResultStep } from './ShowPickerResultStep';

export const ShowPickerStepper = () => {
	return true ? <ShowPickerStepper /> : <ShowPickerResultStep />;
};
