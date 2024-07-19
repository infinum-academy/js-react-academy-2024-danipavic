import { Card, CardBody, Flex, Heading, Icon, Image, Text, VStack } from '@chakra-ui/react';
import NextLink from 'next/link';
import { MdOutlineStarPurple500 } from 'react-icons/md';
import { IShow } from '../../../typings/Show.type';

export const ShowCard = (show: IShow) => {
	return (
		<Card as={NextLink} href={`/all-shows/${show.id}`} w="240px" h="340px" borderRadius="2xl" overflow="hidden">
			<Image
				src={show.image_url ?? 'https://fakeimg.pl/1920x1080/fcfcfc/322659?text=Missing+show+cover'}
				alt="Show image"
				width="100%"
				height="69%"
			/>
			<CardBody color="purple.700">
				<VStack align="flex-start" height="100%">
					<Heading size="md">{show.title}</Heading>
					<Flex align="center">
						<Icon as={MdOutlineStarPurple500} />
						<Text fontSize="sm">{show.average_rating ?? 0} / 5</Text>
					</Flex>
				</VStack>
			</CardBody>
		</Card>
	);
};
