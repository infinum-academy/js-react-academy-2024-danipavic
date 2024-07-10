'use client';

import { Wrap, WrapItem } from '@chakra-ui/react';
import { IShow } from '../../../../typings/Show.type';
import { ShowCard } from '../../../shared/ShowCard/ShowCard';

interface IShowCardProps {
	shows: Array<IShow>;
}

export const ShowsList = ({ shows }: IShowCardProps) => {
	return (
		<Wrap justify="center" spacing="6">
			{shows.map((show) => (
				<WrapItem key={show.id}>
					<ShowCard {...show} />
				</WrapItem>
			))}
		</Wrap>
	);
};
