import styled from 'styled-components';

export const AreaList = styled.ul`
	padding: 0px;
`;

export const AreaInfo = styled.div`
	padding: 16px;
	box-sizing: border-box;
	color: white;
	display: flex;
	cursor: pointer;
	border-top: 1px solid gray;

	&:last-child {
		border-bottom: 1px solid gray;
	}

	&:hover {
		background-color: gray;
	}
`;
