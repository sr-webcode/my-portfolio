import React, { useState } from 'react';
import {
	Input,
	FormLabel,
	FormControl,
	FormErrorMessage,
	Card,
	Stack,
	Textarea,
	Button,
	LinkOverlay,
	LinkBox
} from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';

const SIMPLE_EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

interface FormData {
	name: string;
	email: string;
	message: string;
}

const ContactForm: React.FC = () => {
	const [formData, setFormData] = useState<FormData>({
		name: '',
		email: '',
		message: ''
	});
	const [errors, setErrors] = useState<Partial<FormData>>({});

	const validate = (): boolean => {
		const newErrors: Partial<FormData> = {};
		if (formData.email && !formData.email.match(SIMPLE_EMAIL_REGEX)) {
			newErrors.email = 'Invalid email address';
		}
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const isValid = validate();
		if (isValid) {
			// Handle form submission
			// console.log('Form submitted:', formData);
		}
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return (
		<Card width="100%" variant="filled" padding={{ base: 4, md: 6 }}>
			<Stack spacing={4}>
				<FormControl isInvalid={!!errors?.name}>
					<FormLabel>Name</FormLabel>
					<Input
						type="text"
						name="name"
						placeholder="Name"
						value={formData.name}
						onChange={handleChange}
						bgColor="white"
					/>
					{errors.name && <FormErrorMessage>{errors.name}</FormErrorMessage>}
				</FormControl>

				<FormControl isInvalid={!!errors.email}>
					<FormLabel>Email</FormLabel>
					<Input
						type="email"
						name="email"
						placeholder="Email"
						value={formData.email}
						onBlur={validate}
						onChange={handleChange}
						bgColor="white"
					/>
					{errors.email && <FormErrorMessage>{errors.email}</FormErrorMessage>}
				</FormControl>
				<FormControl isInvalid={!!errors.message}>
					<FormLabel>Message</FormLabel>
					<Textarea
						name="message"
						bgColor="white"
						placeholder="Your message here..."
						size="md"
						resize={'none'}
						value={formData.message}
						onChange={handleChange}
					/>
					{errors.message && (
						<FormErrorMessage>{errors.message}</FormErrorMessage>
					)}
				</FormControl>
				<Button
					as="a"
					href="mailto:sr.webcode@gmail.com?"
					size={{ base: 'sm', md: 'md' }}
					rightIcon={<EmailIcon />}
				>
					Send Message
				</Button>
			</Stack>
		</Card>
	);
};

export default ContactForm;
