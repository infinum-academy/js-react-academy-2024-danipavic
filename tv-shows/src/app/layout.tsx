import { Flex } from '@chakra-ui/react';
import type { Metadata } from 'next';
import { Providers } from './providers';

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
			<body>
				<Providers>
					<Flex flexDirection={{ base: 'column', lg: 'row' }} height="100vh">
						{children}
					</Flex>
				</Providers>
			</body>
		</html>
	);
}
