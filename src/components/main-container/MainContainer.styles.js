import styled from 'styled-components';

const StyledDiv = styled.div`
	background-color: ${({ $bgcolor }) => $bgcolor};
	height: 500px;
	width: 920px;
	display: ${({ $display }) => $display};
	margin: 150px auto;
	@media only screen and (max-width: 425px) {
		display: flex;
		flex-direction: column;
		width: 327px;
		margin: 0 auto;
	}
`;
export { StyledDiv };
