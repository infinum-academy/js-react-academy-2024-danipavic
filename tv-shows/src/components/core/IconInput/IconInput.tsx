'use client';

import { forwardRef, Icon, Input, InputGroup, InputLeftAddon, InputProps, InputRightElement } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { IconType } from 'react-icons';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';

interface IIconInputProps extends InputProps {
	icon: IconType;
}

export const IconInput = forwardRef(function ({ icon, type, ...rest }: IIconInputProps, ref) {
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
				{...rest}
				ref={ref}
				required
				type={inputType}
				borderRadius="inputRadius"
				borderLeft="none"
				backgroundColor="transparent"
			/>
			{type === 'password' && (
				<InputRightElement onClick={handleTogglePassword}>
					<Icon color="white" as={showPassword ? FaEyeSlash : FaEye} />
				</InputRightElement>
			)}
		</InputGroup>
	);
});
