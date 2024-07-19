import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react';
import { IReview } from '../../../../typings/Review.type';
import { IShow } from '../../../../typings/Show.type';

interface IShowProps {
	show: IShow;
	reviews?: Array<IReview>;
}

export const ShowDetails = ({ show, reviews }: IShowProps) => {
	return (
		<Card borderRadius="2xl" h="340px" overflow="hidden" mb={4}>
			<Image
				src={show.image_url ?? 'https://fakeimg.pl/1920x1080/fcfcfc/322659?text=Missing+show+cover'}
				width="100%"
				maxHeight="50%"
				objectFit="cover"
				alt="Show image"
			/>
			<CardBody color="purple.700">
				<Heading size="md">{show.title}</Heading>
				<Text pt="2" fontSize="sm">
					{show.description}
				</Text>
				<Text pt="2" fontSize="sm">
					{reviews?.length
						? `${Math.round(reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length)} / 5`
						: 'No reviews yet'}
				</Text>
			</CardBody>
		</Card>
	);
};
