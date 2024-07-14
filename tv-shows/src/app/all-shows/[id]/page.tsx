import ShowContainer from '../../../components/features/shows/ShowContainer/ShowContainer';
import { AuthRedirect } from '../../../components/shared/AuthRedirect/AuthRedirect';

export default function ShowDetailsPage() {
	return (
		<>
			<AuthRedirect />
			<ShowContainer />;
		</>
	);
}
