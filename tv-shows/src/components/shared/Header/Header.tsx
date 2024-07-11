import { Flex, Heading, Icon } from '@chakra-ui/react';
import { MdLiveTv } from 'react-icons/md';

export const Header = () => {
	return (
		<Heading as="h1" mb="12" color="white" fontSize="2xl" w="max-content">
			<Flex align="center" justify="center" gap="4">
				<Icon as={MdLiveTv} />
				TV Shows app
			</Flex>
		</Heading>
	);
};
