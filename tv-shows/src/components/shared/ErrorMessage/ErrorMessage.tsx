import { Flex, Text } from '@chakra-ui/react';

export function ErrorMessage() {
	return (
		<Flex align="center" justify="center" h="100%">
			<Text>Something went wrong, please retry.</Text>
		</Flex>
	);
}
