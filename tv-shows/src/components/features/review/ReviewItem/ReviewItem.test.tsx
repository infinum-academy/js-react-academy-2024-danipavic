import { render, screen } from '@testing-library/react';
import { IReview } from '../../../../typings/Review.type';
import { ReviewItem } from './ReviewItem';

describe('ReviewItem', () => {
	const mockReview: IReview = {
		rating: 5,
		comment: 'Test comment',
		id: '123',
		show_id: 123,
		user: { id: '123', email: '', image_url: '' },
	};

	it('should render correct user email, comment, and button', () => {
		render(<ReviewItem review={mockReview} />);

		expect(screen.getByTestId('review-email').innerHTML).toBe(mockReview.user.email);
		expect(screen.getByTestId('review-comment').innerHTML).toBe(mockReview.comment);
		expect(screen.getByTestId('remove-review-button').innerHTML).toBe('Remove');
	});

	it('should render correct rating', () => {
		render(<ReviewItem review={mockReview} />);

		expect(screen.getAllByTestId('highlighted-star').length).toBe(mockReview.rating);
	});

	it('should call onRemove with correct data', () => {
		render(<ReviewItem review={mockReview} />);

		const removeButton = screen.getByTestId('remove-review-button');
		removeButton.click();
	});
});
