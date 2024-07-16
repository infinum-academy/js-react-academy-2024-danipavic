import { Container, Flex } from '@chakra-ui/react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SidebarNavigation } from '../components/shared/SidebarNavigation/SidebarNavigation';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'TV Shows app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Providers>
					<Flex height="100vh">{children}</Flex>
				</Providers>
			</body>
		</html>
	);
}
