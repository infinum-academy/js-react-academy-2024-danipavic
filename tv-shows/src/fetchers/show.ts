import { fetcher } from '@/fetchers/fetcher';
import { IShow } from '../typings/Show.type';
import { swrKeys } from './swrKeys';

interface IShowsResponse {
	shows: Array<IShow>;
}

interface IShowResponse {
	show: IShow;
}

export function getManyShows() {
	return fetcher<IShowsResponse>(swrKeys.shows);
}

export function getOneShow(id: string) {
	return fetcher<IShowResponse>(`${swrKeys.shows}/${id}`);
}

export function getManyTopRatedShows() {
	return fetcher<IShowsResponse>(swrKeys.topRated);
}
