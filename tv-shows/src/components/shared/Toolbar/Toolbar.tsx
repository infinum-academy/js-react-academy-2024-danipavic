'use client';

import { HamburgerIcon } from '@chakra-ui/icons';
import {
	Box,
	BoxProps,
	Button,
	Drawer,
	DrawerCloseButton,
	DrawerContent,
	DrawerOverlay,
	Flex,
	useDisclosure,
} from '@chakra-ui/react';
import { Header } from '../Header/Header';
import { SidebarNavigation } from '../SidebarNavigation/SidebarNavigation';

export function Toolbar({ ...rest }: BoxProps) {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Box {...rest}>
				<Flex justify="space-between" align="center">
					<Header />
					<Button size="md" leftIcon={<HamburgerIcon />} variant="link" minW="fit-content" mb="0" onClick={onOpen} />
				</Flex>
				<Drawer isOpen={isOpen} placement="left" onClose={onClose}>
					<DrawerOverlay />
					<DrawerContent bgColor="purpleDark">
						<DrawerCloseButton color="white" border={'2px solid white'} borderRadius="buttonRadius" />
						<SidebarNavigation mt="12" />
					</DrawerContent>
				</Drawer>
			</Box>
		</>
	);
}
