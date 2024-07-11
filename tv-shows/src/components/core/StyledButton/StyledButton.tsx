'use client';

import { Button, ButtonProps } from '@chakra-ui/react';

export const StyledButton = ({ children, ...rest }: ButtonProps) => (
	<Button
		borderRadius="3xl"
		mb="4"
		variant="solid"
		sx={{
			bg: 'white',
			color: 'black',
			border: '1px solid white',
			_hover: {
				bg: 'purple.700',
				border: '1px solid white',
				color: 'white',
			},
		}}
		{...rest}
	>
		{children}
	</Button>
);
