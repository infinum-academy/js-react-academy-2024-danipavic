/**
 * check if show title is rendered
 * check if correct average rating is rendered
 */

import { render, screen, waitFor } from '@testing-library/react';
import { ClassAttributes, ImgHTMLAttributes } from 'react';
import { IShow } from '../../../typings/Show.type';
import { ShowCard } from './ShowCard';

describe('TodoItem', () => {
	const mockShow: IShow = {
		id: '1',
		title: 'Test Show',
		description: 'Test Description',
		no_of_reviews: 10,
		image_url: 'https://example.com/image.jpg',
		average_rating: 4.5,
	};

	it('should render the image with correct URL', async () => {
		render(<ShowCard {...mockShow} />);

		expect(screen.getByRole('img')).toBeInTheDocument();
		expect(screen.getByRole('img').getAttribute('src')).toBeTruthy();
	});

	it('should render the title', () => {
		render(<ShowCard {...mockShow} />);

		expect(screen.getByRole('heading', { level: 2 }).innerHTML).toBe('Test Show');
	});

	it('should render the average rating', () => {
		render(<ShowCard {...mockShow} />);

		expect(screen.getByRole('paragraph').innerHTML).toBe(`${mockShow.average_rating} / 5`);
	});
});
