import { Flex } from '@chakra-ui/react';

export default function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<Flex align="center" justify="center" h="100%">
			{children}
		</Flex>
	);
}
