import { IReview } from './Review.type';

export interface IShow {
	title: string;
	description: string;
	id: string;
	imageUrl?: string;
}

export interface IShowWithReviews {
	show: IShow;
	reviews: Array<IReview>;
}
