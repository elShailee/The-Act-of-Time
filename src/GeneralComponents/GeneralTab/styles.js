import styled from 'styled-components';

export const GeneralTab = styled.div`
	flex-direction: column;
	padding: ${({ theme }) => theme.sizes.padding.M};
	font-size: ${({ theme }) => theme.sizes.text.M};
	border-radius: ${({ theme }) => theme.sizes.borderRadius.M};
	box-sizing: border-box;
	${({ theme }) => theme.customStyles.centerItems}
	${({ theme }) => theme.customStyles.nonSelectable};
`;
