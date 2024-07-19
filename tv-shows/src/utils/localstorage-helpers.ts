export interface ILocalStorageAuth {
	Client: string | null;
	Uid: string | null;
	'Access-token': string | null;
}

export const saveToLocalStorage = <T>(key: string, resource: T) => {
	localStorage.setItem(key, JSON.stringify(resource));
};

export const loadFromLocalStorage = <T>(key: string): T | null => {
	const resource = localStorage.getItem(key);

	if (!resource) {
		return null;
	}

	return JSON.parse(resource);
};
