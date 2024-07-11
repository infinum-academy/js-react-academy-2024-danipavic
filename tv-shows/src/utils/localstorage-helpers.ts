import { REVIEWS_LOCAL_STORAGE_KEY } from '../constants';
import { IReview } from '../typings/Review.type';

interface ILocalStorageShowsReviews {
	reviews: {
		[key: string]: Array<IReview>;
	};
}

export const saveToLocalStorage = (reviews: ILocalStorageShowsReviews) => {
	localStorage.setItem(REVIEWS_LOCAL_STORAGE_KEY, JSON.stringify(reviews));
};

export const loadFromLocalStorage = (): ILocalStorageShowsReviews => {
	const reviews = localStorage.getItem(REVIEWS_LOCAL_STORAGE_KEY);

	if (!reviews) {
		return { reviews: {} };
	}

	return JSON.parse(reviews);
};
