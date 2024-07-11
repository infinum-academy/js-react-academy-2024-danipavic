'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { SWRConfig } from 'swr';
import theme from '../styles/theme/theme';

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ChakraProvider theme={theme}>
			<SWRConfig>{children}</SWRConfig>
		</ChakraProvider>
	);
}
