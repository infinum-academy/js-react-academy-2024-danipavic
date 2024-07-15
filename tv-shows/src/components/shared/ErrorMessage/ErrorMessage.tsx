import { Flex, Text } from '@chakra-ui/react';

export function ErrorMessage() {
	return (
		<Flex align="center" justify="center" h="100%">
			<Text color="white">Something went wrong, please retry.</Text>
		</Flex>
	);
}
