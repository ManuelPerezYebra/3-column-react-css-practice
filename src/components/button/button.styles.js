import styled from 'styled-components';

const StyledButton = styled.button`
	color: ${({ $color }) => $color};
	width: 50%;
	margin-left: 48px;
	margin-top: 83px;
	padding: 15px;
	border-radius: 20px;
	border: none;
	cursor: pointer;
`;

export { StyledButton };
