import useSWR from 'swr';
import { getManyTopRatedShows } from '../../../../fetchers/show';
import { Loader } from '../../../shared/Loader/Loader';
import { ShowsList } from '../ShowsList/ShowsList';

export function TopRatedShowsContainer() {
	const { data, error, isLoading } = useSWR('/api/shows/top-rated', getManyTopRatedShows);

	if (error) {
		return <p>Something went wrong, please retry.</p>;
	}

	if (isLoading || !data) {
		return <Loader />;
	}

	if (data) {
		return <ShowsList shows={data.shows} />;
	}
}
