import styled from 'styled-components';

export const GeneralButton = styled.div`
	height: ${({ theme }) => theme.sizes.buttonsHeight.L};
	border: ${({ theme }) => theme.sizes.border} solid ${({ theme }) => theme.colors.generalButton.border};
	border-radius: ${({ theme }) => theme.sizes.borderRadius.M};
	font-size: ${({ theme }) => theme.sizes.text.M};
	text-transform: uppercase;
	box-sizing: border-box;
	overflow: hidden;

	${({ theme }) => theme.customStyles.centerItems}
	${({ theme }) => theme.customStyles.highlighted}
	${({ theme }) => theme.customStyles.clickable}
`;
