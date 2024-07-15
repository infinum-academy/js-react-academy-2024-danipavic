const apiUrl = 'https://tv-shows.infinum.academy';

export const swrKeys = {
	register: `${apiUrl}/users`,
	login: `${apiUrl}/users/sign_in`,
	user: `${apiUrl}/users/me`,
	shows: `${apiUrl}/shows`,
	show: (id: string) => `${apiUrl}/shows/${id}`,
	topRated: `${apiUrl}/shows/top_rated`,
};
