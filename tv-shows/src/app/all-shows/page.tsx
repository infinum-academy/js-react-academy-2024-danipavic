import { AllShowsContainer } from '../../components/features/shows/AllShowsContainer/AllShowsContainer';
import { AuthRedirect } from '../../components/shared/AuthRedirect/AuthRedirect';

export default function AllShowsPage() {
	return (
		<>
			<AuthRedirect />
			<AllShowsContainer />;
		</>
	);
}
