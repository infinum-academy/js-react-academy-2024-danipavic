import { createContext, useState } from 'react';
import useSWR from 'swr';
import { getManyShows } from '../../../../../fetchers/show';
import { swrKeys } from '../../../../../fetchers/swrKeys';
import { IShow } from '../../../../../typings/Show.type';

interface IShowPickerContext {
	activeStep: number;
	setActiveStep: (newActiveStep: number) => void;
	selectedShows: Array<IShow>;
	setSelectedShows: (newSelectedShows: Array<IShow>) => void;
	isLastStep: boolean;
	availableShows?: Array<IShow>;
}
export const ShowPickerContext = createContext<IShowPickerContext>({} as IShowPickerContext);

export const ShowPickerContextProvider = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	const { data } = useSWR(swrKeys.shows, getManyShows);
	const [activeStep, setActiveStep] = useState(0);
	const [selectedShows, setSelectedShows] = useState<Array<IShow>>([]);

	return (
		<ShowPickerContext.Provider
			value={{
				activeStep,
				setActiveStep,
				isLastStep: Boolean(data?.shows && activeStep >= data.shows.length / 4),
				availableShows: data?.shows,
				selectedShows,
				setSelectedShows,
			}}
		>
			{children}
		</ShowPickerContext.Provider>
	);
};
