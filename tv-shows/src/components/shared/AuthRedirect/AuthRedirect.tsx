'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import useSWR from 'swr';
import { fetcher } from '../../../fetchers/fetcher';
import { swrKeys } from '../../../fetchers/swrKeys';

interface IAuthRedirectProps {
	invert?: boolean;
}

export const AuthRedirect = ({ invert = false }: IAuthRedirectProps) => {
	const router = useRouter();
	const { data, isLoading } = useSWR(swrKeys.user, fetcher);

	useEffect(() => {
		if (isLoading) {
			return;
		}

		if (invert) {
			return data ? router.push('/all-shows') : undefined;
		}

		return !data ? router.push('/auth/login') : undefined;
	}, [data, isLoading, router, invert]);

	return null;
};
