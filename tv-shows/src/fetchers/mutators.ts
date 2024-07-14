import { AUTH_LOCAL_STORAGE_KEY } from '../constants';
import { ILocalStorageAuth, saveToLocalStorage } from '../utils/localstorage-helpers';

export async function mutator(url: string, { arg }: { arg: any }) {
	const response = await fetch(url, {
		method: 'POST',
		body: JSON.stringify(arg),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	const data = await response.json();

	saveToLocalStorage<ILocalStorageAuth>(AUTH_LOCAL_STORAGE_KEY, {
		Uid: response.headers.get('uid'),
		Client: response.headers.get('client'),
		'Access-token': response.headers.get('access-token'),
	});

	if (!response.ok) {
		throw new Error(`Error mutating data on ${url}`);
	}

	return data;
}
