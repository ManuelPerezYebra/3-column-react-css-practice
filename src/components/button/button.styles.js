import styled from 'styled-components';

const StyledButton = styled.button`
	color: ${({ $color }) => $color};
	width: 50%;
	margin-left: 3rem;

	margin-top: 3rem;
	padding: 0.9375rem;
	border-radius: 1.25rem;
	border: none;
	cursor: pointer;
	@media (hover: hover) {
		&:hover {
			color: white;
			background-color: transparent;
			border: 1px solid white;
		}
	}
`;

export { StyledButton };
