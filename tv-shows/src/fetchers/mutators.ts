import { AUTH_LOCAL_STORAGE_KEY } from '../constants';
import { ILocalStorageAuth, loadFromLocalStorage } from '../utils/localstorage-helpers';

export async function mutator(url: string, { arg }: { arg: any }, method = 'POST') {
	const headers = new Headers(loadFromLocalStorage<ILocalStorageAuth>(AUTH_LOCAL_STORAGE_KEY) as unknown as Headers);

	headers.set('Content-Type', 'application/json');

	const response = await fetch(url, {
		method,
		body: JSON.stringify(arg),
		headers,
	});

	if (!response.ok) {
		throw new Error(`Error mutating data on ${url}`);
	}

	return response;
}
