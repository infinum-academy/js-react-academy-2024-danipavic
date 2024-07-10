import { Flex, Spinner } from '@chakra-ui/react';

export function Loader() {
	return (
		<Flex align="center" justify="center" height="100%">
			<Spinner size="xl" color="white" />;
		</Flex>
	);
}
