import { defineStyleConfig } from '@chakra-ui/react';

export const Button = defineStyleConfig({
	baseStyle: {
		border: '1px solid white',
		borderRadius: 'buttonRadius',
		mb: '4',
		_hover: {
			border: '1px solid white',
		},
	},
	variants: {
		primary: {
			backgroundColor: 'white',
			color: 'black',
			_hover: {
				backgroundColor: 'purpleDark',
				color: 'white',
			},
		},
		secondary: {
			backgroundColor: 'purpleDark',
			color: 'white',
			_hover: {
				backgroundColor: 'white',
				border: '1px solid white',
				color: 'black',
			},
		},
		link: {
			backgroundColor: 'transparent',
			color: 'white',
			border: 'none',
			_hover: {
				backgroundColor: 'transparent',
				border: 'none',
			},
		},
	},
});
