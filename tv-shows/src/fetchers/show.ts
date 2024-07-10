import { fetcher } from '@/fetchers/fetcher';
import { IShow } from '../typings/Show.type';

interface IShowsResponse {
	todoLists: Array<IShow>;
}

export function getShows() {
	return fetcher<IShowsResponse>('/api/todo-lists');
}

export function getTodoList(id: string) {
	return fetcher<IShow>(`/api/todo-lists/${id}`);
}
