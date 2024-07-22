import { extendTheme } from '@chakra-ui/react';
import '@fontsource/lato';

export default extendTheme({
	fonts: {
		heading: `'Lato', sans-serif`,
		body: `'Lato', sans-serif`,
	},
	styles: {
		global: {
			body: {
				bg: 'purple.900',
			},
		},
	},
});
