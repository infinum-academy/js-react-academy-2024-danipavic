import { defineStyleConfig } from '@chakra-ui/react';

export const Heading = defineStyleConfig({
	baseStyle: {
		color: 'white',
	},
	variants: {
		secondary: {
			color: 'purpleDark',
		},
	},
});
