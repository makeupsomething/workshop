import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { useTransition } from 'react-spring';
import dayjs from 'dayjs';
import { useToast } from '../ToastProvider';
import Toast from '../Toast';

const Wrapper = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	z-index: 9999;
`;

const ToastContainer = () => {
	const [state] = useToast();
	console.log(state);
	const transitions = useTransition(state.toasts, (toast) => toast.id, {
		from: { right: '-100%' },
		enter: { right: '0%' },
		leave: { right: '-100%' },
	});

	return createPortal(
		<Wrapper>
			{transitions.map(({ item, key, props }) => (
				<Toast key={key} id={item.id} style={props}>
					{item.text}
					{dayjs(item.timestamp).format('HH:mm:ss a')}
				</Toast>
			))}
		</Wrapper>,
		document.body,
	);
};

export default ToastContainer;
