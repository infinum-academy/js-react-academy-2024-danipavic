'use client';
import { Button, Flex } from '@chakra-ui/react';
import { act, useContext } from 'react';
import { ShowPickerContext } from './ShowPickerContextProvider';

interface IShowPickerActionsProps {
	onClose: () => void;
}

export const ShowPickerActions = ({ onClose }: IShowPickerActionsProps) => {
	const { activeStep, setActiveStep, setSelectedShows, availableShows, isResultsStep } = useContext(ShowPickerContext);

	const closeAndResetSteps = () => {
		setSelectedShows([]);
		setActiveStep(0);
		onClose();
	};

	return (
		<Flex justify="space-between" align="center">
			{isResultsStep ? (
				<Button variant="primary" onClick={closeAndResetSteps}>
					Close
				</Button>
			) : (
				<Flex justify="flex-end" align="center" gap="2">
					{activeStep !== 0 && (
						<Button variant="primary" onClick={() => setActiveStep(activeStep - 1)}>
							Previous
						</Button>
					)}
					<Button variant="secondary" onClick={() => setActiveStep(activeStep + 1)}>
						{availableShows && activeStep === Math.ceil(availableShows.length / 4) - 1 ? 'Results' : 'Next'}
					</Button>
				</Flex>
			)}
		</Flex>
	);
};
