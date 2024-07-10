'use client';

import { IShowWithReviews } from '../../../../typings/Show.type';
import { ShowCard } from '../../../shared/ShowCard/ShowCard';

interface IShowCardProps {
	shows: Array<IShowWithReviews>;
}

export const ShowsList = ({ shows }: IShowCardProps) => {
	return (
		<>
			{shows.map(({ show, reviews }) => (
				<ShowCard key={show.id} show={show} reviews={reviews} />
			))}
		</>
	);
};
