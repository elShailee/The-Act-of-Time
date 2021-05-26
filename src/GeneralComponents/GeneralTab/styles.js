import styled from 'styled-components';

const Tab = styled.div`
	display: flex;
	flex-direction: column;
	padding: ${({ theme }) => theme.sizes.padding.M};
	font-size: ${({ theme }) => theme.sizes.text.minor};
	border-radius: ${({ theme }) => theme.sizes.borderRadius};
	box-sizing: border-box;
	align-items: center;
	${({ theme }) => theme.customStyles.nonSelectable};
`;

export default Tab;
