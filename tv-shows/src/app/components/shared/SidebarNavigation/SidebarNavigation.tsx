'use client';

import { Button, Container, VStack } from '@chakra-ui/react';
import NextLink from 'next/link';
import { Header } from '../Header/Header';

export const SidebarNavigation = () => {
	return (
		<VStack maxH="100vh" as="aside" p="6" align="flex-start">
			<VStack align="flex-start" mb="auto">
				<Header />
				<Button as={NextLink} href={'/'} fontSize="2xl" mb="4" fontWeight="light" color="white" variant="link">
					All shows
				</Button>
				<Button as={NextLink} href={'/'} fontSize="2xl" mb="4" fontWeight="light" color="white" variant="link">
					Top rated
				</Button>
				<Button as={NextLink} href={'/'} fontSize="2xl" mb="4" fontWeight="light" color="white" variant="link">
					My profile
				</Button>
			</VStack>
			<Button variant="link" fontWeight="light" color="white">
				Logout
			</Button>
		</VStack>
	);
};
