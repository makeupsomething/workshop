import React from 'react';
import styled from 'styled-components';
import { Warning } from '../Icons';

const ErrorWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: white;
`;

const Error = () => {
	return (
		<ErrorWrapper>
			<Warning />
			<p>Error, please refresh</p>
		</ErrorWrapper>
	);
};

export default Error;
