import { fetcher } from '@/fetchers/fetcher';
import { IShow } from '../typings/Show.type';

interface IShowsResponse {
	shows: Array<IShow>;
}

interface IShowResponse {
	show: IShow;
}

export function getManyShows(url: string) {
	return fetcher<IShowsResponse>(url);
}

export function getOneShow(url: string) {
	return fetcher<IShowResponse>(url);
}

export function getManyTopRatedShows(url: string) {
	return fetcher<IShowsResponse>(url);
}
