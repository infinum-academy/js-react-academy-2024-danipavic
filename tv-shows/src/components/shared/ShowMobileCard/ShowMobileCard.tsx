import { Card, CardBody, CardProps, Heading, VStack } from '@chakra-ui/react';
import { IShow } from '../../../typings/Show.type';

interface IShowMobileCardProps extends CardProps {
	show: IShow;
}

export const ShowMobileCard = ({ show, ...rest }: IShowMobileCardProps) => {
	return (
		<Card flexGrow="1" minWidth="60vw" {...rest}>
			<CardBody color="purpleDark">
				<VStack align="flex-start" height="100%">
					<Heading variant="secondary" size="md">
						{show.title}
					</Heading>
				</VStack>
			</CardBody>
		</Card>
	);
};
