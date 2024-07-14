import { LoginForm } from '../../../components/features/auth/LoginForm/LoginForm';
import { AuthRedirect } from '../../../components/shared/AuthRedirect/AuthRedirect';

export default function Login() {
	return (
		<>
			<AuthRedirect invert={true} />
			<LoginForm />
		</>
	);
}
