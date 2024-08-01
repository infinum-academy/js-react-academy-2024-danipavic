'use client';
import {
	Button,
	Flex,
	Heading,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	useDisclosure,
} from '@chakra-ui/react';
import { ShowPickerActions } from './components/ShowPickerActions';
import { ShowPickerContextProvider } from './components/ShowPickerContextProvider';
import { ShowPickerProgress } from './components/ShowPickerProgress';
import { ShowPickerStepper } from './components/ShowPickerStepper';

export const ShowPicker = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<ShowPickerContextProvider>
			<Button variant="link" fontWeight="light" fontSize="2xl" onClick={onOpen}>
				Show Picker
			</Button>
			<Modal isOpen={isOpen} scrollBehavior="inside" isCentered onClose={onClose}>
				<ModalOverlay />
				<ModalContent maxW="fit-content" bgColor="purpleDarker">
					<ModalHeader>
						<Heading>Show Picker</Heading>
					</ModalHeader>
					<ModalCloseButton color="white" />
					<ModalBody>
						<ShowPickerStepper />
					</ModalBody>
					<ModalFooter>
						<Flex direction="column" width="100%" gap={6}>
							<ShowPickerProgress />
							<ShowPickerActions onClose={onClose} />
						</Flex>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</ShowPickerContextProvider>
	);
};
