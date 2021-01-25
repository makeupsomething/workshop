import styled from 'styled-components';

const IconButon = styled.button`
	background-color: black;
	border: none;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 8px;
	box-sizing: border-box;
	outline: 0;
`;

export const HamburgerButton = styled(IconButon)`
	background-color: transparent;
`;

export default IconButon;
