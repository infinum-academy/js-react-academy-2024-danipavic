'use client';

import { Icon, Input, InputGroup, InputLeftAddon, InputRightElement } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import { IconType } from 'react-icons';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';

interface IIconInputProps<T extends FieldValues> {
	icon: IconType;
	placeholder: string;
	type: string;
	formControlName: Path<T>;
	register: UseFormRegister<T>;
}

export function IconInput<T extends FieldValues>({
	icon,
	placeholder,
	type,
	formControlName,
	register,
}: IIconInputProps<T>) {
	const [showPassword, setShowPassword] = useState(type !== 'password');
	const [inputType, setInputType] = useState(type);

	useEffect(() => {
		setInputType(showPassword ? 'text' : 'password');
	}, [showPassword]);

	const handleTogglePassword = () => {
		setShowPassword((showPassword) => !showPassword);
	};

	return (
		<InputGroup size="lg">
			<InputLeftAddon
				backgroundColor="transparent"
				borderEndStartRadius="inputRadius"
				borderStartStartRadius="inputRadius"
			>
				<Icon as={icon} />
			</InputLeftAddon>
			<Input
				{...register(formControlName)}
				required
				type={inputType}
				borderRadius="inputRadius"
				borderLeft="none"
				placeholder={placeholder}
				backgroundColor="transparent"
				borderEndStartRadius="inputRadius"
				borderStartStartRadius="inputRadius"
			/>
			{type === 'password' && (
				<InputRightElement onClick={handleTogglePassword}>
					<Icon color="white" as={showPassword ? FaEyeSlash : FaEye} />
				</InputRightElement>
			)}
		</InputGroup>
	);
}
