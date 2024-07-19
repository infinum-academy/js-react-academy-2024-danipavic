import { Container } from '@chakra-ui/react';
import { AuthRedirect } from '../../components/shared/AuthRedirect/AuthRedirect';
import { SidebarNavigation } from '../../components/shared/SidebarNavigation/SidebarNavigation';

export default function ShowsLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<AuthRedirect />
			<SidebarNavigation />
			<Container as="main" maxW="100%" mx="auto" p="6" overflowY="scroll">
				{children}
			</Container>
		</>
	);
}
