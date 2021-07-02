import styled from 'styled-components';

export const GeneralButton = styled.div`
	height: ${({ theme }) => theme.sizes.buttonsHeight.L};
	border-radius: ${({ theme }) => theme.sizes.borderRadius.M};
	font-size: ${({ theme }) => theme.sizes.text.M};
	text-transform: uppercase;
	box-sizing: border-box;

	${({ theme }) => theme.customStyles.borderShading(theme)}
	${({ theme }) => theme.customStyles.centerItems}
	${({ theme }) => theme.customStyles.highlighted}
	${({ theme }) => theme.customStyles.clickable}
`;
