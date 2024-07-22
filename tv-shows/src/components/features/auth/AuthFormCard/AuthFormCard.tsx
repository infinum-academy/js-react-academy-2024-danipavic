'use client';

import { Flex } from '@chakra-ui/react';
import { Header } from '../../../shared/Header/Header';

export const AuthFormCard = ({ children }: { children: React.ReactNode }) => {
	return (
		<Flex
			align="center"
			justify="center"
			color="white"
			backgroundColor="purpleDarker"
			borderRadius="2xl"
			padding="14"
			width="fit-content"
		>
			<Flex direction="column" alignItems="center">
				<Header />
				{children}
			</Flex>
		</Flex>
	);
};
