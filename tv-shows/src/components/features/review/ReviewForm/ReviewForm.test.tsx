import { render, screen } from '@testing-library/react';
import { ReviewForm } from './ReviewForm';

describe('ReviewForm', () => {
	it('should render all form elements', () => {
		const mockOnAddReview = jest.fn();

		render(<ReviewForm onAddReview={mockOnAddReview} />);

		expect(screen.getByRole('textbox')).toBeInTheDocument();
		expect(screen.getByTestId('stars-rating')).toBeInTheDocument();
		expect(screen.getByRole('button').getAttribute('type')).toBe('submit');
	});
});
