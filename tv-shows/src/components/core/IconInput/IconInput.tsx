import { Icon, Input, InputGroup, InputLeftAddon } from '@chakra-ui/react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import { IconType } from 'react-icons';

interface IIconInputProps<T extends FieldValues> {
	icon: IconType;
	placeholder: string;
	type: string;
	formControlName: Path<T>;
	register: UseFormRegister<T>;
}

export function IconInput<T extends FieldValues>({
	icon,
	placeholder,
	type,
	formControlName,
	register,
}: IIconInputProps<T>) {
	return (
		<InputGroup size="lg">
			<InputLeftAddon backgroundColor="transparent" borderEndStartRadius="3xl" borderStartStartRadius="3xl">
				<Icon as={icon} />
			</InputLeftAddon>
			<Input
				{...register(formControlName)}
				required
				type={type}
				borderRadius="3xl"
				borderLeft="none"
				placeholder={placeholder}
				backgroundColor="transparent"
				borderEndStartRadius="3xl"
				borderStartStartRadius="3xl"
			/>
		</InputGroup>
	);
}
