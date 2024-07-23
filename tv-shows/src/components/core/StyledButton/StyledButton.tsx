'use client';

import { Button, ButtonProps } from '@chakra-ui/react';

export const StyledButton = ({ children, variant = 'solid', ...rest }: ButtonProps) => {
	const solidVariant = {
		bg: 'white',
		color: 'black',
		border: '1px solid white',
		_hover: {
			bg: 'purpleDark',
			border: '1px solid white',
			color: 'white',
		},
	};

	const outlineVariant = {
		bg: 'purpleDark',
		color: 'white',
		border: '1px solid white',
		_hover: {
			bg: 'white',
			border: '1px solid white',
			color: 'black',
		},
	};

	return (
		<Button
			borderRadius="buttonRadius"
			mb="4"
			minWidth="98px"
			sx={variant === 'solid' ? solidVariant : outlineVariant}
			{...rest}
		>
			{children}
		</Button>
	);
};
