import { TopRatedShowsContainer } from '../../components/features/shows/TopRatedShowsContainer.tsx/TopRatedShowsContainer';
import { AuthRedirect } from '../../components/shared/AuthRedirect/AuthRedirect';

export default function TopRatedShowsPage() {
	return (
		<>
			<AuthRedirect />;
			<TopRatedShowsContainer />;
		</>
	);
}
