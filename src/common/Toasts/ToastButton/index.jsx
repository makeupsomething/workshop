import React, { useState } from 'react';
import styled from 'styled-components';
import { addToast, useToast } from '../ToastProvider';

const ToastInputContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1rem;
	gap: 8px;
`;

const Input = styled.input`
	padding: 8px;
	border: none;
`;

const NotificationButton = styled.button`
	color: white;
	background-color: blue;
	border: none;
	padding: 8px;
	cursor: pointer;

	&:focus,
	&:hover {
		filter: brightness(120%);
	}
`;

const ToastButton = () => {
	const [, dispatch] = useToast();
	const [value, setValue] = useState('');

	return (
		<ToastInputContainer>
			<Input
				value={value}
				placeholder="Notification Text"
				onChange={(e) => setValue(e.target.value)}
			/>
			<NotificationButton
				onClick={() => {
					if (value) {
						addToast(dispatch, {
							id: Math.floor(Math.random() * 99999 + 11111),
							text: value,
							timestamp: new Date(),
						});
						setValue('');
					}
				}}
			>
				Add Notification
			</NotificationButton>
		</ToastInputContainer>
	);
};

export default ToastButton;
