import { cardAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(cardAnatomy.keys);

const baseStyle = definePartsStyle({
	container: {
		borderRadius: 'containerRadius',
		overflow: 'hidden',
	},
});

export const Card = defineMultiStyleConfig({
	baseStyle,
});
