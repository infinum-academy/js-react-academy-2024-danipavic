import { IReview } from '../typings/Review.type';

export interface ILocalStorageShowsReviews {
	reviews: {
		[key: string]: Array<IReview>;
	};
}
export interface ILocalStorageAuth {
	Client: string | null;
	Uid: string | null;
	'Access-token': string | null;
}

export const saveToLocalStorage = <T>(key: string, resource: T) => {
	localStorage.setItem(key, JSON.stringify(resource));
};

export const loadFromLocalStorage = <T>(key: string): T => {
	const resource = localStorage.getItem(key);

	if (!resource) {
		return { [key]: {} } as T;
	}

	return JSON.parse(resource);
};
