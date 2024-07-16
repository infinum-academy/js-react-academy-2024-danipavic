import { IReview } from '../typings/Review.type';
import { fetcher } from './fetcher';
import { mutator } from './mutators';
import { swrKeys } from './swrKeys';

interface IReviewsResponse {
	reviews: Array<IReview>;
}

export function getManyReviews(showID: string) {
	return fetcher<IReviewsResponse>(swrKeys.showReviews(showID));
}

export function createReview(url: string, { arg }: { arg: any }) {
	return mutator(url, { arg });
}

export function updateReview(url: string, { arg }: { arg: any }) {
	return mutator(url, { arg }, 'PATCH');
}

export function deleteReview(url: string, { arg }: { arg: any }) {
	return mutator(url, { arg }, 'DELETE');
}
