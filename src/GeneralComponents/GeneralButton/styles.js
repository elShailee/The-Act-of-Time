import styled from 'styled-components';

export const GeneralButton = styled.div`
	height: ${({ theme }) => theme.sizes.buttonsHeight.L};
	border: ${({ theme }) => theme.sizes.border} solid ${({ theme }) => theme.colors.generalButton.borderShade};
	border-radius: ${({ theme }) => theme.sizes.borderRadius.M};
	font-size: ${({ theme }) => theme.sizes.text.L};
	text-transform: uppercase;
	box-sizing: border-box;

	${({ theme }) => theme.customStyles.centerItems}
	${({ theme }) => theme.customStyles.highlighted}
	${({ theme }) => theme.customStyles.clickable}
`;
