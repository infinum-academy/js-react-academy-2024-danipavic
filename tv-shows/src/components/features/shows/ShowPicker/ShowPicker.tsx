'use client';
import {
	Button,
	Flex,
	Heading,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	useDisclosure,
} from '@chakra-ui/react';
import { ShowPickerActions } from './components/ShowPickerActions';
import { ShowPickerProgress } from './components/ShowPickerProgress';
import { ShowPickerStepper } from './components/ShowPickerStepper';

export const ShowPicker = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Button variant="link" fontWeight="light" fontSize="2xl" onClick={onOpen}>
				Show Picker
			</Button>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent bgColor="purpleDarkest">
					<ModalHeader>
						<Heading>Show Picker</Heading>
					</ModalHeader>
					<ModalBody>
						<ShowPickerStepper />
					</ModalBody>
					<ModalFooter>
						<Flex direction="column" width="100%" gap={6}>
							<ShowPickerProgress />
							<ShowPickerActions />
						</Flex>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};
