import styled from 'styled-components';

const Tab = styled.div`
	border-radius: ${({ theme }) => theme.sizes.b_radius};
	padding: ${({ theme }) => theme.sizes.padding};
	font-size: ${({ theme }) => theme.sizes.text.minor};
`;

export default Tab;
