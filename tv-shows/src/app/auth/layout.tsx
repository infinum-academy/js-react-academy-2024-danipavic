import { Flex } from '@chakra-ui/react';
import { AuthRedirect } from '../../components/shared/AuthRedirect/AuthRedirect';

export default function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<AuthRedirect invert={true} />
			<Flex as="main" flexGrow="1" align="center" justify="center" h="100%">
				{children}
			</Flex>
		</>
	);
}
