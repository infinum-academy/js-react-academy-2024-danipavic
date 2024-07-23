import {
	Button,
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
import { EditReviewContainer } from '../EditReviewContainer/EditReviewContainer';

interface IEditReviewModalProps {
	review: IReview;
}

export const EditReviewModal = ({ review }: IEditReviewModalProps) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Button variant="primary" onClick={onOpen}>
				Edit
			</Button>
			<Modal isCentered isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent p="2" backgroundColor="purpleDark">
					<ModalHeader color="white">Edit review</ModalHeader>
					<ModalCloseButton color="white" />
					<ModalBody>
						<EditReviewContainer review={review} onSuccess={onClose} />
					</ModalBody>
					<ModalFooter gap="4">
						<Button type="submit" form="editReviewForm" variant="secondary" loadingText="Editing">
							Submit
						</Button>
						<Button type="button" variant="primary" loadingText="Cancelling" onClick={onClose}>
							Cancel
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};
