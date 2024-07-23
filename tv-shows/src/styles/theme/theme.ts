import { extendTheme } from '@chakra-ui/react';
import '@fontsource/lato';
import { Heading } from './components/heading';
import { colors } from './foundations/colors';
import { fonts } from './foundations/fonts';
import { Spinner } from './components/spinner';
import { radii } from './foundations/radii';

export default extendTheme({
	styles: {
		global: {
			body: {
				bg: 'purpleDarkest',
			},
		},
	},
	fonts,
	colors,
	radii,
	components: {
		Heading,
		Spinner,
	},
});
