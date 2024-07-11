import { IReview } from './Review.type';

export interface IShow {
	title: string;
	description: string;
	id: string;
	no_of_reviews: number;
	average_rating: number;
	image_url?: string;
}
