import { fetcher } from './fetcher';
import { mutator } from './mutators';
import { swrKeys } from './swrKeys';

export function getUser() {
	return fetcher(swrKeys.user);
}

export function registerUser() {
	return mutator;
}

export function loginUser() {
	return mutator;
}
