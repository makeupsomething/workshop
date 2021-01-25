import React from 'react';
import styled from 'styled-components';
/**
 * A loading spinner
 */
const SpinnerWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: white;
`;
const SpinnerCircle = styled.span`
	@keyframes rotation {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	width: 2rem;
	height: 2rem;
	border: 5px solid hsl(212 34% 24% / 1);
	border-bottom-color: #fff;
	border-radius: 50%;
	display: inline-block;
	animation: rotation 1s linear infinite;
`;

const Spinner = () => {
	return (
		<SpinnerWrapper>
			<SpinnerCircle />
			<p>loading areas...</p>
		</SpinnerWrapper>
	);
};

export default Spinner;
