import { fetcher } from '@/fetchers/fetcher';
import { IShow } from '../typings/Show.type';

interface IShowsResponse {
	shows: Array<IShow>;
}

export function getManyShows() {
	return fetcher<IShowsResponse>('/api/shows');
}

export function getOneShow(id: string) {
	return fetcher<IShow>(`/api/shows/${id}`);
}

export function getManyTopRatedShows() {
	return fetcher<IShow>('/api/shows/top-rated');
}
