import { fetcher } from './fetcher';
import { swrKeys } from './swrKeys';

export function getUser() {
	return fetcher(swrKeys.user);
}
