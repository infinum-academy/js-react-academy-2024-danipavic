import { Button, Flex } from '@chakra-ui/react';

export const ShowPickerActions = () => {
	return (
		<Flex justify="flex-end" align="center" gap="2">
			<Button variant="primary">Previous</Button>
			<Button variant="secondary">Next</Button>
		</Flex>
	);
};
