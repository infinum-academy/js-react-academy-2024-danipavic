'use client';

import { Button, StackProps, VStack } from '@chakra-ui/react';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { AUTH_LOCAL_STORAGE_KEY } from '../../../constants';
import { getUser } from '../../../fetchers/auth';
import { swrKeys } from '../../../fetchers/swrKeys';
import { Header } from '../Header/Header';

export const SidebarNavigation = ({ ...rest }: StackProps) => {
	const pathname = usePathname();
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const { mutate, data } = useSWR(swrKeys.user, getUser, { refreshInterval: 5000 });

	useEffect(() => {
		setIsLoggedIn(Boolean(data));
	}, [data]);

	const onLogout = () => {
		localStorage.removeItem(AUTH_LOCAL_STORAGE_KEY);
		mutate(undefined);
	};

	return (
		isLoggedIn && (
			<VStack maxH="100vh" flexGrow="1" as="aside" p="6" align="flex-start" {...rest}>
				<VStack align="flex-start" mb="auto">
					<Header display={{ base: 'none', lg: 'block' }} />
					<Button
						as={NextLink}
						href={'/all-shows'}
						textDecoration={pathname === '/all-shows' ? 'underline' : ''}
						fontSize="2xl"
						mb="4"
						fontWeight="light"
						color="white"
						variant="link"
					>
						All shows
					</Button>
					<Button
						as={NextLink}
						href={'/top-rated'}
						textDecoration={pathname === '/top-rated' ? 'underline' : ''}
						fontSize="2xl"
						mb="4"
						fontWeight="light"
						color="white"
						variant="link"
					>
						Top rated
					</Button>
					<Button as={NextLink} href={'/'} fontSize="2xl" mb="4" fontWeight="light" color="white" variant="link">
						My profile
					</Button>
				</VStack>
				<Button variant="link" fontWeight="light" color="white" onClick={onLogout}>
					Logout
				</Button>
			</VStack>
		)
	);
};
