import {
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	useDisclosure,
} from '@chakra-ui/react';
import { IReview } from '../../../../typings/Review.type';
import { StyledButton } from '../../../core/StyledButton/StyledButton';
import { EditReviewContainer } from '../EditReviewContainer/EditReviewContainer';

interface IEditReviewModalProps {
	review: IReview;
}

export const EditReviewModal = ({ review }: IEditReviewModalProps) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<StyledButton onClick={onOpen}>Edit</StyledButton>
			<Modal isCentered isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent p="2" backgroundColor="purple.700">
					<ModalHeader color="white">Edit review</ModalHeader>
					<ModalCloseButton color="white" />
					<ModalBody>
						<EditReviewContainer review={review} onSuccess={onClose} />
					</ModalBody>
					<ModalFooter gap="4">
						<StyledButton type="submit" form="editReviewForm" variant="outline" loadingText="Editing">
							Submit
						</StyledButton>
						<StyledButton type="button" loadingText="Cancelling" onClick={onClose}>
							Cancel
						</StyledButton>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};
