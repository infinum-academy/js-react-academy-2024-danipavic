'use client';

import { Button, ButtonProps } from '@chakra-ui/react';

export const StyledButton = ({ children, variant = 'solid', ...rest }: ButtonProps) => {
	const solidVariant = {
		bg: 'white',
		color: 'black',
		border: '1px solid white',
		_hover: {
			bg: 'purple.700',
			border: '1px solid white',
			color: 'white',
		},
	};

	const outlineVariant = {
		bg: 'purple.700',
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
			borderRadius="3xl"
			mb="4"
			minWidth="98px"
			sx={variant === 'solid' ? solidVariant : outlineVariant}
			{...rest}
		>
			{children}
		</Button>
	);
};
