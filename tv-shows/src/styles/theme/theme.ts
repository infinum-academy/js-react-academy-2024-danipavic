import { extendTheme } from '@chakra-ui/react';
import '@fontsource/lato';
import { Heading } from './components/heading';
import { colors } from './foundations/colors';
import { fonts } from './foundations/fonts';
import { Spinner } from './components/spinner';

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
	components: {
		Heading,
		Spinner,
	},
});
