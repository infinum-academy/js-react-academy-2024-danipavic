'use client';

import { IShowWithReviews } from '../../../../typings/Show.type';
import { ShowsList } from '../ShowsList/ShowsList';

const mockShows: Array<IShowWithReviews> = [
	{
		show: {
			title: 'Dexter',
			description:
				'Dexter is a crime drama mystery television series that aired on Showtime from October 1, 2006, to September 22, 2013. Set in Miami, the series centers on Dexter Morgan (Michael C. Hall), a forensic technician specializing in bloodstain pattern analysis for the fictional Miami Metro Police Department, who leads a secret parallel life as a vigilante serial killer, hunting',
			imageUrl: '/assets/show-hero.jpg',
			id: '1',
		},
		reviews: [
			{ uuid: '1', rating: 5, comment: 'Great show!', reviewerAvatarURL: '', reviewerEmail: '' },
			{ uuid: '1', rating: 1, comment: 'Great show!', reviewerAvatarURL: '', reviewerEmail: '' },
		],
	},
];

export function AllShowsContainer() {
	return <ShowsList shows={mockShows} />;
}
