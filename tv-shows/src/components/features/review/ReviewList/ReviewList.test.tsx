import { render } from '@testing-library/react';
import { IReview } from '../../../../typings/Review.type';
import { ReviewItem } from '../ReviewItem/ReviewItem';
import { ReviewList } from './ReviewList';

jest.mock('../ReviewItem/ReviewItem', () => {
	return {
		ReviewItem: jest.fn().mockReturnValue(null),
	};
});

describe('ReviewList', () => {
	const mockReviews: Array<IReview> = [
		{
			rating: 1,
			comment: 'Test comment 1',
			id: '123',
			show_id: 123,
			user: { id: '123', email: 'test@email.test', image_url: '' },
		},
		{
			rating: 5,
			comment: 'Test comment 2',
			id: '456',
			show_id: 456,
			user: { id: '123', email: 'test@email.test', image_url: '' },
		},
	];

	it('should call ShowCard with correct props', () => {
		render(<ReviewList reviews={mockReviews} />);

		expect(ReviewItem).toHaveBeenCalledTimes(2);
		expect(ReviewItem).toHaveBeenNthCalledWith(1, { review: { ...mockReviews[0] } }, {});
		expect(ReviewItem).toHaveBeenNthCalledWith(2, { review: { ...mockReviews[1] } }, {});
	});
});
