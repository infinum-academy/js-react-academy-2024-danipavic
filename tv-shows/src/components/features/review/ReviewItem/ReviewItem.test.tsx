/**
 * check if onDelete callback has been called only once with the necessary data
 */

import { render, screen } from '@testing-library/react';
import { IReview } from '../../../../typings/Review.type';
import { ReviewItem } from './ReviewItem';

describe('ReviewItem', () => {
	const mockReview: IReview = {
		rating: 5,
		comment: 'Test comment',
		reviewerEmail: 'test@email.com',
		uuid: '123',
		reviewerAvatarURL: 'testAvatarURL',
	};
	const mockOnRemoveReview = jest.fn();

	it('should render correct user email, comment, and button', () => {
		render(<ReviewItem onRemoveReview={mockOnRemoveReview} {...mockReview} />);

		expect(screen.getByTestId('review-email').innerHTML).toBe(mockReview.reviewerEmail);
		expect(screen.getByTestId('review-comment').innerHTML).toBe(mockReview.comment);
		expect(screen.getByRole('button').innerHTML).toBe('Remove');
	});

	it('should render correct rating', () => {
		render(<ReviewItem onRemoveReview={mockOnRemoveReview} {...mockReview} />);

		expect(screen.getAllByTestId('highlighted-star').length).toBe(mockReview.rating);
	});

	it('should call onRemove with correct data', () => {
		render(<ReviewItem onRemoveReview={mockOnRemoveReview} {...mockReview} />);

		const removeButton = screen.getByRole('button');
		removeButton.click();

		expect(mockOnRemoveReview).toHaveBeenCalledTimes(1);
		expect(mockOnRemoveReview).toHaveBeenCalledWith(mockReview);
	});
});
