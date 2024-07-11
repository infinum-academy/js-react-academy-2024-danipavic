import { render, screen } from '@testing-library/react';
import { IShow } from '../../../../typings/Show.type';
import { ShowsList } from './ShowsList';

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

	it('should render all shows', () => {
		render(<ShowsList shows={mockShows} />);

		const showTitles = screen.getAllByRole('heading', { level: 2 });

		expect(showTitles.length).toBe(2);
		showTitles.forEach((heading, index) => {
			expect(heading.innerHTML).toBe(mockShows[index].title);
		});
	});
});
