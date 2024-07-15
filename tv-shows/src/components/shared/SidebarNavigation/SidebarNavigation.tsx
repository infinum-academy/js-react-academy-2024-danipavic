'use client';

import { Button, VStack } from '@chakra-ui/react';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { AUTH_LOCAL_STORAGE_KEY } from '../../../constants';
import { getUser } from '../../../fetchers/auth';
import { swrKeys } from '../../../fetchers/swrKeys';
import { ILocalStorageAuth, loadFromLocalStorage } from '../../../utils/localstorage-helpers';
import { Header } from '../Header/Header';

export const SidebarNavigation = () => {
	const pathname = usePathname();
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const { mutate, data } = useSWR(swrKeys.user, getUser);

	useEffect(() => {
		setIsLoggedIn(Boolean(loadFromLocalStorage<ILocalStorageAuth>(AUTH_LOCAL_STORAGE_KEY)));
	}, [data]);

	const onLogout = () => {
		mutate(null, { revalidate: false });
		setIsLoggedIn(false);
		localStorage.removeItem(AUTH_LOCAL_STORAGE_KEY);
	};

	return (
		isLoggedIn && (
			<VStack maxH="100vh" as="aside" p="6" align="flex-start">
				<VStack align="flex-start" mb="auto">
					<Header />
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
