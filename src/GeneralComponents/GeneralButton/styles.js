import styled from 'styled-components';

export const GeneralButton = styled.div`
	height: ${({ theme }) => theme.sizes.buttonsHeight.L};
	border: ${({ theme }) => theme.sizes.border} solid rgba(0, 0, 0, 0.3);
	border-radius: ${({ theme }) => theme.sizes.borderRadius};
	font-size: ${({ theme }) => theme.sizes.text.major};
	text-transform: uppercase;

	${({ theme }) => theme.customStyles.centerItems}
	${({ theme }) => theme.customStyles.highlighted}
	${({ theme }) => theme.customStyles.nonSelectable}
	${({ theme }) => theme.customStyles.clickable}
`;
