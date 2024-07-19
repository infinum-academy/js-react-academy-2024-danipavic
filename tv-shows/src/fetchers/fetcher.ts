import { AUTH_LOCAL_STORAGE_KEY } from '../constants';
import { ILocalStorageAuth, loadFromLocalStorage } from '../utils/localstorage-helpers';

export async function fetcher<T>(input: string | URL | globalThis.Request, init?: RequestInit): Promise<T> {
	const headers = new Headers(
		(loadFromLocalStorage<ILocalStorageAuth>(AUTH_LOCAL_STORAGE_KEY) ?? {}) as unknown as Headers
	);

	try {
		const response = await fetch(input, { ...init, headers });
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}

		return response.json();
	} catch (error) {
		throw new Error(`Response status: ${error}`);
	}
}
