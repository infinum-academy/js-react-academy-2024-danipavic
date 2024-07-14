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

	debugger;

	if (response.ok) {
		const uid = response.headers.get('uid');
		const client = response.headers.get('client');
		const access_token = response.headers.get('access-token');

		if (uid || client || access_token) {
			saveToLocalStorage<ILocalStorageAuth>(AUTH_LOCAL_STORAGE_KEY, {
				Uid: response.headers.get('uid'),
				Client: response.headers.get('client'),
				'Access-token': response.headers.get('access-token'),
			});
		}
	} else {
		throw new Error(`Error mutating data on ${url}`);
	}

	return data;
}
