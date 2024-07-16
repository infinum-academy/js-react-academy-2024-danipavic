import { fetcher } from './fetcher';
import { mutator } from './mutators';
import { swrKeys } from './swrKeys';

export interface IUser {
	id: string;
	email: string;
	image_url: string;
}
export interface IUserResponse {
	user: IUser;
}

export function getUser() {
	return fetcher<IUserResponse>(swrKeys.user);
}

export function registerUser(url: string, { arg }: { arg: any }) {
	return mutator(url, { arg });
}

export function loginUser(url: string, { arg }: { arg: any }) {
	return mutator(url, { arg });
}
