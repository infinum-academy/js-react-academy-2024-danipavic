import { extendTheme } from '@chakra-ui/react';
import '@fontsource/lato';
import { colors } from './foundations/colors';
import { fonts } from './foundations/fonts';

export default extendTheme({
	fonts,
	styles: {
		global: {
			body: {
				bg: 'purpleDarkest',
			},
		},
	},
	colors,
});
