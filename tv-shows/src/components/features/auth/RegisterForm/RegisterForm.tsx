'use client';

import {
	Alert,
	Button,
	chakra,
	FormControl,
	FormErrorMessage,
	FormHelperText,
	FormLabel,
	Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { MdAccountCircle, MdLock } from 'react-icons/md';
import useSWRMutation from 'swr/mutation';
import { registerUser } from '../../../../fetchers/auth';
import { swrKeys } from '../../../../fetchers/swrKeys';
import { IconInput } from '../../../core/IconInput/IconInput';
import { Loader } from '../../../shared/Loader/Loader';
import { AuthFormCard } from '../AuthFormCard/AuthFormCard';

export interface IRegisterFormInputs {
	email: string;
	password: string;
	password_confirmation: string;
}

export const RegisterForm = () => {
	const [registered, setRegistered] = useState(false);
	const [matchingPasswords, setMatchingPasswords] = useState(true);
	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<IRegisterFormInputs>();
	const { trigger, isMutating } = useSWRMutation(swrKeys.register, registerUser, {
		onSuccess: async (data) => {
			await data.json();
			setRegistered(true);
		},
	});
	const onRegister = (data: IRegisterFormInputs) => {
		if (data.password !== data.password_confirmation) {
			setMatchingPasswords(false);
			return;
		} else {
			setMatchingPasswords(true);
		}

		trigger(data);
	};

	if (isMutating) {
		return <Loader />;
	}

	if (registered) {
		return (
			<Alert
				status="success"
				flexDirection="column"
				gap="6"
				borderRadius="containerRadius"
				backgroundColor="purpleBase"
			>
				<Text color="white">Registration successful, proceed to the login.</Text>
				<Button href="/auth/login" variant="primary" as={NextLink}>
					Login
				</Button>
			</Alert>
		);
	} else {
		return (
			!registered && (
				<AuthFormCard>
					<chakra.form
						display="flex"
						flexDirection="column"
						alignItems="center"
						gap={4}
						onSubmit={handleSubmit(onRegister)}
					>
						<FormControl isRequired={true} isDisabled={isSubmitting}>
							<FormLabel>Email</FormLabel>
							<IconInput<IRegisterFormInputs>
								icon={MdAccountCircle}
								type="email"
								formControlName="email"
								register={register}
								placeholder="Email"
							/>
						</FormControl>
						<FormControl isRequired={true} isDisabled={isSubmitting}>
							<FormLabel>Password</FormLabel>
							<IconInput<IRegisterFormInputs>
								icon={MdLock}
								type="password"
								formControlName="password"
								register={register}
								placeholder="Password"
							/>
							<FormHelperText color="white">At least 8 characters</FormHelperText>
						</FormControl>
						<FormControl isRequired={true} isInvalid={!matchingPasswords} isDisabled={isSubmitting} mb="4">
							<FormLabel>Confirm password</FormLabel>
							<IconInput<IRegisterFormInputs>
								icon={MdLock}
								type="password"
								formControlName="password_confirmation"
								register={register}
								placeholder="Confirm password"
							/>
							<FormErrorMessage color="white">Password must match</FormErrorMessage>
						</FormControl>
						<Button
							type="submit"
							variant="primary"
							mb="2"
							isLoading={isSubmitting}
							disabled={isSubmitting}
							loadingText="Registering"
							paddingY="6"
							paddingX="8"
						>
							SIGN UP
						</Button>
						<Text>
							Already have an account?
							<Text as={NextLink} ml="2" href="/auth/login" fontWeight="bold">
								Login
							</Text>
						</Text>
					</chakra.form>
				</AuthFormCard>
			)
		);
	}
};
