'use client';

import { Alert, Button, chakra, FormControl, FormLabel, Text, VStack } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useForm } from 'react-hook-form';
import { MdAccountCircle, MdLock } from 'react-icons/md';
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';
import { fetcher } from '../../../../fetchers/fetcher';
import { mutator } from '../../../../fetchers/mutators';
import { swrKeys } from '../../../../fetchers/swrKeys';
import { IconInput } from '../../../core/IconInput/IconInput';
import { Loader } from '../../../shared/Loader/Loader';
import { AuthFormCard } from '../AuthFormCard/AuthFormCard';

interface ILoginFormInputs {
	email: string;
	password: string;
}

export const LoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<ILoginFormInputs>();
	const { mutate } = useSWR(swrKeys.user, fetcher);
	const { trigger, isMutating, error } = useSWRMutation(swrKeys.login, mutator, {
		onSuccess: (data) => {
			mutate(data, { revalidate: false });
		},
	});
	const onLogin = (data: ILoginFormInputs) => {
		trigger(data);
	};

	if (isMutating && !error) {
		return <Loader />;
	}

	return (
		<VStack>
			<AuthFormCard>
				<chakra.form display="flex" flexDirection="column" alignItems="center" gap={4} onSubmit={handleSubmit(onLogin)}>
					<FormControl isRequired={true} isDisabled={isSubmitting}>
						<FormLabel>Email</FormLabel>
						<IconInput<ILoginFormInputs>
							icon={MdAccountCircle}
							type="email"
							formControlName="email"
							register={register}
							placeholder="Email"
						/>
					</FormControl>
					<FormControl isRequired={true} isDisabled={isSubmitting}>
						<FormLabel>Password</FormLabel>
						<IconInput<ILoginFormInputs>
							icon={MdLock}
							type="password"
							formControlName="password"
							register={register}
							placeholder="Password"
						/>
					</FormControl>
					<Button
						isLoading={isSubmitting}
						disabled={isSubmitting}
						loadingText="Logging in"
						type="submit"
						mb="2"
						borderRadius="3xl"
						color="purple.700"
						paddingY="6"
						paddingX="8"
					>
						LOG IN
					</Button>
					<Text>
						Don't have an account?
						<Text as={NextLink} ml="2" href="/auth/register" fontWeight="bold">
							Register
						</Text>
					</Text>
				</chakra.form>
			</AuthFormCard>
			{error && (
				<Alert status="error" borderRadius="2xl">
					Something went wrong, please try again.
				</Alert>
			)}
		</VStack>
	);
};
