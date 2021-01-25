import React from 'react';
import styled from 'styled-components';
import { Menu } from '../Icons';
import { HamburgerButton } from './IconButton';

const StyledHeader = styled.header`
	position: absolute;
	top: 0px;
	left: 0px;
	background-color: black;
	width: 100%;
	height: 50px;
	z-index: 9999;
	display: flex;
	padding: 8px;
	box-sizing: border-box;
	border-bottom: 1px solid gray;
`;

const Header = (props) => {
	const {
		setShowsidebar = () => {
			console.log('i should do something...');
		},
	} = props;

	return (
		<StyledHeader>
			<HamburgerButton
				onClick={() => setShowsidebar((showSidebar) => !showSidebar)}
			>
				<Menu />
			</HamburgerButton>
		</StyledHeader>
	);
};

export default Header;
