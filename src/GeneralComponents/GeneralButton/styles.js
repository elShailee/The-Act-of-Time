import styled from 'styled-components';

export default styled.div`
	height: ${({ theme }) => theme.sizes.buttonsHeight.L};
	border: ${({ theme }) => theme.sizes.border} solid ${({ theme }) => theme.colors.basicShade};
	border-radius: ${({ theme }) => theme.sizes.borderRadius};
	font-size: ${({ theme }) => theme.sizes.text.major};
	text-transform: uppercase;
	box-sizing: border-box;

	${({ theme }) => theme.customStyles.centerItems}
	${({ theme }) => theme.customStyles.highlighted}
	${({ theme }) => theme.customStyles.nonSelectable}
	${({ theme }) => theme.customStyles.clickable}
`;
