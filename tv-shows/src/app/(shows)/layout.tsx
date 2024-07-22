import { Container } from '@chakra-ui/react';
import { AuthRedirect } from '../../components/shared/AuthRedirect/AuthRedirect';
import { SidebarNavigation } from '../../components/shared/SidebarNavigation/SidebarNavigation';
import { Toolbar } from '../../components/shared/Toolbar/Toolbar';

export default function ShowsLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<AuthRedirect />
			<Toolbar display={{ lg: 'none' }} />
			<SidebarNavigation display={{ base: 'none', lg: 'flex' }} />
			<Container as="main" maxW="100%" mx="auto" p="6" overflowY="scroll">
				{children}
			</Container>
		</>
	);
}
