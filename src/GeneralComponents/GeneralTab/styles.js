import styled from 'styled-components';

const Tab = styled.div`
	padding: ${({ theme }) => theme.sizes.padding};
	font-size: ${({ theme }) => theme.sizes.text.minor};
	border-radius: ${({ theme }) => theme.sizes.borderRadius};
	${({ theme }) => theme.customStyles.nonSelectable}
`;

export default Tab;
