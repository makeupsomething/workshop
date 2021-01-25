import React from 'react';
import styled from 'styled-components';
import { createPortal } from 'react-dom';
import IconButton from './IconButton';
import { Visible, VisibleOff } from '../Icons';

const MenuWrapper = styled.div`
	position: absolute;
	right: 8px;
	top: 0px;
	height: 100vh;
	width: 40px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 8px;
`;

export const Menu = ({ children }) => {
	const [open, setOpen] = React.useState(true);
	const toggle = () => setOpen(!open);

	return createPortal(
		<MenuWrapper>
			{React.Children.map(children, (child) =>
				React.cloneElement(child, { open, toggle }),
			)}
		</MenuWrapper>,
		document.body,
	);
};

export function MenuButton({ open, toggle, ...props }) {
	return open ? (
		<IconButton onClick={toggle} {...props}>
			<Visible />
		</IconButton>
	) : (
		<IconButton onClick={toggle} {...props}>
			<VisibleOff />
		</IconButton>
	);
}

export default Menu;
