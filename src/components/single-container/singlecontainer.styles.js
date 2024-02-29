import styled from 'styled-components';

const StyledSingleContainer = styled.div`
	background-color: ${({ $bgColor }) => $bgColor};
	width: 33.33%;
	display: ${({ $display }) => $display};
	flex-direction: column;
	@media only screen and (max-width: 425px) {
		width: 327px;
		height: 442px;
		padding-bottom: 48px;
	}
`;

export { StyledSingleContainer };
