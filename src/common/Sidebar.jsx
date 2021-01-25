import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const SidebarWrapper = styled.div`
	height: calc(100vh - 50px);
	top: 50px;
	width: 300px;
	background-color: black;
	transition: ease-in 0.3s;
	z-index: 9;
	position: absolute;
	left: ${(props) => (props.showSidebar ? '0px' : '-300px')};
`;

const Title = styled.h1`
	color: white;
	border-bottom: 1px solid gray;
	padding: 1rem;
	box-sizing: border-box;
`;

const Sidebar = ({ showSidebar, children }) => {
	const { pathname } = useLocation();
	return (
		<SidebarWrapper showSidebar={showSidebar}>
			<Title>
				{pathname !== '/finished'
					? `Lesson ${pathname.replace('/', '')}`
					: 'Finished App'}
			</Title>
			{children}
		</SidebarWrapper>
	);
};

export default Sidebar;
