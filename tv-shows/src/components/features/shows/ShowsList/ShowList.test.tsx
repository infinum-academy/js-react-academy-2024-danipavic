import { render } from '@testing-library/react';
import { IShow } from '../../../../typings/Show.type';
import { ShowCard } from '../../../shared/ShowCard/ShowCard';
import { ShowsList } from './ShowsList';

jest.mock('../../../shared/ShowCard/ShowCard', () => {
	return {
		ShowCard: jest.fn().mockReturnValue(null),
	};
});

describe('ShowList', () => {
	const mockShows: Array<IShow> = [
		{
			id: '1',
			title: 'Test Show 1',
			description: 'Test Description 1',
			no_of_reviews: 10,
			image_url: 'https://example.com/image.jpg',
			average_rating: 4.5,
		},
		{
			id: '2',
			title: 'Test Show 2',
			description: 'Test Description 2',
			no_of_reviews: 10,
			image_url: 'https://example.com/image.jpg',
			average_rating: 4.5,
		},
	];

	it('should call ShowCard with correct props', () => {
		render(<ShowsList shows={mockShows} />);

		expect(ShowCard).toHaveBeenCalledTimes(2);
		expect(ShowCard).toHaveBeenNthCalledWith(1, { ...mockShows[0] }, {});
		expect(ShowCard).toHaveBeenNthCalledWith(2, { ...mockShows[1] }, {});
	});
});
