import { Flex, Heading, HeadingProps, Icon } from '@chakra-ui/react';
import { MdLiveTv } from 'react-icons/md';

export const Header = ({ ...rest }: HeadingProps) => {
	return (
		<Heading as="h1" mb="12" color="white" fontSize="2xl" w="max-content" marginBottom="0" p="4" {...rest}>
			<Flex align="center" justify="center" gap="4">
				<Icon as={MdLiveTv} />
				TV Shows app
			</Flex>
		</Heading>
	);
};
