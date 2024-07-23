import { extendTheme } from '@chakra-ui/react';
import '@fontsource/lato';
import { Button } from './components/button';
import { Card } from './components/card';
import { Heading } from './components/heading';
import { Spinner } from './components/spinner';
import { colors } from './foundations/colors';
import { fonts } from './foundations/fonts';
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
		Card,
		Button,
	},
});
